# Mark Patlingrao — Enhanced Web Portfolio

A responsive personal portfolio built with plain HTML, CSS, and JavaScript. The portfolio includes the submitted portrait and three interactive project demos.

## Preview

1. Extract the ZIP file.
2. Open `index.html` in Chrome, Edge, or Firefox.
3. Visit the **Projects** section to open each interactive demo.

## Folder layout

- `index.html` — homepage
- `assets/css/style.css` — homepage theme and responsive layout
- `assets/css/games.css` — shared interactive-demo styling
- `assets/js/script.js` — navigation, scroll state, and footer year
- `assets/images/` — optimized portrait and favicon
- `projects/memory-matching.html` — memory game
- `projects/calculator.html` — calculator
- `projects/tic-tac-toe.html` — tic tac toe

## Before publishing

- Confirm the displayed name, biography, skills, and ownership/contributions to all project demos.
- **Add Mark's actual public contact email or profile link** to the `#contact` section in `index.html`. None was provided, so no fictional email or non-working contact form was added.
- Test the demos and navigation on desktop and mobile.
- Keep `index.html` and the folders at the repository root when uploading to GitHub Pages.

## GitHub Pages

Create a **Public** repository, upload all the extracted contents (not just the ZIP), then go to **Settings → Pages → Deploy from a branch → main → /(root) → Save**. Use the GitHub Pages address shown in Settings when deployment finishes.

## Notes

- Fonts are requested from Google Fonts; system font fallbacks are used when offline.
- This static site requires no API keys, database, packages, or build step.
- Games are local browser implementations. The calculator evaluates expressions without using `eval()`.
