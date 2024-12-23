import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BXxoNGts.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_BF_iDF4U.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/rap/Desktop/agile-gadgets/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/component-classname-pattern/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/component-classname-pattern","isIndex":false,"type":"page","pattern":"^\\/blog\\/component-classname-pattern\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"component-classname-pattern","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/component-classname-pattern.md","pathname":"/blog/component-classname-pattern","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/first-post/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/first-post","isIndex":false,"type":"page","pattern":"^\\/blog\\/first-post\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"first-post","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/first-post.md","pathname":"/blog/first-post","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/My%20third%20post/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/my third post","isIndex":false,"type":"page","pattern":"^\\/blog\\/My third post\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"My third post","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/My third post.md","pathname":"/blog/My third post","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/second%20post/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/second post","isIndex":false,"type":"page","pattern":"^\\/blog\\/second post\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"second post","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/second post.md","pathname":"/blog/second post","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".link-card[data-astro-cid-dohjnao5]{list-style:none;display:flex;padding:1px;background-color:light-dark(var(--lite2),var(--dark2));background-size:400%;border-radius:7px;background-position:100%;transition:background-position .6s cubic-bezier(.22,1,.36,1);box-shadow:inset 0 0 0 1px #ffffff1a}.link-card[data-astro-cid-dohjnao5]>a[data-astro-cid-dohjnao5]{width:100%;text-decoration:none;line-height:1.4;padding:calc(1.5rem - 1px);border-radius:8px;opacity:.8}h2[data-astro-cid-dohjnao5]{margin:0;font-size:1.25rem;transition:color .6s cubic-bezier(.22,1,.36,1)}p[data-astro-cid-dohjnao5]{margin-top:.5rem;margin-bottom:0}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within){background-position:0}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within){color:light-dark(var(--lite2),var(--dark2))}li[data-astro-cid-iyiqi2so]{list-style-type:none;max-width:300px;border:1px solid light-dark(var(--dark1),var(--lite1));margin:5px;background-color:light-dark(var(--lite2),var(--dark2));img{width:100%}h4{text-align:center;margin:0}}main[data-astro-cid-j7pv25f6]{margin:auto;padding:1rem;font-size:20px;line-height:1.6;h1{font-size:4rem;font-weight:700;line-height:1;margin-bottom:1em;img{height:1em;margin-right:.25em}}h1:has(~h2),h2{text-align:center;margin:0 auto}.latest-blog-posts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}}\na[data-astro-cid-q2wpt7bd]{font-size:.8em;background-color:light-dark(var(--dark3),var(--lite3));color:light-dark(var(--lite1),var(--dark1));padding:1px 10px;margin:.5rem;border-radius:1rem;text-decoration:none}\nnav{display:flex;justify-content:space-around;position:fixed;top:0;left:0;right:0;padding:10px;z-index:100;background-color:light-dark(var(--lite1),var(--dark1));a{color:light-dark(var(--dark2),var(--lite2));font-size:1.25em;text-decoration:none;text-transform:uppercase;font-weight:700;padding:10px;transition:transform .25s .2s}a:hover{transform:scale(1.3)}a:active{color:light-dark(var(--lite1),var(--dark1));background-color:light-dark(var(--dark2),var(--lite2))}img{height:1em}}@font-face{font-family:RapPaynesHandwriting;src:url(/fonts/RapPaynesHandwriting-Regular.otf) format(\"opentype\");font-weight:400;font-style:normal}:root{font-family:RapPaynesHandwriting,sans-serif;color-scheme:light dark;color:light-dark(var(--dark1),var(--lite1));background-color:light-dark(var(--lite1),var(--dark1));--dark2: #be1526ff;--dark1: #320a28ff;--dark3: #28536bff;--lite1: #fbfbfbff;--lite2: #d8e4ffff;--lite3: #eaf0fdff}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{padding-top:50px}.blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem}header[data-astro-cid-bvzihdzo]{margin-bottom:2rem}h1[data-astro-cid-bvzihdzo]{font-size:2.5rem;margin-bottom:.5rem}.metadata[data-astro-cid-bvzihdzo]{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author[data-astro-cid-bvzihdzo]{margin-left:1rem}.content[data-astro-cid-bvzihdzo]{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://rapPayne.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/rap/Desktop/agile-gadgets/src/pages/blog/My third post.md",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/rss.xml.js",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/blog/component-classname-pattern.md",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/blog/first-post.md",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/blog/second post.md",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/blog/component-classname-pattern@_@md":"pages/blog/component-classname-pattern.astro.mjs","\u0000@astro-page:src/pages/blog/first-post@_@md":"pages/blog/first-post.astro.mjs","\u0000@astro-page:src/pages/blog/My third post@_@md":"pages/blog/my third post.astro.mjs","\u0000@astro-page:src/pages/blog/second post@_@md":"pages/blog/second post.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/rap/Desktop/agile-gadgets/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CXiaS27B.mjs","\u0000@astrojs-manifest":"manifest_CmmykgU1.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.ico","/images/AgileMan.jpg","/fonts/RapPaynesHandwriting-Regular.otf","/blog/component-classname-pattern/index.html","/blog/first-post/index.html","/blog/My%20third%20post/index.html","/blog/second%20post/index.html","/blog/index.html","/rss.xml"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"EZw6JxJ1Fnp8rCrPhm3050MinA7wxh0qBfMyuz+2QdI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
