import { _ as __vite_glob_0_0 } from '../chunks/React-vs-Angular-vs-Vue-vs-Svelte_CpAJeTAo.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/a11y-isnt-optional__R1B1hpM.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/component-classname-pattern_-RTdelFF.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/flutter-forms-validation_C-a7H6a7.mjs';
import { _ as __vite_glob_0_4 } from '../chunks/hugging-face-api-keys-made-easy_DIDjFXRq.mjs';
import { _ as __vite_glob_0_5 } from '../chunks/hugging-face-spaces_SAx6RQgU.mjs';
import { _ as __vite_glob_0_6 } from '../chunks/mermaid-diagrams_D_V-okIX.mjs';
import { _ as __vite_glob_0_7 } from '../chunks/react-hugging-face-inference-api_CLzR5_pk.mjs';
import rss from '@astrojs/rss';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  // Glob all blog posts
  const blogPosts = /* #__PURE__ */ Object.assign({"./blog/React-vs-Angular-vs-Vue-vs-Svelte.md": __vite_glob_0_0,"./blog/a11y-isnt-optional.md": __vite_glob_0_1,"./blog/component-classname-pattern.md": __vite_glob_0_2,"./blog/flutter-forms-validation.md": __vite_glob_0_3,"./blog/hugging-face-api-keys-made-easy.md": __vite_glob_0_4,"./blog/hugging-face-spaces.md": __vite_glob_0_5,"./blog/mermaid-diagrams.md": __vite_glob_0_6,"./blog/react-hugging-face-inference-api.md": __vite_glob_0_7});

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
