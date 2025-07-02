import { f as createComponent, l as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_BAVukojE.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from './BlogPost_CwVIbcKS.mjs';

const html = () => "<p>Hugging Face provides tons of Machine Learning tools but to use many of them you need an API key. Let’s break down the process of getting and using those keys along with an explanation of the nuances of the different types of keys.</p>\n<h2 id=\"to-get-a-key\">To get a key</h2>\n<ol>\n<li>Log in to your <a href=\"https://huggingface.co/\">Hugging Face</a> account.</li>\n<li>Go to your <a href=\"https://huggingface.co/settings/tokens\">tokens</a>.</li>\n<li>Click on “<strong>Create new token</strong>”.</li>\n<li>Choose your token type. <a href=\"#token-types\">more on that below</a>.</li>\n<li>Enter a unique name.</li>\n<li>Click “<strong>Create token</strong>”.</li>\n<li>Copy the token and save it somewhere safe. This is the only time you’ll be able to see it.</li>\n</ol>\n<hr>\n<blockquote>\n<p>Note: You can and should create many tokens, one for each project. This way, if one token is compromised, you can delete it without affecting your other projects.</p>\n</blockquote>\n<hr>\n<h2 id=\"token-types\">Token Types</h2>\n<p><strong>Read</strong> - Read access only.</p>\n<p><strong>Write</strong> - Full read <u>and write</u> access to everything. <span class=\"danger\">Dangerous!</span></p>\n<p><strong>Fine-grained</strong> - Tuneable. This is the move!</p>\n<p>Fine-grained access adheres to the most <a href=\"https://csrc.nist.gov/glossary/term/least_privilege\">secure</a> <a href=\"https://csrc.nist.gov/glossary/term/defense_in_depth\">practices</a>. You can choose which activities:</p>\n<ul>\n<li>Repositories</li>\n<li>Inference</li>\n<li>Webhooks</li>\n<li>Collections</li>\n<li>Discussions and posts</li>\n</ul>\n<p>And within those activities, you determine exactly what the token allows:</p>\n<ul>\n<li>Read</li>\n<li>Write</li>\n<li>Manage</li>\n</ul>\n<p>Most of us are going to create the most dangerous token, the <strong>Write</strong> token and test with it. That’s fine, but be sure to delete it and create a fine-grained token once it is working.</p>";

				const frontmatter = {"layout":"../../layouts/BlogPost.astro","title":"Hugging Face API Keys made Easy","description":"You need Hugging Face security tokens to use their models and they're not super easy to understand. We spill the tea in this post.","pubDate":"2025-05-12T00:00:00.000Z","author":"Rap Payne","time-to-read":"5 minutes","url":"/blog/hugging-face-api-keys-made-easy","cloudinaryImageFileName":"v1747078803/HF_api_keys_fwijtk.png","categories":["machine learning","data science","API"]};
				const file = "/Users/rap/Desktop/agile-gadgets/src/pages/blog/hugging-face-api-keys-made-easy.md";
				const url = "/blog/hugging-face-api-keys-made-easy";
				function rawContent() {
					return "   \n                                    \n                                        \n                                                                                                                                                 \n                   \n                 \n                       \n                                          \n                                                           \n                                                       \n   \n\nHugging Face provides tons of Machine Learning tools but to use many of them you need an API key. Let's break down the process of getting and using those keys along with an explanation of the nuances of the different types of keys.\n\n## To get a key\n\n1. Log in to your [Hugging Face](https://huggingface.co/) account.\n1. Go to your [tokens](https://huggingface.co/settings/tokens).\n1. Click on \"**Create new token**\".\n1. Choose your token type. [more on that below](#token-types).\n1. Enter a unique name.\n1. Click \"**Create token**\".\n1. Copy the token and save it somewhere safe. This is the only time you'll be able to see it.\n---\n> Note: You can and should create many tokens, one for each project. This way, if one token is compromised, you can delete it without affecting your other projects.\n---\n## Token Types\n**Read** - Read access only.\n\n**Write** - Full read <u>and write</u> access to everything. <span class=\"danger\">Dangerous!</span>\n  \n**Fine-grained** - Tuneable. This is the move!\n\nFine-grained access adheres to the most [secure](https://csrc.nist.gov/glossary/term/least_privilege) [practices](https://csrc.nist.gov/glossary/term/defense_in_depth). You can choose which activities:\n- Repositories\n- Inference\n- Webhooks\n- Collections\n- Discussions and posts\n\nAnd within those activities, you determine exactly what the token allows:\n- Read\n- Write\n- Manage\n\nMost of us are going to create the most dangerous token, the **Write** token and test with it. That's fine, but be sure to delete it and create a fine-grained token once it is working.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"to-get-a-key","text":"To get a key"},{"depth":2,"slug":"token-types","text":"Token Types"}];
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
