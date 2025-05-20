import { e as createAstro, f as createComponent, i as renderComponent, n as Fragment, r as renderTemplate, h as addAttribute, m as maybeRenderHead, o as renderSlot } from './astro/server_Bizk4uOg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_h8iKztL5.mjs';
import { format } from 'date-fns';
import { c as cloudinaryImageBaseUrl } from './constants_LYb08bBk.mjs';
/* empty css                                                     */

const $$Astro$1 = createAstro("https://agilegadgets.com");
const $$Metatags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Metatags;
  const { image, title, url, description, site_name } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta property="og:title"${addAttribute(title, "content")}><meta property="og:image"${addAttribute(image, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:site_name"${addAttribute(site_name, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(image, "content")}>` })}`;
}, "/Users/rap/Desktop/agile-gadgets/src/components/Metatags.astro", void 0);

const $$Astro = createAstro("https://agilegadgets.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { frontmatter } = Astro2.props;
  const mainImgSrc = frontmatter.mainImageUrl ?? `${cloudinaryImageBaseUrl}/c_fill,w_1000,ar_16:9/q_auto/${frontmatter.cloudinaryImageFileName}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": frontmatter.title, "data-astro-cid-bvzihdzo": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<article class="blog-post" data-astro-cid-bvzihdzo> <header data-astro-cid-bvzihdzo> <img${addAttribute(mainImgSrc, "src")} alt="" data-astro-cid-bvzihdzo> <h1 data-astro-cid-bvzihdzo>${frontmatter.title}</h1> <div class="metadata" data-astro-cid-bvzihdzo> <time${addAttribute(frontmatter.pubDate, "datetime")} data-astro-cid-bvzihdzo> ${format(new Date(frontmatter.pubDate), "MMMM d, yyyy")} </time> ${frontmatter.author && renderTemplate`<span class="author" data-astro-cid-bvzihdzo>by ${frontmatter.author}</span>`} </div> </header> <div class="content" data-astro-cid-bvzihdzo> ${renderSlot($$result2, $$slots["default"])} </div> </article> `, "metatags": ($$result2) => renderTemplate`${renderComponent($$result2, "Metatags", $$Metatags, { "slot": "metatags", "image": mainImgSrc, "description": frontmatter.description, "site_name": "Agile Gadgets", "title": frontmatter.title, "url": "https://agilegadgets.com" + frontmatter.url, "data-astro-cid-bvzihdzo": true })}` })} `;
}, "/Users/rap/Desktop/agile-gadgets/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
