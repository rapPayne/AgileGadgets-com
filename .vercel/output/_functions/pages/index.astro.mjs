import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_BF_iDF4U.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CGLPefIu.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$TagChip } from '../chunks/TagChip_Ts0ub6wG.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://rapPayne.github.io");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5> <a${addAttribute(href, "href")} data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5> ${title} <span data-astro-cid-dohjnao5>&rarr;</span> </h2> <p data-astro-cid-dohjnao5> ${body} </p> </a> </li> `;
}, "/Users/rap/Desktop/agile-gadgets/src/components/Card.astro", void 0);

const $$Astro$1 = createAstro("https://rapPayne.github.io");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post } = Astro2.props;
  const { title, description, tags, homePageImageUrl, url } = post.frontmatter;
  return renderTemplate`${maybeRenderHead()}<li data-astro-cid-iyiqi2so> <a${addAttribute(url, "href")} data-astro-cid-iyiqi2so> <img${addAttribute(homePageImageUrl, "src")} alt="" data-astro-cid-iyiqi2so> <div data-astro-cid-iyiqi2so> <h4 data-astro-cid-iyiqi2so>${title}</h4> <p data-astro-cid-iyiqi2so>${description}</p> ${tags?.map((tag) => renderTemplate`${renderComponent($$result, "TagChip", $$TagChip, { "tag": tag, "data-astro-cid-iyiqi2so": true })}`)} </div> </a> </li> `;
}, "/Users/rap/Desktop/agile-gadgets/src/components/PostCard.astro", void 0);

const $$Astro = createAstro("https://rapPayne.github.io");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./blog/My third post.md": () => import('../chunks/My third post_BEFFu5O3.mjs').then(n => n._),"./blog/component-classname-pattern.md": () => import('../chunks/component-classname-pattern_CR6c2hqq.mjs').then(n => n._),"./blog/first-post.md": () => import('../chunks/first-post_AQuNm-vJ.mjs').then(n => n._),"./blog/second post.md": () => import('../chunks/second post_seHaOyGH.mjs').then(n => n._)}), () => "./blog/*.md");
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  ).slice(0, 3);
  console.log({ sortedPosts });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Rap", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6><img src="/images/AgileMan.jpg" alt="Logo" data-astro-cid-j7pv25f6>Agile Gadgets</h1> <h2 data-astro-cid-j7pv25f6>The blog and info site of Rap Payne</h2> <p data-astro-cid-j7pv25f6>Resources for developers, especially web and cross-platform mobile</p> <section data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Latest blog posts</h3> <ul role="list" class="latest-blog-posts" data-astro-cid-j7pv25f6> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post, "data-astro-cid-j7pv25f6": true })}`)} </ul> </section> <ul role="list" class="link-card-grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Card", $$Card, { "href": "./blog", "title": "Blog", "body": "Check out our latest blog posts and updates.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "https://docs.astro.build/", "title": "Documentation", "body": "Learn how Astro works and explore the official API docs.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/integrations/", "title": "Integrations", "body": "Supercharge your project with new frameworks and libraries.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/themes/", "title": "Themes", "body": "Explore a galaxy of community-built starter themes.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/chat/", "title": "Community", "body": "Come say hi to our amazing Discord community. \u2764\uFE0F", "data-astro-cid-j7pv25f6": true })} </ul> </main> ` })} `;
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
