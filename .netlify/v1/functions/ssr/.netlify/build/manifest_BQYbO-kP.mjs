import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_BAVukojE.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/rap/Desktop/agile-gadgets/","cacheDir":"file:///Users/rap/Desktop/agile-gadgets/node_modules/.astro/","outDir":"file:///Users/rap/Desktop/agile-gadgets/dist/","srcDir":"file:///Users/rap/Desktop/agile-gadgets/src/","publicDir":"file:///Users/rap/Desktop/agile-gadgets/public/","buildClientDir":"file:///Users/rap/Desktop/agile-gadgets/dist/","buildServerDir":"file:///Users/rap/Desktop/agile-gadgets/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css"},{"type":"inline","content":"dialog[data-astro-cid-q3gpzatk]{height:75vh;border:none;border-radius:10px;box-shadow:10px 10px 10px var(--dark1);background-color:var(--lite3);div{height:100%;width:100%;button{position:absolute;top:10px;right:10px;height:1.75em;width:1.75em;font-size:1.25em;border-radius:50%;z-index:100;border:1px solid var(--dark1);background-color:var(--lite1);font-weight:700}& img{height:100%}}}main[data-astro-cid-kh7btl4r]{display:grid;place-items:center;section{margin-bottom:30px}#specialties{div{display:flex;flex-wrap:wrap;justify-content:space-around;section{flex:0 1 200px;background-color:var(--lite2);border:2px solid var(--dark1);border-radius:10px;padding:10px;h3{text-align:center}li{list-style-type:none}}}}#social_links{width:clamp(300px,80vw,1000px);.highlight{color:var(--dark2)}& ul{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;padding:0;gap:3em;& li{list-style-type:none;flex:0 1 100px;background-color:var(--lite2);border:2px solid var(--dark1);border-radius:10px;padding:10px;text-align:center;& a{color:var(--dark1);text-decoration:none;& i{font-size:3em;display:block}}}}}}\n.blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem;header{margin-bottom:2rem;img{width:100%}h1{font-size:2.5rem;margin-bottom:.5rem}.metadata{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author{margin-left:.25rem}}.content{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}img{max-width:100%;height:auto}}}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css"},{"type":"inline","content":".blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem;header{margin-bottom:2rem;img{width:100%}h1{font-size:2.5rem;margin-bottom:.5rem}.metadata{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author{margin-left:.25rem}}.content{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}img{max-width:100%;height:auto}}}\n"}],"routeData":{"route":"/blog/a11y-isnt-optional","isIndex":false,"type":"page","pattern":"^\\/blog\\/a11y-isnt-optional\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"a11y-isnt-optional","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/a11y-isnt-optional.md","pathname":"/blog/a11y-isnt-optional","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css"},{"type":"inline","content":".blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem;header{margin-bottom:2rem;img{width:100%}h1{font-size:2.5rem;margin-bottom:.5rem}.metadata{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author{margin-left:.25rem}}.content{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}img{max-width:100%;height:auto}}}\n"}],"routeData":{"route":"/blog/component-classname-pattern","isIndex":false,"type":"page","pattern":"^\\/blog\\/component-classname-pattern\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"component-classname-pattern","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/component-classname-pattern.md","pathname":"/blog/component-classname-pattern","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css"},{"type":"inline","content":".blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem;header{margin-bottom:2rem;img{width:100%}h1{font-size:2.5rem;margin-bottom:.5rem}.metadata{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author{margin-left:.25rem}}.content{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}img{max-width:100%;height:auto}}}\n"}],"routeData":{"route":"/blog/flutter-forms-validation","isIndex":false,"type":"page","pattern":"^\\/blog\\/flutter-forms-validation\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"flutter-forms-validation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/flutter-forms-validation.md","pathname":"/blog/flutter-forms-validation","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css"},{"type":"inline","content":".blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem;header{margin-bottom:2rem;img{width:100%}h1{font-size:2.5rem;margin-bottom:.5rem}.metadata{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author{margin-left:.25rem}}.content{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}img{max-width:100%;height:auto}}}\n"}],"routeData":{"route":"/blog/hugging-face-api-keys-made-easy","isIndex":false,"type":"page","pattern":"^\\/blog\\/hugging-face-api-keys-made-easy\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"hugging-face-api-keys-made-easy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/hugging-face-api-keys-made-easy.md","pathname":"/blog/hugging-face-api-keys-made-easy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css"},{"type":"inline","content":".blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem;header{margin-bottom:2rem;img{width:100%}h1{font-size:2.5rem;margin-bottom:.5rem}.metadata{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author{margin-left:.25rem}}.content{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}img{max-width:100%;height:auto}}}\n"}],"routeData":{"route":"/blog/hugging-face-spaces","isIndex":false,"type":"page","pattern":"^\\/blog\\/hugging-face-spaces\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"hugging-face-spaces","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/hugging-face-spaces.md","pathname":"/blog/hugging-face-spaces","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css"},{"type":"inline","content":".blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem;header{margin-bottom:2rem;img{width:100%}h1{font-size:2.5rem;margin-bottom:.5rem}.metadata{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author{margin-left:.25rem}}.content{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}img{max-width:100%;height:auto}}}\n"}],"routeData":{"route":"/blog/jest-using-modules","isIndex":false,"type":"page","pattern":"^\\/blog\\/jest-using-modules\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"jest-using-modules","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/jest-using-modules.md","pathname":"/blog/jest-using-modules","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css"},{"type":"inline","content":".blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem;header{margin-bottom:2rem;img{width:100%}h1{font-size:2.5rem;margin-bottom:.5rem}.metadata{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author{margin-left:.25rem}}.content{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}img{max-width:100%;height:auto}}}\n"}],"routeData":{"route":"/blog/kaggle-dataset-google-colab","isIndex":false,"type":"page","pattern":"^\\/blog\\/kaggle-dataset-google-colab\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"kaggle-dataset-google-colab","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/kaggle-dataset-google-colab.md","pathname":"/blog/kaggle-dataset-google-colab","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css"},{"type":"inline","content":".blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem;header{margin-bottom:2rem;img{width:100%}h1{font-size:2.5rem;margin-bottom:.5rem}.metadata{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author{margin-left:.25rem}}.content{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}img{max-width:100%;height:auto}}}\n"}],"routeData":{"route":"/blog/mermaid-diagrams","isIndex":false,"type":"page","pattern":"^\\/blog\\/mermaid-diagrams\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"mermaid-diagrams","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/mermaid-diagrams.md","pathname":"/blog/mermaid-diagrams","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css"},{"type":"inline","content":".blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem;header{margin-bottom:2rem;img{width:100%}h1{font-size:2.5rem;margin-bottom:.5rem}.metadata{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author{margin-left:.25rem}}.content{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}img{max-width:100%;height:auto}}}\n"}],"routeData":{"route":"/blog/react-hugging-face-inference-api","isIndex":false,"type":"page","pattern":"^\\/blog\\/react-hugging-face-inference-api\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"react-hugging-face-inference-api","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/react-hugging-face-inference-api.md","pathname":"/blog/react-hugging-face-inference-api","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css"},{"type":"inline","content":".blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem;header{margin-bottom:2rem;img{width:100%}h1{font-size:2.5rem;margin-bottom:.5rem}.metadata{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author{margin-left:.25rem}}.content{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}img{max-width:100%;height:auto}}}\n"}],"routeData":{"route":"/blog/react-vs-angular-vs-vue-vs-svelte","isIndex":false,"type":"page","pattern":"^\\/blog\\/React-vs-Angular-vs-Vue-vs-Svelte\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"React-vs-Angular-vs-Vue-vs-Svelte","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/React-vs-Angular-vs-Vue-vs-Svelte.md","pathname":"/blog/React-vs-Angular-vs-Vue-vs-Svelte","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css"},{"type":"inline","content":".blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem;header{margin-bottom:2rem;img{width:100%}h1{font-size:2.5rem;margin-bottom:.5rem}.metadata{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author{margin-left:.25rem}}.content{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}img{max-width:100%;height:auto}}}\n"}],"routeData":{"route":"/blog/typescript-types-vs-interfaces","isIndex":false,"type":"page","pattern":"^\\/blog\\/typescript-types-vs-interfaces\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"typescript-types-vs-interfaces","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/typescript-types-vs-interfaces.md","pathname":"/blog/typescript-types-vs-interfaces","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"a[data-astro-cid-q2wpt7bd][href]{font-size:.7em;background-color:light-dark(var(--dark3),var(--lite3));color:light-dark(var(--lite1),var(--dark1));padding:1px 10px;margin:.5rem;border-radius:1rem;text-decoration:none}\nmain[data-astro-cid-5tznm7mj]{margin:auto;padding:1rem;width:clamp(800px,90vw,90vw);color:light-dark(var(--dark1),var(--lite1));font-size:20px}h1[data-astro-cid-5tznm7mj]{font-size:3rem;font-weight:700;line-height:1;text-align:center;margin-bottom:2em;color:light-dark(var(--dark1),var(--lite1))}div[data-astro-cid-5tznm7mj].postsList{display:grid;gap:2rem;>.article{border:1px solid light-dark(var(--dark1),var(--lite1));padding:0;display:grid;grid-template-columns:250px 1fr 1fr;grid-template-areas:\"img pubDate     author\" \"img title       title\" \"img description description\" \"img tags        tags\";span.tags{grid-area:tags}& img{grid-area:img}time{grid-area:pubDate;font-size:.75rem}span.author{grid-area:author;font-size:.75rem}h2.title{grid-area:title;margin:0}p.description{grid-area:description;margin:1rem 0 0;color:light-dark(var(--dark1),var(--lite1))}}}\n"},{"type":"external","src":"/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css"},{"type":"inline","content":".blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem;header{margin-bottom:2rem;img{width:100%}h1{font-size:2.5rem;margin-bottom:.5rem}.metadata{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author{margin-left:.25rem}}.content{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}img{max-width:100%;height:auto}}}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"main[data-astro-cid-aee76kgo]{position:relative;display:grid;place-items:center;h2{font-size:2em}.fa-book{color:var(--dark2)}.fa-tools{color:var(--dark6)}.fa-code{color:var(--dark3)}.fa-check-circle{color:var(--dark5)}.fa-calendar-alt{color:var(--dark4)}section#legend{position:sticky;bottom:0;background-color:var(--lite1);border:2px solid var(--dark1);border-radius:10px;padding:10px;h2{font-size:1.2em;margin:0 10px 5px auto}div.for-flex-layout{display:block flex;justify-content:flex-start;div{flex:0 1 300px;margin:0 10px;i{font-size:1.25em;margin-right:5px}}}}section{margin-bottom:30px;div.for-flex-layout{display:block flex;flex-wrap:wrap;justify-content:space-around;gap:20px;section{flex:0 1 200px;background-color:var(--lite2);border:2px solid var(--dark1);border-radius:10px;padding:10px;h3{text-align:center}i.fa{font-size:2em}}}}}\n"},{"type":"external","src":"/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css"},{"type":"inline","content":".blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem;header{margin-bottom:2rem;img{width:100%}h1{font-size:2.5rem;margin-bottom:.5rem}.metadata{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author{margin-left:.25rem}}.content{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}img{max-width:100%;height:auto}}}\n"}],"routeData":{"route":"/courses","isIndex":false,"type":"page","pattern":"^\\/courses\\/?$","segments":[[{"content":"courses","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/courses.astro","pathname":"/courses","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css"},{"type":"inline","content":".blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem;header{margin-bottom:2rem;img{width:100%}h1{font-size:2.5rem;margin-bottom:.5rem}.metadata{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author{margin-left:.25rem}}.content{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}img{max-width:100%;height:auto}}}\n"}],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"li[data-astro-cid-iyiqi2so]{position:relative;list-style-type:none;max-width:300px;border:1px solid light-dark(var(--dark1),var(--lite1));margin:5px;background-color:light-dark(var(--lite2),var(--dark2));a{color:light-dark(var(--dark1),var(--lite1));text-decoration:none}img{width:100%}div{padding:.5rem}h4{text-align:center;margin:0}}@media (width < 768px){li[data-astro-cid-iyiqi2so]{max-width:100%;background:none;img{position:absolute;object-fit:cover;filter:opacity(.15);z-index:-1;height:100%}}}main[data-astro-cid-j7pv25f6]{margin:auto;padding:1rem;font-size:20px;h1{font-size:4rem;font-weight:700;line-height:1;margin-bottom:1em;img{height:1em;margin-right:.25em}}h1:has(~h2),h2{text-align:center;margin:0 auto}.latest-blog-posts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width < 768px){main[data-astro-cid-j7pv25f6] .latest-blog-posts[data-astro-cid-j7pv25f6]{display:block}}\na[data-astro-cid-q2wpt7bd][href]{font-size:.7em;background-color:light-dark(var(--dark3),var(--lite3));color:light-dark(var(--lite1),var(--dark1));padding:1px 10px;margin:.5rem;border-radius:1rem;text-decoration:none}\n"},{"type":"external","src":"/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css"},{"type":"inline","content":".blog-post[data-astro-cid-bvzihdzo]{font-family:Menlo,Arial,sans-serif;max-width:65ch;margin:0 auto;padding:2rem;header{margin-bottom:2rem;img{width:100%}h1{font-size:2.5rem;margin-bottom:.5rem}.metadata{color:light-dark(var(--dark1),var(--lite1));font-size:.9rem}.author{margin-left:.25rem}}.content{color:light-dark(var(--dark1),var(--lite1));line-height:1.7;h1,h2,h3,h4,h5,h6{color:light-dark(var(--dark2),var(--lite2))}img{max-width:100%;height:auto}}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://agilegadgets.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/rap/Desktop/agile-gadgets/src/pages/blog/React-vs-Angular-vs-Vue-vs-Svelte.md",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/rss.xml.js",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/blog/a11y-isnt-optional.md",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/blog/component-classname-pattern.md",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/blog/flutter-forms-validation.md",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/blog/hugging-face-api-keys-made-easy.md",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/blog/hugging-face-spaces.md",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/blog/jest-using-modules.md",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/blog/kaggle-dataset-google-colab.md",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/blog/mermaid-diagrams.md",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/blog/react-hugging-face-inference-api.md",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/blog/typescript-types-vs-interfaces.md",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/rap/Desktop/agile-gadgets/src/pages/courses.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/a11y-isnt-optional@_@md":"pages/blog/a11y-isnt-optional.astro.mjs","\u0000@astro-page:src/pages/blog/component-classname-pattern@_@md":"pages/blog/component-classname-pattern.astro.mjs","\u0000@astro-page:src/pages/blog/flutter-forms-validation@_@md":"pages/blog/flutter-forms-validation.astro.mjs","\u0000@astro-page:src/pages/blog/hugging-face-api-keys-made-easy@_@md":"pages/blog/hugging-face-api-keys-made-easy.astro.mjs","\u0000@astro-page:src/pages/blog/hugging-face-spaces@_@md":"pages/blog/hugging-face-spaces.astro.mjs","\u0000@astro-page:src/pages/blog/jest-using-modules@_@md":"pages/blog/jest-using-modules.astro.mjs","\u0000@astro-page:src/pages/blog/kaggle-dataset-google-colab@_@md":"pages/blog/kaggle-dataset-google-colab.astro.mjs","\u0000@astro-page:src/pages/blog/mermaid-diagrams@_@md":"pages/blog/mermaid-diagrams.astro.mjs","\u0000@astro-page:src/pages/blog/react-hugging-face-inference-api@_@md":"pages/blog/react-hugging-face-inference-api.astro.mjs","\u0000@astro-page:src/pages/blog/React-vs-Angular-vs-Vue-vs-Svelte@_@md":"pages/blog/react-vs-angular-vs-vue-vs-svelte.astro.mjs","\u0000@astro-page:src/pages/blog/typescript-types-vs-interfaces@_@md":"pages/blog/typescript-types-vs-interfaces.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/courses@_@astro":"pages/courses.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BQYbO-kP.mjs","/Users/rap/Desktop/agile-gadgets/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/rap/Desktop/agile-gadgets/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CHEyZ2qc.mjs","/Users/rap/Desktop/agile-gadgets/src/pages/about.astro?astro&type=script&index=0&lang.ts":"_astro/about.astro_astro_type_script_index_0_lang.n9L73smK.js","/Users/rap/Desktop/agile-gadgets/src/components/ImageDialog.astro?astro&type=script&index=0&lang.ts":"_astro/ImageDialog.astro_astro_type_script_index_0_lang.CRyfZPzy.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/rap/Desktop/agile-gadgets/src/pages/about.astro?astro&type=script&index=0&lang.ts","document.querySelector(\"#jeepButton\")?.addEventListener(\"click\",()=>{document.querySelector(\"#jeepDialog\")?.showModal()});document.querySelector(\"#ironmanButton\")?.addEventListener(\"click\",()=>{document.querySelector(\"#ironmanDialog\")?.showModal()});"],["/Users/rap/Desktop/agile-gadgets/src/components/ImageDialog.astro?astro&type=script&index=0&lang.ts","const e=document.querySelectorAll(\"dialog\");e.forEach(l=>l?.addEventListener(\"click\",()=>l.close()));"]],"assets":["/_astro/fa-brands-400.D_cYUPeE.woff2","/_astro/fa-regular-400.BjRzuEpd.woff2","/_astro/fontawesome-webfont.G5YE5S7X.eot","/_astro/fa-solid-900.CTAAxXor.woff2","/_astro/fa-v4compatibility.C9RhG_FT.woff2","/_astro/fa-regular-400.DZaxPHgR.ttf","/_astro/fa-brands-400.D1LuMI3I.ttf","/_astro/fontawesome-webfont.B-jkhYfk.woff2","/_astro/fa-solid-900.D0aA9rwL.ttf","/_astro/fa-v4compatibility.CCth-dXg.ttf","/_astro/fontawesome-webfont.CDK5bt4p.woff","/_astro/fontawesome-webfont.CQDK8MU3.ttf","/_astro/fontawesome-webfont.D13rzr4g.svg","/_astro/React-vs-Angular-vs-Vue-vs-Svelte.CAQKXfcF.css","/favicon.ico","/fonts/RapPaynesHandwriting-Regular.otf","/images/AgileMan.jpg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"jxGyLT+TAreqbJ1gDvkcpYesJRlO54/iLdGaPkHT2U0=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/rap/Desktop/agile-gadgets/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
