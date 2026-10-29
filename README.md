# Arulraj Developer Portfolio

A dark terminal-inspired, responsive portfolio built with React, Vite, and Tailwind CSS. The layout uses custom CSS for the visual design and Lucide icons.

## Requirements

- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Before publishing — personalize these items

1. In `src/App.jsx`, update `profile.email` with your real professional email.
2. Update `profile.linkedin` to your actual LinkedIn profile URL.
3. Update `profile.leetcode` to your actual LeetCode profile URL.
4. Add your resume PDF at `public/Arulraj-Resume.pdf`. The resume button expects that exact path.
5. Check every project repository URL and add live demo URLs only when they exist.
6. Verify education, certifications, training dates, and experience wording.
7. Add project screenshots and verified metrics when available. Do not publish unverified performance claims.
8. Consider adding a custom domain after deploying.

## Deploy to Vercel

1. Push this project to a new GitHub repository.
2. Import the repository in Vercel.
3. Use build command `npm run build`.
4. Use output directory `dist`.
5. Deploy.

No backend or environment variables are required for this static portfolio.

## Notes

- This is a starter portfolio. Validate all links and content before sharing with recruiters.
- The pancreatic image analysis project is described as research, not as a clinical diagnostic system.
- The contact email copy button uses the browser clipboard API; if permission is unavailable, the email action falls back to a `mailto:` link.
