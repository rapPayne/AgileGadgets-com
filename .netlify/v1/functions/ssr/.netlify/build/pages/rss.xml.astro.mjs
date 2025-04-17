import { _ as __vite_glob_0_0 } from '../chunks/My third post_B78DDmSc.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/component-classname-pattern_Bw9NpMW5.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/first-post_-wtj6IYo.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/second post_hK3zqtRE.mjs';
import rss from '@astrojs/rss';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  // Glob all blog posts
  const blogPosts = /* #__PURE__ */ Object.assign({"./blog/My third post.md": __vite_glob_0_0,"./blog/component-classname-pattern.md": __vite_glob_0_1,"./blog/first-post.md": __vite_glob_0_2,"./blog/second post.md": __vite_glob_0_3});

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
