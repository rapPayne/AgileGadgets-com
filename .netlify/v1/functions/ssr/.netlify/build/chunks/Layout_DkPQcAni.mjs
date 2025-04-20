import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, j as renderHead, i as renderComponent, k as renderSlot } from './astro/server_wjSD972r.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                     */

const $$Astro$2 = createAstro("https://rapPayne.github.io");
const $$NavigationBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavigationBar;
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Courses", href: "/courses" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav> <a href="/" class=""><img src="/images/AgileMan.jpg" alt="Agile Gadgets logo"></a> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}>${item.label}</a>`)} </nav> `;
}, "/Users/rap/Desktop/agile-gadgets/src/components/NavigationBar.astro", void 0);

const $$Astro$1 = createAstro("https://rapPayne.github.io");
const $$SiteFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SiteFooter;
  const socialItems = [
    { label: "Github", href: "https://github.com/rapPayne", icon: "fa-github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/rapPayne", icon: "fa-linkedin" },
    { label: "Reddit", href: "https://reddit.com/u/rapPayne", icon: "fa-reddit" },
    { label: "X", href: "https://x.com/rapPayne", icon: "fa-x-twitter" }
  ];
  const posts = /* #__PURE__ */ Object.assign({"../pages/blog/React-vs-Angular-vs-Vue-vs-Svelte.md": () => import('./React-vs-Angular-vs-Vue-vs-Svelte_BVBaX7PM.mjs').then(n => n._),"../pages/blog/component-classname-pattern.md": () => import('./component-classname-pattern_D--q635P.mjs').then(n => n._),"../pages/blog/flutter-forms-validation.md": () => import('./flutter-forms-validation_DN_8i5el.mjs').then(n => n._)});
  const postPromises = Object.entries(posts).map(async ([_, promiseResolver]) => {
    const post = await promiseResolver();
    return post;
  });
  const resolvedPosts = await Promise.all(postPromises);
  const sortedPosts = resolvedPosts.toSorted((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()).slice(0, 5);
  return renderTemplate`${maybeRenderHead()}<footer id="siteFooter" data-astro-cid-gcn2mc3v> <section id="latestBlogPosts" data-astro-cid-gcn2mc3v> <h1 data-astro-cid-gcn2mc3v>Recent posts</h1> <ol data-astro-cid-gcn2mc3v> ${sortedPosts.map((post) => renderTemplate`<li data-astro-cid-gcn2mc3v> <a${addAttribute(post.frontmatter.url, "href")} data-astro-cid-gcn2mc3v>${post.frontmatter.title}</a> </li>`)} </ol> </section> <section id="socialLinks" data-astro-cid-gcn2mc3v> ${socialItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} data-astro-cid-gcn2mc3v> <i${addAttribute("fa " + item.icon, "class")} data-astro-cid-gcn2mc3v></i> </a>`)} </section> <section id="copyright" data-astro-cid-gcn2mc3v> <p data-astro-cid-gcn2mc3v>Copyright &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Agile Gadgets, LLC. FAFO</p> </section> </footer> `;
}, "/Users/rap/Desktop/agile-gadgets/src/components/SiteFooter.astro", void 0);

const $$Astro = createAstro("https://rapPayne.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="shortcut icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "NavigationBar", $$NavigationBar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/rap/Desktop/agile-gadgets/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
