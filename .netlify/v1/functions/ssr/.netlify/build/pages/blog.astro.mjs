import { e as createAstro, f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Bizk4uOg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B3258PpT.mjs';
import { $ as $$TagChip } from '../chunks/TagChip_TkaVwpUa.mjs';
import { format } from 'date-fns';
import { c as cloudinaryImageBaseUrl } from '../chunks/constants_LYb08bBk.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://agilegadgets.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./React-vs-Angular-vs-Vue-vs-Svelte.md": () => import('../chunks/React-vs-Angular-vs-Vue-vs-Svelte_C8DlCGNI.mjs').then(n => n._),"./a11y-isnt-optional.md": () => import('../chunks/a11y-isnt-optional_CyPvcwG1.mjs').then(n => n._),"./component-classname-pattern.md": () => import('../chunks/component-classname-pattern_DKvDakRx.mjs').then(n => n._),"./flutter-forms-validation.md": () => import('../chunks/flutter-forms-validation_CAolQXyQ.mjs').then(n => n._),"./hugging-face-api-keys-made-easy.md": () => import('../chunks/hugging-face-api-keys-made-easy_BabHXBLk.mjs').then(n => n._),"./hugging-face-spaces.md": () => import('../chunks/hugging-face-spaces_CBdE4itB.mjs').then(n => n._),"./mermaid-diagrams.md": () => import('../chunks/mermaid-diagrams_CXNrErmq.mjs').then(n => n._),"./react-hugging-face-inference-api.md": () => import('../chunks/react-hugging-face-inference-api_Dc6EQrBD.mjs').then(n => n._)}), () => "./*.md");
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.frontmatter.pubDate).getTime() - new Date(a.frontmatter.pubDate).getTime()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AG Blog", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-5tznm7mj> <h1 data-astro-cid-5tznm7mj>Blog</h1> <div class="postsList" data-astro-cid-5tznm7mj> ${sortedPosts.map((post) => renderTemplate`<div class="article" role="button"${addAttribute(`location.href='${post.url}'`, "onclick")} tabindex="0" data-astro-cid-5tznm7mj> <img${addAttribute(
    post.frontmatter.listImageUrl ?? `${cloudinaryImageBaseUrl}/c_fill,ar_1:1,w_200/q_auto/${post.frontmatter.cloudinaryImageFileName}`,
    "src"
  )} alt="" data-astro-cid-5tznm7mj> <time${addAttribute(post.frontmatter.pubDate, "datetime")} data-astro-cid-5tznm7mj> ${format(new Date(post.frontmatter.pubDate), "MMMM d, yyyy")} </time> <span class="author" data-astro-cid-5tznm7mj>${post.frontmatter.author && `by ${post.frontmatter.author}`}</span> <h2 class="title" data-astro-cid-5tznm7mj>${post.frontmatter.title}</h2> ${post.frontmatter.description && renderTemplate`<p class="description" data-astro-cid-5tznm7mj>${post.frontmatter.description}</p>`} <span class="tags" data-astro-cid-5tznm7mj> ${post.frontmatter.tags?.map((t) => renderTemplate`${renderComponent($$result2, "TagChip", $$TagChip, { "tag": t, "data-astro-cid-5tznm7mj": true })}`)} </span> </div>`)} </div> </main> ` })} `;
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
