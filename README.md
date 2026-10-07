# Minecraft portfolio

Russel Daniel Paul’s standalone Minecraft portfolio, copied from the Minecraft experience in [Portfolio](https://github.com/wrestle-R/Portfolio).

The same world opens at `/` and `/minecraft`. The back links and résumé link lead to [the main portfolio](https://russel.is-a.dev).

## Development

Requires Node.js 20 or later.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

No environment variables or API credentials are required.

## Exploring

- Scroll or swipe to follow the guided house tour, or choose a chapter in the timeline.
- On desktop, choose **Explore freely** to walk with W A S D and look with the mouse.
- Open the boards to read projects, experience, and contact details.
- Toggle the music with the speaker button. Press D to switch the theme.
- Choose **Read an accessible version** for the complete text portfolio. Reduced-motion visitors start in this view, and it also appears when 3D cannot load.

## Source and deployment

`minecraft/` contains the original scene, model, music, fonts, textures, model generation scripts, and build guides. Company logos needed by the experience live in `public/Techstack/`. The Monocraft font license is included in `minecraft/assets/fonts/OFL.txt`.

Vercel builds this Vite project with `npm run build` and publishes `dist/`. `vercel.json` keeps the `/minecraft` entry point working on direct visits and reloads. Pushes to `main` deploy through the connected GitHub repository.
