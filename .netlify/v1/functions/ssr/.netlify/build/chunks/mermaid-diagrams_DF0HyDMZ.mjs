import { f as createComponent, k as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_D72iM745.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from './BlogPost_0gCcc43l.mjs';

const html = () => "<h1 id=\"mermaid-cheat-sheet\">Mermaid Cheat Sheet</h1>\n<p>Mermaid (aka mermaid.js) creates diagrams super easily in your web apps and in Markdown.</p>\n<h2 id=\"getting-started-in-astro\">Getting Started in Astro</h2>\n<p>Mermaid needs to render server-side using rehype-meraid, Playwright, and MermaidJS itself.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">npm</span><span style=\"color:#9ECBFF\"> install</span><span style=\"color:#9ECBFF\"> @astrojs/mdx</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">npm</span><span style=\"color:#9ECBFF\"> install</span><span style=\"color:#9ECBFF\"> playwright</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">npx</span><span style=\"color:#9ECBFF\"> playwright</span><span style=\"color:#9ECBFF\"> install</span><span style=\"color:#79B8FF\"> --with-deps</span><span style=\"color:#9ECBFF\"> chromium</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">npm</span><span style=\"color:#9ECBFF\"> install</span><span style=\"color:#9ECBFF\"> rehype-mermaid</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">npm</span><span style=\"color:#9ECBFF\"> install</span><span style=\"color:#9ECBFF\"> mermaid</span></span></code></pre>\n<hr>\n<p>Pro tip! You probably want to disable the default syntax highlighting in VS Code. Do this in astro.config.mjs:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#F97583\">import</span><span style=\"color:#E1E4E8\"> { defineConfig } </span><span style=\"color:#F97583\">from</span><span style=\"color:#9ECBFF\"> 'astro/config'</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">import</span><span style=\"color:#E1E4E8\"> rehypeMermaid </span><span style=\"color:#F97583\">from</span><span style=\"color:#9ECBFF\"> 'rehype-mermaid'</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#F97583\">export</span><span style=\"color:#F97583\"> default</span><span style=\"color:#B392F0\"> defineConfig</span><span style=\"color:#E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  markdown: {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    syntaxHighlight: {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">      type: </span><span style=\"color:#9ECBFF\">'shiki'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">      excludeLangs: [</span><span style=\"color:#9ECBFF\">'mermaid'</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">'math'</span><span style=\"color:#E1E4E8\">],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    },</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    rehypePlugins: [rehypeMermaid],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  },</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">});</span></span></code></pre>\n<hr>\n<h2 id=\"simple-diagram\">Simple diagram</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"mermaid\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">graph TD;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    A-->B;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    A-->C;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    B-->D;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    C-->D;</span></span></code></pre>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"mermaid\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">graph TD</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    A[Start] --> B{Is it working?}</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    B -->|Yes| C[Great!]</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    B -->|No| D[Debug]</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    D --> B</span></span></code></pre>";

				const frontmatter = {"layout":"../../layouts/BlogPost.astro","title":"Incredibly easy diagrams with Mermaid","pubDate":"2025-04-28T00:00:00.000Z","author":"Rap Payne","description":"Want to add diagrams to your web app? Mermaid.js makes it eye-poppingly simple!","categories":["css","html"],"time-to-read":"3 minutes","url":"/blog/mermaid-diagrams","cloudinaryImageFileName":"v1745247710/a11y-isnt-optional_eiaarx.jpg"};
				const file = "/Users/rap/Desktop/agile-gadgets/src/pages/blog/mermaid-diagrams.md";
				const url = "/blog/mermaid-diagrams";
				function rawContent() {
					return "   \n                                    \n                                              \n                   \n                 \n                                                                                              \n                       \n                       \n                           \n                                                                  \n   \n# Mermaid Cheat Sheet\n\nMermaid (aka mermaid.js) creates diagrams super easily in your web apps and in Markdown.\n\n## Getting Started in Astro\nMermaid needs to render server-side using rehype-meraid, Playwright, and MermaidJS itself. \n```bash\nnpm install @astrojs/mdx\nnpm install playwright\nnpx playwright install --with-deps chromium\nnpm install rehype-mermaid\nnpm install mermaid\n```\n\n---\nPro tip! You probably want to disable the default syntax highlighting in VS Code. Do this in astro.config.mjs:\n```javascript\nimport { defineConfig } from 'astro/config';\nimport rehypeMermaid from 'rehype-mermaid';\n\nexport default defineConfig({\n  markdown: {\n    syntaxHighlight: {\n      type: 'shiki',\n      excludeLangs: ['mermaid', 'math'],\n    },\n    rehypePlugins: [rehypeMermaid],\n  },\n});\n```\n---\n\n\n## Simple diagram\n```mermaid\ngraph TD;\n    A-->B;\n    A-->C;\n    B-->D;\n    C-->D;\n```\n\n```mermaid\ngraph TD\n    A[Start] --> B{Is it working?}\n    B -->|Yes| C[Great!]\n    B -->|No| D[Debug]\n    D --> B\n```\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"mermaid-cheat-sheet","text":"Mermaid Cheat Sheet"},{"depth":2,"slug":"getting-started-in-astro","text":"Getting Started in Astro"},{"depth":2,"slug":"simple-diagram","text":"Simple diagram"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPost, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
