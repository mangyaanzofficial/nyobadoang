# SANTANIC — Yaanz Official Portfolio

Premium dark portfolio built with Next.js 14, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy to Vercel
1. Upload this project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected Next.js settings and click **Deploy**.

## Edit your details
Open `app/page.tsx` and edit the `CONFIG` object near the top:
- `name`, `role`, `brand`, `team`
- `telegram`, `whatsappChannel`
- `email` (replace the placeholder with an active email)

Edit project cards in the `projects` array, skills in `skills`, and the timeline directly in the page component.

## Notes
- Project preview artwork is built with CSS, so no external image files are required.
- The email address is a placeholder. Replace it before publishing.
- Project URLs are starter links; update them if your live URLs differ.
- The design respects the visitor's reduced-motion preference.
