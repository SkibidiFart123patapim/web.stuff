# LarpScripts — New Website

A responsive, static HTML/CSS/vanilla-JS site. No build step or backend is required.

## Files
- `index.html` — page structure and sections
- `style.css` — responsive styling, Sakura Avenue background, panels, and code editor theme
- `script.js` — script cards, Luau token highlighting, independent copy controls, and mobile navigation

## Run locally
Open `index.html` in a browser. Clipboard copying works best on HTTPS or `localhost` (browser clipboard security requirement).

## Deploy to GitHub Pages / Vercel
1. Download and unzip `LarpScripts-New-Website.zip`.
2. In your GitHub repository, replace the old site files with `index.html`, `style.css`, `script.js`, and this `README.md` (keep the files at the repository root unless your deployment is configured for a subfolder).
3. Commit and push the changes.
4. In Vercel, make sure the project is connected to that repository and the **Root Directory** points to the folder containing `index.html`. For this static site, leave the build command empty and use the repository root as the output directory (or configure the static output as `.`).
5. Vercel will redeploy automatically after the push. Check the deployment URL.

## Editing
- Edit announcements in `index.html`.
- Script titles, descriptions, and exact source strings live in the `scripts` array in `script.js`. Keep source strings intact to preserve copy behavior.
- The Sakura Avenue image is loaded directly from the provided GitHub raw URL in `style.css`.
- Discord invite: `https://discord.gg/2FTDUW9yve`
- Key page: `https://work.ink/34nE/key-system`
- WEAO: `https://weao.xyz/`

## Notes
The background image and Google Fonts are external assets, so an internet connection is needed to load them. The syntax highlighter is a lightweight client-side tokenizer (not a full Luau parser).
