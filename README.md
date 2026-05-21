# Blog site config and maintenance

[![Netlify Status](https://api.netlify.com/api/v1/badges/f62de172-e44c-4604-8d02-51c768141813/deploy-status)](https://app.netlify.com/sites/agilegadgets/deploys)

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/  Reusable components
│   │   └── Card.astro
│   ├── layouts/   Layouts for full pages. They're all ".astro" files.
│   └── pages/     Pages of your site, each page is a route in .md format
│       └── blog/  Blog posts, each page is a route
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Astro information and help
- [Documentation](https://docs.astro.build) 
- [Cheatsheet](https://www.telerik.com/blogs/vanilla-astro-no-framework-needed)
- [Discord](https://astro.build/chat)
- [Integrations](https://astro.build/integrations)
- [Themes](https://astro.build/themes) 

## To upgrade
If you're looking to upgrade your Astro project to the latest version, you can run the following command in your terminal
```sh
npm install astro@latest
```

## To deploy
- Deployment happens on `git push`. 
- Netlify auto builds and publishes the `dist` folder. 
- Github workflow isn't needed (I think).

## Hosting
- Netlify login is through GitHub.
- Site is in "Rap Payne's team" as "agilegadgets.com"
Done through Netlify. See the astro.config.mjs file for the deployment settings.

## Pictures through Cloudinary
- Cloudinary login is thru github.

To use images in your project, upload them in your Media Library and use the URLs in your Markdown or Astro files. For example:
```markdown
![My Image](https://res.cloudinary.com/dn7s3bbox/image/upload/v1731718067/0_twitF9NUIVM80RPu_ovdea1.webp)
```
Cloudinary can auto-crop and auto process images. You specify the transformations in the URL. See your Keep note "How to blog".

## Diagrams through Mermaid

Mermaid diagrams render **client-side** in the browser. No build-time dependencies (no Playwright, no headless browser).

### How it works

1. Write a fenced code block with the `mermaid` language tag in any blog post:
   ````markdown
   ```mermaid
   flowchart TD
       A[Start] --> B[End]
   ```
   ````
2. Astro/Shiki renders it as `<pre data-language="mermaid">` — a styled code block — on the server.
3. On page load, a script in `src/layouts/BlogPost.astro` finds every `pre[data-language="mermaid"]`, extracts the diagram source, swaps the element for a `<div class="mermaid">`, and calls `mermaid.run()` to render the SVG.

### Why client-side?

The alternative (server-side via `rehype-mermaid`) requires Playwright and a headless Chromium browser. Chromium is ~170 MB — Netlify's serverless function limit is 50 MB. The page silently fails to render. Client-side rendering avoids all of that with no trade-offs for a blog.

## TypeScript
Strict TS is in effect. Look at tsconfig.json for settings.
