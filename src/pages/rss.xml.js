import rss from '@astrojs/rss';

export async function GET(context) {
  const blog = await context.glob('./blog/*.md');
  return rss({
    title: 'My Blog',
    description: 'A blog built with Astro',
    site: context.site,
    items: blog.map((post) => ({
      title: post.frontmatter.title,
      pubDate: new Date(post.frontmatter.date),
      description: post.frontmatter.description,
      link: post.url,
    })),
  });
}