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

## Charts through Mermaid
TDB

## TypeScript
Strict TS is in effect. Look at tsconfig.json for settings.
