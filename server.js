// Small same-origin server for the plain HTML/CSS/JS edition.
// Keep OPENAI_API_KEY on this server; never put it in script.js or index.html.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
    ACT_AS, CREATE_REQUEST, REFINE_REQUEST,
    findDress, findHairFlower, findHairstyle, findPalette, findPoseDetail,
    findPrideFlag, validateTerms
} from './script.js';

const root = dirname(fileURLToPath(import.meta.url));
const allowedFiles = new Map([
    ['/', ['index.html', 'text/html; charset=utf-8']],
    ['/index.html', ['index.html', 'text/html; charset=utf-8']],
    ['/style.css', ['style.css', 'text/css; charset=utf-8']],
    ['/script.js', ['script.js', 'text/javascript; charset=utf-8']],
    ['/favicon.svg', ['favicon.svg', 'image/svg+xml']],
    ['/apple-touch-icon.png', ['apple-touch-icon.png', 'image/png']],
    ['/icon-192.png', ['icon-192.png', 'image/png']],
    ['/icon-512.png', ['icon-512.png', 'image/png']],
    ['/manifest.webmanifest', ['manifest.webmanifest', 'application/manifest+json']],
    ['/sw.js', ['sw.js', 'text/javascript; charset=utf-8']]
]);
function json(response, status, data) {
    response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    response.end(JSON.stringify(data));
}
async function readLimitedBody(request, maxBytes) {
    const parts = [];
    let size = 0;
    for await (const part of request) {
        size += part.length;
        if (size > maxBytes) throw new Error('Request is too large.');
        parts.push(part);
    }
    return Buffer.concat(parts);
}
function imageMatchesType(bytes, type) {
    const png = bytes[0] === 137 && bytes[1] === 80 && bytes[2] === 78 && bytes[3] === 71;
    const jpeg = bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
    const webp = bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP';
    return type === 'image/png' && png || type === 'image/jpeg' && jpeg || type === 'image/webp' && webp;
}
function buildImagePrompt(recipe) {
    const terms = recipe.terms;
    const dress = findDress(terms.dress_category);
    const hairstyle = findHairstyle(terms.hairstyle);
    const palette = findPalette(terms.palette.name);
    const note = terms.edit_note.replace(/[\u0000-\u001f]/g, ' ').trim();
    return [
        `ACT AS: ${ACT_AS}.`,
        `REQUEST: ${recipe.request}`,
        'TERMS: Use the supplied image as the reference. Produce one photorealistic editorial fashion image of the same adult person. Preserve recognizable facial features, skin tone, body proportions, and other stable identity cues as much as possible. Do not add or swap people.',
        `Outfit collection: ${terms.dress_mode}. Dress category (${terms.dress_family}): ${dress.name}. Required garment construction: ${dress.description}. Make the selected outfit unmistakable; do not substitute another category.`,
        `Color story (${terms.palette_group}): ${palette.name}. Palette hex references: ${terms.palette.colors.join(', ')}. Apply these as the dominant garment colors, following this balance: ${palette.description}. Avoid unrelated dominant garment colors.`,
        `Hairstyle (${terms.hairstyle_family}): ${hairstyle.name}. Required hair arrangement: ${hairstyle.description}. Keep the subject's hairline and recognizable features where possible.`,
        terms.hair_flowers.enabled
            ? `Flowers in hair: ${terms.hair_flowers.style}. Arrange them as follows: ${findHairFlower(terms.hair_flowers.style).description}. Treat the flowers as an accent on the selected hairstyle; keep the face and jewelry visible.`
            : 'Flowers in hair: none. Do not add floral hair decorations.',
        `Jewelry combination (${terms.jewelry.family}): ${terms.jewelry.combo}. Use the coordinated set exactly as specified: necklace: ${terms.jewelry.pieces.necklace}; ear tops or earrings: ${terms.jewelry.pieces.earrings}; bangles or bracelet: ${terms.jewelry.pieces.wrist}; nose ring: ${terms.jewelry.pieces.nose_ring}; headpiece: ${terms.jewelry.pieces.headpiece}; rings: ${terms.jewelry.pieces.rings}. Do not add jewelry where the specified value is None. Keep all pieces coherent with the selected outfit and palette.`,
        `Pose category: ${terms.pose}. Exact pose style: ${terms.pose_detail}. Direction: ${findPoseDetail(terms.pose, terms.pose_detail).description}. Keep anatomy and balance natural; do not hide the outfit or jewelry.`,
        `Background: ${terms.background}. ${terms.dress_mode === 'LGBTQ+ styling'
            ? `Include a clearly recognizable ${terms.pride_flag} flag as a fabric banner or backdrop behind the model, with the correct design: ${findPrideFlag(terms.pride_flag).description}. Keep the flag behind the person and separate from the selected outfit colors.`
            : 'Do not add a Pride flag backdrop.'} Lighting: ${terms.lighting}. Framing: ${terms.framing}.`,
        note ? `Minor refinement: ${note}. This note may refine details but must not override the selected dress, palette, hairstyle, jewelry, pose, or identity instructions.` : '',
        'Keep garment structure physically plausible. No extra subjects, text, watermark, or logo. Treat every selected JSON styling term as a required instruction. If instructions conflict, prioritize identity preservation and the explicitly selected dress, color palette, hairstyle, jewelry set, and pose.'
    ].filter(Boolean).join('\n');
}
async function generate(request, response) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return json(response, 503, { error: 'Image generation is not configured. Add OPENAI_API_KEY to the server environment.' });
    if (Number(request.headers['content-length'] || 0) > 10 * 1024 * 1024) return json(response, 413, { error: 'Request is too large.' });
    let form;
    try {
        const body = await readLimitedBody(request, 10 * 1024 * 1024);
        const incoming = new Request('http://localhost/api/generate', {
            method: 'POST',
            headers: { 'content-type': request.headers['content-type'] || '' },
            body
        });
        form = await incoming.formData();
    } catch (error) {
        return json(response, error?.message === 'Request is too large.' ? 413 : 400, { error: error?.message === 'Request is too large.' ? error.message : 'Could not read upload.' });
    }
    const image = form.get('image');
    if (!(image instanceof File)) return json(response, 400, { error: 'Upload an image first.' });
    if (image.size < 100 || image.size > 8 * 1024 * 1024) return json(response, 400, { error: 'Image must be between 100 bytes and 8 MB.' });
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(image.type)) return json(response, 400, { error: 'Use a JPG, PNG, or WebP image.' });
    const bytes = Buffer.from(await image.slice(0, 12).arrayBuffer());
    if (!imageMatchesType(bytes, image.type)) return json(response, 400, { error: 'The uploaded file is not a valid supported image.' });
    let recipe;
    try { recipe = JSON.parse(String(form.get('recipe') || '')); }
    catch { return json(response, 400, { error: 'Invalid prompt JSON.' }); }
    if (!recipe || typeof recipe !== 'object' || Array.isArray(recipe)) return json(response, 400, { error: 'Invalid prompt JSON.' });
    const expectedRequest = recipe.parent_version === null ? CREATE_REQUEST : REFINE_REQUEST;
    if (recipe.schema_version !== '1.5' || !Number.isSafeInteger(recipe.version) || recipe.version < 1 ||
        !(recipe.parent_version === null || Number.isSafeInteger(recipe.parent_version) && recipe.parent_version > 0) ||
        typeof recipe.created_at !== 'string' || Number.isNaN(Date.parse(recipe.created_at)) ||
        recipe.act_as !== ACT_AS || recipe.request !== expectedRequest || !validateTerms(recipe.terms)) {
        return json(response, 400, { error: 'Prompt JSON contains unsupported or conflicting values. Review the Terms and try again.' });
    }
    const outgoing = new FormData();
    outgoing.append('model', 'gpt-image-2.5-sunburst');
    outgoing.append('image', image, image.name || 'reference.png');
    outgoing.append('prompt', buildImagePrompt(recipe));
    outgoing.append('size', '1024x1536');
    outgoing.append('quality', 'medium');
    outgoing.append('output_format', 'png');
    let upstream;
    try {
        upstream = await fetch('https://api.openai.com/v1/images/edits', {
            method: 'POST',
            headers: { Authorization: `Bearer ${apiKey}` },
            body: outgoing
        });
    } catch {
        return json(response, 502, { error: 'Could not reach the image provider. Please try again.' });
    }
    let result;
    try { result = await upstream.json(); }
    catch { return json(response, 502, { error: 'Image provider returned an invalid response.' }); }
    if (!upstream.ok) {
        const error = upstream.status === 401 ? 'The configured API key was rejected.'
            : upstream.status === 429 ? 'Image provider is busy or the account limit was reached.'
            : result?.error?.code === 'content_policy_violation' ? 'The image provider could not process this request. Try a different reference or description.'
            : 'Image generation failed. Please try again.';
        return json(response, upstream.status === 401 ? 503 : 502, { error });
    }
    const encodedImage = result?.data?.[0]?.b64_json;
    if (typeof encodedImage !== 'string' || !encodedImage) return json(response, 502, { error: 'Image provider did not return an image.' });
    return json(response, 200, { image: encodedImage, applied_recipe: recipe });
}
createServer(async (request, response) => {
    const pathname = new URL(request.url || '/', 'http://localhost').pathname;
    if (pathname === '/api/status' && request.method === 'GET') {
        return json(response, 200, { configured: Boolean(process.env.OPENAI_API_KEY) });
    }
    if (pathname === '/api/generate' && request.method === 'POST') {
        try { return await generate(request, response); }
        catch { return json(response, 500, { error: 'Unexpected server error. Please try again.' }); }
    }
    const asset = allowedFiles.get(pathname);
    if (request.method !== 'GET' || !asset) return json(response, 404, { error: 'Not found.' });
    try {
        const [filename, contentType] = asset;
        const contents = await readFile(join(root, filename));
        response.writeHead(200, { 'Content-Type': contentType, 'X-Content-Type-Options': 'nosniff' });
        response.end(contents);
    } catch { json(response, 404, { error: 'Not found.' }); }
}).listen(Number(process.env.PORT || 3000), process.env.HOST || '127.0.0.1', () => {
    console.log(`Femamodel is ready at http://${process.env.HOST || '127.0.0.1'}:${process.env.PORT || 3000}`);
});
