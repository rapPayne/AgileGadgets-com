# AI Instructions

This is the canonical AI instructions file for this project. All AI tool shims (CLAUDE.md, .cursorrules, etc.) point here.

## Commands

- `npm run dev` — start dev server at localhost:4321
- `npm run build` — type-check and build to `./dist/`
- `npm run preview` — Netlify preview (requires `netlify-cli`)
- `npm run astro` — direct Astro CLI access

## Architecture

**Tech stack:** Astro 6 (SSR, Netlify adapter), TypeScript strict mode, date-fns, Font Awesome. Deployed at https://agilegadgets.com.

### Content Collections

Blog posts live in `src/content/blog/` as Markdown files. The Zod schema in `content.config.ts` enforces required frontmatter: `title`, `description`, `pubDate`, `author`, `time-to-read`, `url`, `categories`. Optional image fields: `cloudinaryImageFileName`, `mainImageUrl`, `homePageImageUrl`, `listImageUrl`.

### Routing

File-based routing under `src/pages/`:
- `index.astro` — homepage showing latest 3 posts
- `blog/index.astro` — full post grid
- `blog/[...slug].astro` — dynamic post pages via Astro content collection slugs

### Component & Layout Structure

- `src/components/` — reusable Astro components (Card, NavigationBar, SiteFooter, PostCard, TagChip, Metatags, ImageDialog)
- `src/layouts/Layout.astro` — base shell (head, nav, footer)
- `src/layouts/BlogPost.astro` — wraps rendered Markdown for article pages
- `src/styles/site.css` — CSS custom properties for palette, responsive breakpoints, and dark mode via `light-dark()`

### Images

Images are hosted on Cloudinary under account `rapPayne`. The base Cloudinary URL is defined in `src/constants.ts`. Use the frontmatter image fields rather than hardcoding URLs in components.
