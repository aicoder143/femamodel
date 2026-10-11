# Femamodel AI Fashion Studio — readable web edition

This folder contains a plain HTML/CSS/JavaScript edition of the current site. `index.html` is the page structure, `style.css` is the complete stylesheet, and `script.js` contains the catalogs, browser interactions, history storage, JSON editing, and image request. All three files are readable source, not minified bundles.

`server.js` is required for image generation. It validates uploads and JSON, then calls the image-editing API using a server-side `OPENAI_API_KEY`. Do not put the key in `script.js` or `index.html`.

Run with Node.js 22 or later. Set `OPENAI_API_KEY` in the server environment, then run `npm start`.

Open `http://127.0.0.1:3000`. Without a key, the design tools, JSON editor, and local History still work; image generation reports that setup is needed. Generated images and saved prompts are stored in this browser's IndexedDB. The image provider may not match every detail exactly.

The `manifest.webmanifest`, branded icons, install button, and `sw.js` support mobile home-screen installation and offline access to the editor shell. On iPhone, use the browser Share menu and **Add to Home Screen**; on Android, use **Install app** or **Add to Home screen** if the browser does not show its install prompt. A public deployment needs HTTPS. Image generation still requires an appropriately configured server environment and network access.

The original React/Vinext site source is provided separately as `original-site-source.zip` in the parent outputs folder. The plain-web edition is a conversion for readability; the archive preserves the exact framework implementation.

## Publish on GitHub Pages

Create a new empty public GitHub repository. From this folder, run `python3 push_to_github.py` followed by the repository URL. The script pushes the complete readable source to `main` and, when GitHub CLI is signed in with the necessary permissions, enables Pages. Otherwise it prints the one-time setting to select in GitHub. The published Pages site contains the interface, local History, and JSON tools. Image generation needs a separately hosted server because GitHub Pages cannot run `server.js`.
