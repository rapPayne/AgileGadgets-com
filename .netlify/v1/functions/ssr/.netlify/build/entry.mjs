import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CwW6DU_l.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog/a11y-isnt-optional.astro.mjs');
const _page3 = () => import('./pages/blog/component-classname-pattern.astro.mjs');
const _page4 = () => import('./pages/blog/flutter-forms-validation.astro.mjs');
const _page5 = () => import('./pages/blog/mermaid-diagrams.astro.mjs');
const _page6 = () => import('./pages/blog/react-vs-angular-vs-vue-vs-svelte.astro.mjs');
const _page7 = () => import('./pages/blog.astro.mjs');
const _page8 = () => import('./pages/courses.astro.mjs');
const _page9 = () => import('./pages/rss.xml.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/a11y-isnt-optional.md", _page2],
    ["src/pages/blog/component-classname-pattern.md", _page3],
    ["src/pages/blog/flutter-forms-validation.md", _page4],
    ["src/pages/blog/mermaid-diagrams.md", _page5],
    ["src/pages/blog/React-vs-Angular-vs-Vue-vs-Svelte.md", _page6],
    ["src/pages/blog/index.astro", _page7],
    ["src/pages/courses.astro", _page8],
    ["src/pages/rss.xml.js", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1577e449-4694-44d9-8694-fe703cfc7660"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
