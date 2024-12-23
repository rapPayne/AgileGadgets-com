import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot } from './astro/server_BF_iDF4U.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_CGLPefIu.mjs';
import { format } from 'date-fns';
/* empty css                                 */

const $$Astro = createAstro("https://rapPayne.github.io");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": frontmatter.title, "data-astro-cid-bvzihdzo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="blog-post" data-astro-cid-bvzihdzo> <header data-astro-cid-bvzihdzo> <img${addAttribute(frontmatter.mainImageUrl, "src")} alt="" data-astro-cid-bvzihdzo> <h1 data-astro-cid-bvzihdzo>${frontmatter.title}</h1> <div class="metadata" data-astro-cid-bvzihdzo> <time${addAttribute(frontmatter.date, "datetime")} data-astro-cid-bvzihdzo> ${format(new Date(frontmatter.date), "MMMM d, yyyy")} </time> ${frontmatter.author && renderTemplate`<span class="author" data-astro-cid-bvzihdzo>by ${frontmatter.author}</span>`} </div> </header> <div class="content" data-astro-cid-bvzihdzo> ${renderSlot($$result2, $$slots["default"])} </div> </article> ` })} `;
}, "/Users/rap/Desktop/agile-gadgets/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
