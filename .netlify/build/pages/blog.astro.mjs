import { e as createAstro, f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_wjSD972r.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CZSfSGdX.mjs';
import { $ as $$TagChip } from '../chunks/TagChip_BlV9xcqZ.mjs';
import { format } from 'date-fns';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rapPayne.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./My third post.md": () => import('../chunks/My third post_B78DDmSc.mjs').then(n => n._),"./component-classname-pattern.md": () => import('../chunks/component-classname-pattern_Bw9NpMW5.mjs').then(n => n._),"./first-post.md": () => import('../chunks/first-post_-wtj6IYo.mjs').then(n => n._),"./second post.md": () => import('../chunks/second post_hK3zqtRE.mjs').then(n => n._)}), () => "./*.md");
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AG Blog", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-5tznm7mj> <h1 data-astro-cid-5tznm7mj>Blog</h1> <div class="postsList" data-astro-cid-5tznm7mj> ${sortedPosts.map((post) => renderTemplate`<div class="article" role="button"${addAttribute(`location.href='${post.url}'`, "onclick")} tabindex="0" data-astro-cid-5tznm7mj> <img${addAttribute(post.frontmatter.listImageUrl, "src")} alt="" data-astro-cid-5tznm7mj> <time${addAttribute(post.frontmatter.date, "datetime")} data-astro-cid-5tznm7mj> ${format(new Date(post.frontmatter.date), "MMMM d, yyyy")} </time> <span class="author" data-astro-cid-5tznm7mj> ${post.frontmatter.author && `by ${post.frontmatter.author}`} </span> <h2 class="title" data-astro-cid-5tznm7mj>${post.frontmatter.title}</h2> ${post.frontmatter.description && renderTemplate`<p class="description" data-astro-cid-5tznm7mj>${post.frontmatter.description}</p>`} <span class="tags" data-astro-cid-5tznm7mj> ${post.frontmatter.tags?.map((t) => renderTemplate`${renderComponent($$result2, "TagChip", $$TagChip, { "tag": t, "data-astro-cid-5tznm7mj": true })}`)} </span> </div>`)} </div> </main> ` })} `;
}, "/Users/rap/Desktop/agile-gadgets/src/pages/blog/index.astro", void 0);

const $$file = "/Users/rap/Desktop/agile-gadgets/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
