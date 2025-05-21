import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_Bizk4uOg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DDTTJOMY.mjs';
import { $ as $$TagChip } from '../chunks/TagChip_TkaVwpUa.mjs';
import { c as cloudinaryImageBaseUrl } from '../chunks/constants_LYb08bBk.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://agilegadgets.com");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post } = Astro2.props;
  const { title, description, tags, cloudinaryImageFileName, homePageImageUrl, url } = post.frontmatter;
  return renderTemplate`${maybeRenderHead()}<li data-astro-cid-iyiqi2so> <a${addAttribute(url, "href")} data-astro-cid-iyiqi2so> <img${addAttribute(homePageImageUrl ?? `${cloudinaryImageBaseUrl}/c_fill,w_300,ar_16:9,q_auto/${cloudinaryImageFileName}`, "src")} alt="" data-astro-cid-iyiqi2so> <div data-astro-cid-iyiqi2so> <h4 data-astro-cid-iyiqi2so>${title}</h4> <p data-astro-cid-iyiqi2so>${description}</p> ${tags?.map((tag) => renderTemplate`${renderComponent($$result, "TagChip", $$TagChip, { "tag": tag, "data-astro-cid-iyiqi2so": true })}`)} </div> </a> </li> `;
}, "/Users/rap/Desktop/agile-gadgets/src/components/PostCard.astro", void 0);

const $$Astro = createAstro("https://agilegadgets.com");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = /* #__PURE__ */ Object.assign({"./blog/React-vs-Angular-vs-Vue-vs-Svelte.md": () => import('../chunks/React-vs-Angular-vs-Vue-vs-Svelte_DyLEZL_C.mjs').then(n => n._),"./blog/a11y-isnt-optional.md": () => import('../chunks/a11y-isnt-optional_Dy3B_B9U.mjs').then(n => n._),"./blog/component-classname-pattern.md": () => import('../chunks/component-classname-pattern_Dr7xdnMA.mjs').then(n => n._),"./blog/flutter-forms-validation.md": () => import('../chunks/flutter-forms-validation_CnZURoXe.mjs').then(n => n._),"./blog/hugging-face-api-keys-made-easy.md": () => import('../chunks/hugging-face-api-keys-made-easy_BfGgltQ6.mjs').then(n => n._),"./blog/hugging-face-spaces.md": () => import('../chunks/hugging-face-spaces_CCNdsuXj.mjs').then(n => n._),"./blog/kaggle-dataset-google-colab.md": () => import('../chunks/kaggle-dataset-google-colab_dC-3pDte.mjs').then(n => n._),"./blog/mermaid-diagrams.md": () => import('../chunks/mermaid-diagrams_mIiE14iL.mjs').then(n => n._),"./blog/react-hugging-face-inference-api.md": () => import('../chunks/react-hugging-face-inference-api_5AcFV2yM.mjs').then(n => n._)});
  const postPromises = Object.entries(posts).map(async ([, promiseResolver]) => {
    const post = await promiseResolver();
    return post;
  });
  const resolvedPosts = await Promise.all(postPromises);
  const sortedPosts = resolvedPosts.sort((a, b) => new Date(b.frontmatter.pubDate).getTime() - new Date(a.frontmatter.pubDate).getTime()).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Rap", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <h1 class="rapPaynesHandwriting" data-astro-cid-j7pv25f6> <img src="/images/AgileMan.jpg" alt="Logo" data-astro-cid-j7pv25f6>Agile Gadgets
</h1> <h2 data-astro-cid-j7pv25f6>The blog and info site of Rap Payne</h2> <p data-astro-cid-j7pv25f6>Resources for developers, especially AI, web and cross-platform mobile</p> <section data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Latest blog posts</h3> <ul role="list" class="latest-blog-posts" data-astro-cid-j7pv25f6> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post, "data-astro-cid-j7pv25f6": true })}`)} </ul> </section> <ul role="list" class="link-card-grid" data-astro-cid-j7pv25f6></ul> </main> ` })} `;
}, "/Users/rap/Desktop/agile-gadgets/src/pages/index.astro", void 0);

const $$file = "/Users/rap/Desktop/agile-gadgets/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
