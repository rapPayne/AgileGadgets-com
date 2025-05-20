import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, o as renderSlot, p as renderHead, i as renderComponent } from './astro/server_Bizk4uOg.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                     */

const $$Astro$2 = createAstro("https://agilegadgets.com");
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

const $$Astro$1 = createAstro("https://agilegadgets.com");
const $$SiteFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SiteFooter;
  const socialItems = [
    { label: "Github", href: "https://github.com/rapPayne", icon: "fa-github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/rapPayne", icon: "fa-linkedin" },
    { label: "Reddit", href: "https://reddit.com/u/rapPayne", icon: "fa-reddit" },
    { label: "X", href: "https://x.com/rapPayne", icon: "fa-x-twitter" }
  ];
  let sortedPosts = [];
  try {
    const posts = /* #__PURE__ */ Object.assign({"../pages/blog/React-vs-Angular-vs-Vue-vs-Svelte.md": () => import('./React-vs-Angular-vs-Vue-vs-Svelte_D-qgAB0S.mjs').then(n => n._),"../pages/blog/a11y-isnt-optional.md": () => import('./a11y-isnt-optional_BQzX3EYn.mjs').then(n => n._),"../pages/blog/component-classname-pattern.md": () => import('./component-classname-pattern_BfMB7jCD.mjs').then(n => n._),"../pages/blog/flutter-forms-validation.md": () => import('./flutter-forms-validation_DemKPMs6.mjs').then(n => n._),"../pages/blog/hugging-face-api-keys-made-easy.md": () => import('./hugging-face-api-keys-made-easy_TZxSfEI7.mjs').then(n => n._),"../pages/blog/hugging-face-spaces.md": () => import('./hugging-face-spaces_Ds4PNTP5.mjs').then(n => n._),"../pages/blog/kaggle-dataset-google-colab.md": () => import('./kaggle-dataset-google-colab_BmYp-O-4.mjs').then(n => n._),"../pages/blog/mermaid-diagrams.md": () => import('./mermaid-diagrams_BauBKyx_.mjs').then(n => n._),"../pages/blog/react-hugging-face-inference-api.md": () => import('./react-hugging-face-inference-api_CZ_z9KYk.mjs').then(n => n._)});
    const postPromises = Object.entries(posts).map(async ([_, promiseResolver]) => {
      const post = await promiseResolver();
      return post;
    });
    const resolvedPosts = await Promise.all(postPromises);
    sortedPosts = resolvedPosts.slice().sort((a, b) => new Date(b.frontmatter.pubDate).getTime() - new Date(a.frontmatter.pubDate).getTime()).slice(0, 5);
  } catch (ex) {
    console.error("Error getting posts:", ex);
  }
  return renderTemplate`${maybeRenderHead()}<footer id="siteFooter" data-astro-cid-gcn2mc3v> <section id="latestBlogPosts" data-astro-cid-gcn2mc3v> <h1 data-astro-cid-gcn2mc3v>Recent posts</h1> <ol data-astro-cid-gcn2mc3v> ${sortedPosts.map((post) => renderTemplate`<li data-astro-cid-gcn2mc3v> <a${addAttribute(post.frontmatter.url, "href")} data-astro-cid-gcn2mc3v>${post.frontmatter.title}</a> </li>`)} </ol> </section> <section id="socialLinks" data-astro-cid-gcn2mc3v> ${socialItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(item.label, "aria-label")} target="_blank" rel="noreferrer noopener" data-astro-cid-gcn2mc3v> <i${addAttribute("fa " + item.icon, "class")} data-astro-cid-gcn2mc3v></i> </a>`)} </section> <section id="copyright" data-astro-cid-gcn2mc3v> <p data-astro-cid-gcn2mc3v>Copyright &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Agile Gadgets, LLC. FAFO</p> </section> </footer> `;
}, "/Users/rap/Desktop/agile-gadgets/src/components/SiteFooter.astro", void 0);

const $$Astro = createAstro("https://agilegadgets.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="shortcut icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderSlot($$result, $$slots["metatags"])}<title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "NavigationBar", $$NavigationBar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/rap/Desktop/agile-gadgets/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
