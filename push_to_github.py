#!/usr/bin/env python3
"""Push this Femamodel source folder to a GitHub repository and enable Pages.

Run from this directory:
    python3 push_to_github.py

The script prompts for the repository link. You may also pass the link as an argument.

Git must already be able to authenticate to GitHub. If GitHub CLI (`gh`) is
installed and signed in, the script also tries to enable branch-based Pages.
Otherwise it prints the one-time manual setting and the expected public URL.
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path
from urllib.parse import urlparse

HERE = Path(__file__).resolve().parent
PUBLISH_FILES = (
    "index.html",
    "style.css",
    "script.js",
    "favicon.svg",
    "apple-touch-icon.png",
    "icon-192.png",
    "icon-512.png",
    "manifest.webmanifest",
    "sw.js",
    ".nojekyll",
    ".gitignore",
    "README.md",
    "server.js",
    "package.json",
    "push_to_github.py",
)


def run(*args: str, input_text: str | None = None, check: bool = True) -> subprocess.CompletedProcess[str]:
    result = subprocess.run(
        list(args), cwd=HERE, input=input_text, text=True,
        stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=False,
    )
    if check and result.returncode:
        detail = result.stderr.strip() or result.stdout.strip()
        raise RuntimeError(f"{' '.join(args)} failed: {detail}")
    return result


def parse_repository(value: str) -> tuple[str, str, str]:
    """Accept only an ordinary github.com HTTPS or SSH repository URL."""
    value = value.strip().rstrip("/")
    match = re.fullmatch(r"git@github\.com:([A-Za-z0-9-]+)/([A-Za-z0-9_.-]+?)(?:\.git)?", value)
    if match:
        owner, repo = match.groups()
        return owner, repo, f"git@github.com:{owner}/{repo}.git"
    parsed = urlparse(value)
    if parsed.scheme != "https" or parsed.hostname != "github.com" or parsed.username or parsed.password or parsed.query or parsed.fragment:
        raise ValueError("Provide an ordinary https://github.com/OWNER/REPOSITORY or git@github.com:OWNER/REPOSITORY.git URL.")
    match = re.fullmatch(r"/([A-Za-z0-9-]+)/([A-Za-z0-9_.-]+?)(?:\.git)?", parsed.path)
    if not match:
        raise ValueError("The GitHub URL must identify one repository, for example https://github.com/OWNER/REPOSITORY.")
    owner, repo = match.groups()
    return owner, repo, f"https://github.com/{owner}/{repo}.git"


def pages_url(owner: str, repo: str) -> str:
    if repo.lower() == f"{owner.lower()}.github.io":
        return f"https://{owner.lower()}.github.io/"
    return f"https://{owner.lower()}.github.io/{repo}/"


def ensure_clean_target(remote_url: str) -> None:
    if not (HERE / ".git").exists():
        run("git", "init", "-b", "main")
    root = Path(run("git", "rev-parse", "--show-toplevel").stdout.strip()).resolve()
    if root != HERE:
        raise RuntimeError(f"The Git repository root is {root}, not this source folder. Move this folder outside that repository before pushing.")
    branch = run("git", "branch", "--show-current").stdout.strip()
    if branch and branch != "main":
        raise RuntimeError(f"This folder is on branch {branch!r}. Switch it to main before running the script.")
    origin = run("git", "remote", "get-url", "origin", check=False)
    if origin.returncode == 0:
        current = origin.stdout.strip()
        if current.rstrip("/").removesuffix(".git") != remote_url.rstrip("/").removesuffix(".git"):
            raise RuntimeError(f"The existing origin points to {current}. This script will not overwrite it.")
    else:
        run("git", "remote", "add", "origin", remote_url)


def incorporate_remote_starter(repo: str) -> None:
    """Merge a GitHub-generated one-line README; leave other remote work untouched."""
    fetched = run("git", "fetch", "origin", "main", check=False)
    if fetched.returncode:
        detail = fetched.stderr.strip() or fetched.stdout.strip()
        if "couldn't find remote ref main" in detail:
            return  # Newly created repository with no commits yet.
        raise RuntimeError(f"Could not fetch GitHub's main branch: {detail}")
    if run("git", "merge-base", "--is-ancestor", "origin/main", "HEAD", check=False).returncode == 0:
        return
    names = run("git", "ls-tree", "-r", "--name-only", "origin/main").stdout.splitlines()
    starter_readme = run("git", "show", "origin/main:README.md", check=False)
    if names != ["README.md"] or starter_readme.returncode or starter_readme.stdout.strip() != f"# {repo}":
        raise RuntimeError(
            "The GitHub repository contains work beyond its generated README. "
            "No files were overwritten; merge those changes manually before pushing."
        )
    merged = run("git", "merge", "--no-edit", "--allow-unrelated-histories", "-X", "ours", "origin/main", check=False)
    if merged.returncode:
        run("git", "merge", "--abort", check=False)
        raise RuntimeError("Could not merge GitHub's starter README. Resolve the remote history before pushing.")


def enable_pages(owner: str, repo: str) -> str | None:
    if not shutil.which("gh"):
        return None
    existing = run("gh", "api", f"repos/{owner}/{repo}/pages", check=False)
    if existing.returncode == 0:
        try:
            data = json.loads(existing.stdout)
            return data.get("html_url") or pages_url(owner, repo)
        except json.JSONDecodeError:
            return pages_url(owner, repo)
    payload = json.dumps({"source": {"branch": "main", "path": "/"}})
    created = run(
        "gh", "api", "--method", "POST", "-H", "Accept: application/vnd.github+json",
        f"repos/{owner}/{repo}/pages", "--input", "-",
        input_text=payload, check=False,
    )
    if created.returncode == 0:
        try:
            data = json.loads(created.stdout)
            return data.get("html_url") or pages_url(owner, repo)
        except json.JSONDecodeError:
            return pages_url(owner, repo)
    print("GitHub CLI could not enable Pages automatically:", created.stderr.strip() or created.stdout.strip())
    return None


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("repository_url", nargs="?", help="URL of an empty GitHub repository you have created")
    parser.add_argument("--dry-run", action="store_true", help="validate inputs and show the plan without changing Git or GitHub")
    args = parser.parse_args()
    try:
        repository_url = args.repository_url or input("Paste the URL of your empty GitHub repository: ").strip()
        owner, repo, remote_url = parse_repository(repository_url)
        missing = [name for name in PUBLISH_FILES if not (HERE / name).is_file()]
        if missing:
            raise RuntimeError("Required files are missing: " + ", ".join(missing))
        expected = pages_url(owner, repo)
        print(f"Source folder: {HERE}")
        print(f"Repository: https://github.com/{owner}/{repo}")
        print(f"Expected Pages URL: {expected}")
        print("Publishing static files only. server.js is source code; GitHub Pages does not execute it.")
        if args.dry_run:
            print("Dry run complete. No files were pushed.")
            return 0
        ensure_clean_target(remote_url)
        run("git", "add", "--", *PUBLISH_FILES)
        staged = run("git", "diff", "--cached", "--quiet", check=False)
        if staged.returncode == 1:
            run("git", "commit", "-m", "Publish Femamodel AI Fashion Studio source")
        elif staged.returncode != 0:
            raise RuntimeError("Could not inspect staged files.")
        incorporate_remote_starter(repo)
        run("git", "push", "-u", "origin", "main")
        print("Code pushed successfully.")
        enabled = enable_pages(owner, repo)
        if enabled:
            print(f"GitHub Pages enabled: {enabled}")
        else:
            print(f"One-time setting: open https://github.com/{owner}/{repo}/settings/pages")
            print("Under Build and deployment, choose 'Deploy from a branch', branch 'main', folder '/ (root)', then Save.")
        print("After GitHub finishes publishing, open:", expected)
        print("Image generation requires a separate server with OPENAI_API_KEY; GitHub Pages hosts only the interface.")
        return 0
    except (ValueError, RuntimeError) as error:
        print(f"Error: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
