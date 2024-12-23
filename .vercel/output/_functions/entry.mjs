import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_muZ62GRi.mjs';
import { manifest } from './manifest_CRK9WCqu.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog/component-classname-pattern.astro.mjs');
const _page2 = () => import('./pages/blog/first-post.astro.mjs');
const _page3 = () => import('./pages/blog/my third post.astro.mjs');
const _page4 = () => import('./pages/blog/second post.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/rss.xml.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/component-classname-pattern.md", _page1],
    ["src/pages/blog/first-post.md", _page2],
    ["src/pages/blog/My third post.md", _page3],
    ["src/pages/blog/second post.md", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/rss.xml.js", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "475bcce4-e742-4094-9a55-b5fff6affbd1",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
