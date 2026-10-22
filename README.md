# TeddyPups U.A.E. — frontend clone

React 19 + TypeScript + Vite + React Router + vanilla CSS + lucide-react. Static frontend, no backend.

## Run
```bash
npm install
npm install react-router-dom lucide-react   # if not already in package.json
npm run dev        # development
npm run build      # tsc -b && vite build -> dist/
npm run preview
```
Deploy: `vercel.json` rewrites all routes to `index.html` so deep links (e.g. `/puppies/maltipoo-max-male`) work.

## Where things live
- `src/data/puppies.ts` — single source for listing + detail pages (15 available, 27 gone home)
- `src/utils/images.ts` — ALL image URLs go through `mediaUrl()`; swap to local files here
- `src/utils/whatsapp.ts` — number, phone, email and WhatsApp message builders
- `src/styles/variables.css` — design tokens

## Known gaps (see chat summary)
1. Images hotlink the reference site's media. Replace with licensed/own files in `public/images/` before publishing.
2. Colours/fonts are approximated (reference CSS not readable). Only `#fffdf8` is verified.
3. `category` (dubai / imported) is verified only for 4 available puppies (all imported). Set it per puppy in `puppies.ts`.
4. Contact email was decoded from the site's Cloudflare-obfuscated link — verify it.
