# Sabourti Classroom Canvas

Build a polished, production-quality official marketing website for "Sabourti | سبورتي", an independent Windows desktop interactive whiteboard application made for primary-school teachers, especially in Morocco.

IMPORTANT PROJECT BOUNDARIES:
- This is a standalone marketing/landing website, NOT a browser version of the whiteboard.
- Do not modify or depend on the existing Tauri application source code.
- No authentication, database, payments, user accounts, or backend are needed.
- Do not invent a download URL, version number, price, company address, testimonials, ratings, or unsupported product claims. Use clearly marked editable placeholders where real assets/details are not yet supplied.
- The app is a Windows desktop app built with Tauri 2 and web technologies. The website itself must be responsive and work on desktop/mobile.

DESIGN DIRECTION:
- Premium, modern educational software brand; clean, confident, welcoming, not childish.
- Arabic is the default language and the entire Arabic experience must be RTL, including layout, navigation, spacing, icons where appropriate, and text alignment.
- Add a visible Arabic/French language switch. French version must be properly LTR with translated content, not merely mirrored Arabic.
- Palette: deep navy/indigo, vivid blue, subtle turquoise accents, warm off-white backgrounds; accessible contrast; restrained gradients and soft shadows.
- Use elegant Arabic typography (e.g. Cairo or Tajawal) and a complementary Latin font.
- Create a temporary typographic logo lockup "Sabourti | سبورتي" that can be replaced later.
- Avoid generic stock-photo hero imagery. Create an attractive product-focused hero with a large, convincing whiteboard application mockup/interface preview built from UI elements and abstract educational content. Label any illustrative mockup appropriately; do not pretend it is a real screenshot.
- High-quality responsive layout, refined micro-interactions, subtle animations respecting reduced-motion preferences.

SITE STRUCTURE (single-page landing site with anchored sections):
1. Sticky header: temporary brand logo, nav links, language switch, prominent download CTA.
2. Hero: clear Arabic headline about helping teachers teach, explain, draw and interact on a digital board; short supporting copy; primary CTA "اكتشف التطبيق" / "Découvrir l’application" and secondary download CTA. Product UI showcase.
3. Trust/value strip: focus on classroom teaching, simple workflow, Windows desktop; avoid fake statistics or endorsements.
4. Features section with attractive cards for known capabilities:
   - writing, drawing, eraser, selection, text and shapes
   - lesson/page organization and saving
   - white, ruled, grid and Seyès page backgrounds
   - educational geometry tools and classroom instruments
   - teacher tools including highlighter and laser pointer
   Keep descriptions accurate and concise; do not imply unverified capabilities.
5. Product showcase/gallery section with editable screenshot placeholders and clear labels so real screenshots can be inserted later.
6. "Designed for teachers" section focused on primary education and classroom use, with Arabic/French/mathematics/science subject examples.
7. Download section: Windows desktop app. Since no verified installer URL, show a clear "رابط التحميل سيُضاف قريباً" / French equivalent placeholder, not a broken or fake download button. Include editable placeholders for current version, file size and system requirements; don't invent values. Mention Windows only.
8. FAQ with accurate questions: Is it a web app? (No, desktop app); does it need installation? (Yes); does it work offline? Phrase carefully: after installation, core app use is designed to work locally; don't promise every first-run asset or update is offline. Is a Mac version available? Do not claim one; say Windows is the currently targeted platform.
9. Footer: brand, anchor links, language toggle, copyright with current year dynamically.

IMPLEMENTATION:
- Use React + TypeScript + Tailwind + shadcn/ui as appropriate to Lovable's default stack.
- Build reusable components and keep content centralized for easy edits/translations.
- Make language switching functional and preserve the chosen language while navigating the page (no need for account/storage).
- Ensure all buttons and nav links work. Download CTA should scroll to download section until a real installer URL is supplied.
- Mobile navigation must work well.
- Add page title, meta description, Open Graph basics, semantic headings, keyboard accessibility, focus states and alt text.
- Use lucide icons where useful.
- Do not add unnecessary dependencies.
- Finish with a cohesive, visually impressive first version ready for review.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sabourti-classroom-canvas.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/060d20a2-2aad-4bce-9a20-7876a9a5fcd6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
