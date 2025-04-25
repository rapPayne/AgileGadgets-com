import { _ as __vite_glob_0_0 } from '../chunks/React-vs-Angular-vs-Vue-vs-Svelte_BzFgUpqg.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/a11y-isnt-optional_DkMeTqab.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/component-classname-pattern_D98-vGTG.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/flutter-forms-validation_BenQ0CGf.mjs';
import { _ as __vite_glob_0_4 } from '../chunks/mermaid-diagrams_C8nKlQ4L.mjs';
import rss from '@astrojs/rss';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  // Glob all blog posts
  const blogPosts = /* #__PURE__ */ Object.assign({"./blog/React-vs-Angular-vs-Vue-vs-Svelte.md": __vite_glob_0_0,"./blog/a11y-isnt-optional.md": __vite_glob_0_1,"./blog/component-classname-pattern.md": __vite_glob_0_2,"./blog/flutter-forms-validation.md": __vite_glob_0_3,"./blog/mermaid-diagrams.md": __vite_glob_0_4});

  // Map and transform the blog post data
  const items = Object.values(blogPosts).map((post) => ({
    title: post.frontmatter.title,
    pubDate: post.frontmatter.pubDate,
    description: post.frontmatter.description,
    link: `/blog/${post.frontmatter.slug || post.file.split('/').pop().replace('.md', '')}/`,
  }));

  return rss({
    title: 'Agile Gadgets by Rap Payne',
    description: `A blog site for Rap's writing, consulting, mentoring and training`,
    site: context.site,
    items,
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
