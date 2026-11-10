# LarpScripts

A minimal, responsive, dark-themed static website for LarpScripts. Built with plain HTML, CSS, and JavaScript.

## Files

- `index.html` — page structure and script content
- `style.css` — responsive dark dashboard styling
- `script.js` — Home/Scripts navigation, mobile menu, and copy-to-clipboard behavior

## Run locally

Open `index.html` in a browser. For a local server, you can also run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub and Vercel

1. Extract `LarpScripts-New-Website.zip`.
2. Open the GitHub repository that currently contains your website.
3. Replace the existing website files with the four files from this package. Keep the filenames exactly as shown.
4. Commit and push the changes to the branch connected to Vercel (commonly `main`).
5. In Vercel, open the project and check **Deployments**. A new deployment should start automatically after the GitHub push.
6. When the deployment finishes, open the production domain and test Home, Scripts, all four Copy Code buttons, Discord links, and the WEAO link.

## Vercel settings

This is a static site. No build command or framework is required. Set the project root to the folder containing `index.html`; leave the build command empty and use `./` as the output directory if Vercel asks for one.

## Editing script loaders

Each script is displayed in a `<pre><code>` block in `index.html`. Keep the `script_key` line and loader line together when editing. The Copy Code buttons read the complete code from their own card automatically.

## Notes

- Discord invitation: https://discord.gg/2FTDUW9yve
- UNC information link: https://weao.xyz/
- No executor scores or rankings are hard-coded into the site.
