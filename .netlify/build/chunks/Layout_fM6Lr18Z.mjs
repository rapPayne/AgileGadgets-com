import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, j as renderHead, i as renderComponent, k as renderSlot } from './astro/server_wjSD972r.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */

const $$Astro$1 = createAstro("https://rapPayne.github.io");
const $$NavigationBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavigationBar;
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Courses", href: "/courses" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav> <a href="/" class=""><img src="/images/AgileMan.jpg" alt="Agile Gadgets logo"></a> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}>${item.label}</a>`)} </nav> `;
}, "/Users/rap/Desktop/agile-gadgets/src/components/NavigationBar.astro", void 0);

const $$Astro = createAstro("https://rapPayne.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="shortcut icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "NavigationBar", $$NavigationBar, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/rap/Desktop/agile-gadgets/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
