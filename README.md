# TeddyPups U.A.E. — frontend clone

A static React 19 + TypeScript + Vite clone of https://puppy.instabizweb.com/, using React Router, vanilla CSS and lucide-react. There is no backend: enquiry forms open WhatsApp (`wa.me/971541676733`) with the visitor's details filled in.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build -> dist/
npm run preview    # serve the production build
npm run lint
```
If npm fails with `ENOSPC` (npm writes its cache and logs to the system drive), run the tools directly:
`node node_modules/vite/bin/vite.js`, `node node_modules/typescript/bin/tsc -b && node node_modules/vite/bin/vite.js build`.

Deploy: `vercel.json` rewrites every path to `index.html`, so deep links such as `/puppies/maltipoo-max-male` load and refresh correctly.

## Pages
| Route | Page |
| --- | --- |
| `/` | Homepage: a scroll from morning to night (hero, door hallway, signpost, WhatsApp chat, passport, dusk photo wall, night FAQ, front door) |
| `/puppies` | Teddy's sketchbook with filters (`?origin=`, `?collection=korean-teacup`, `?breed=`, `?gender=`) |
| `/puppies/:slug` | Storybook detail: gallery with full-screen viewer, facts, checklist, steps, enquiry letter |
| `/gone-home` | "One ticket home" tickets |
| `/happy-families` | Polaroid wall (64 photos) with viewer |
| `/how-it-works` | In Dubai / Imported tabs, promise stamps, delivery, why us (`#two-ways`, `#promise`, `#delivery`, `#why`) |
| `/faq` | Corkboard notes with search |
| `/contact` | "Dear TeddyPups" letter, contact details, showroom card |
| anything else | "Lost" poster |

## Where things live
- `src/data/puppies.ts`: the single source for listing and detail pages (15 available, 27 gone home; facts and photos taken from the reference)
- `src/data/*.ts`: FAQs, steps, testimonials, navigation and media
- `src/components/mascot/`: Teddy's drawings, scene anchors (`PupStop`) and the homepage walking actor (`PupActor`)
- `public/images/media/`: every photo, stored locally as `<name>.webp` (1200px) and `<name>-sm.webp` (640px); `public/videos/`: puppy and showroom clips; `public/images/brand/logo.png`
- `src/utils/images.ts`: `mediaUrl()` / `mediaFileUrl()` map the media paths in `src/data` to those local files
- `src/utils/whatsapp.ts`: phone, email and WhatsApp message builders
- `src/styles/`: `variables.css` (tokens) · `global.css` · `components.css` · `home.css` · `pages.css` · `responsive.css`

## Notes
1. All photos, puppy videos (Max, Korean Teacup Maltipoo, Maltipoo & Cavapoo, and three for the girl Maltipoo), the showroom clip and the logo were downloaded from the reference site and are served from `public/`. Nothing loads from the reference at runtime. They belong to TeddyPups, so get the owner's permission before publishing this clone publicly.
2. The contact email `teddypupsadmin@gmail.com` is the address the reference site publishes. All nine Cloudflare-protected email links on its pages decode to it.
3. The illustrations (Teddy, skyline, plane, basket, doors and so on) are new drawings in the reference's style, not copies of its artwork.
