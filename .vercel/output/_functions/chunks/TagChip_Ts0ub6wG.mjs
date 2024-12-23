import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_BF_iDF4U.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://rapPayne.github.io");
const $$TagChip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TagChip;
  const { tag } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute("/blog?tags=" + tag, "href")} data-astro-cid-q2wpt7bd>${tag}</a> `;
}, "/Users/rap/Desktop/agile-gadgets/src/components/TagChip.astro", void 0);

export { $$TagChip as $ };
