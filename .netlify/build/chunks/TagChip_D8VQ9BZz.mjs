import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_BtSgW2PN.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://agilegadgets.com");
const $$TagChip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TagChip;
  const { tag } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute("/blog?tags=" + tag, "href")} data-astro-cid-q2wpt7bd>${tag}</a> `;
}, "/Users/rap/Desktop/agile-gadgets/src/components/TagChip.astro", void 0);

export { $$TagChip as $ };
