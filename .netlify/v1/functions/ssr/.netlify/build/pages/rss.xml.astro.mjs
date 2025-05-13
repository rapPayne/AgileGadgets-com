import rss, { pagesGlobToRssItems } from '@astrojs/rss';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const unsortedItems = await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./blog/React-vs-Angular-vs-Vue-vs-Svelte.md": () => import('../chunks/React-vs-Angular-vs-Vue-vs-Svelte_BS8Dk4YH.mjs').then(n => n._),"./blog/a11y-isnt-optional.md": () => import('../chunks/a11y-isnt-optional_DxjYyfJN.mjs').then(n => n._),"./blog/component-classname-pattern.md": () => import('../chunks/component-classname-pattern_BDdK_oIj.mjs').then(n => n._),"./blog/flutter-forms-validation.md": () => import('../chunks/flutter-forms-validation_RFIxcmXB.mjs').then(n => n._),"./blog/hugging-face-api-keys-made-easy.md": () => import('../chunks/hugging-face-api-keys-made-easy_BOYX-_Z8.mjs').then(n => n._),"./blog/hugging-face-spaces.md": () => import('../chunks/hugging-face-spaces_BUu1zNjl.mjs').then(n => n._),"./blog/mermaid-diagrams.md": () => import('../chunks/mermaid-diagrams_BaUvvNll.mjs').then(n => n._),"./blog/react-hugging-face-inference-api.md": () => import('../chunks/react-hugging-face-inference-api_CsvSsR54.mjs').then(n => n._)}));
  const items = unsortedItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  return rss({
    title: "Agile Gadgets, Rap Payne's Blog",
    description: "Rap Payne's blog about web tech and AI",
    site: context.site,
    items,
    customData: `<language>en-us</language>`,
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
