import { a as createComponent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_BF_iDF4U.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from './BlogPost_B7EK-mG1.mjs';

const html = () => "<p>Welcome to my new blog! This is my second post using Astro’s built-in blog capabilities.</p>\n<h2 id=\"why-astro\">Why Astro?</h2>\n<p>Astro is an amazing static site generator that allows you to:</p>\n<ul>\n<li>Write content in Markdown</li>\n<li>Use your favorite frontend frameworks</li>\n<li>Ship zero JavaScript by default</li>\n<li>Deploy anywhere</li>\n</ul>\n<h2 id=\"whats-next\">What’s Next?</h2>\n<p>Stay tuned for more posts about web development, technology, and more!</p>";

				const frontmatter = {"layout":"../../layouts/BlogPost.astro","title":"My Second Blog Post","date":"2023-11-10T00:00:00.000Z","author":"Rap Payne","description":"This is my second blog post using Astro's blog functionality.","time-to-read":"15 minutes"};
				const file = "/Users/rap/Desktop/agile-gadgets/src/pages/blog/second post.md";
				const url = "/blog/second post";
				function rawContent() {
					return "   \n                                    \n                          \n                \n                 \n                                                                          \n                        \n\n   \n\nWelcome to my new blog! This is my second post using Astro's built-in blog capabilities.\n\n## Why Astro?\n\nAstro is an amazing static site generator that allows you to:\n\n- Write content in Markdown\n- Use your favorite frontend frameworks\n- Ship zero JavaScript by default\n- Deploy anywhere\n\n## What's Next?\n\nStay tuned for more posts about web development, technology, and more!";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"why-astro","text":"Why Astro?"},{"depth":2,"slug":"whats-next","text":"What’s Next?"}];
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

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_3 as _ };
