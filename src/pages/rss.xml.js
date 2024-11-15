import rss from '@astrojs/rss';

export async function GET(context) {
  // Glob all blog posts
  const blogPosts = import.meta.glob('./blog/*.md', { eager: true });

  // Map and transform the blog post data
  const items = Object.values(blogPosts).map((post) => ({
    title: post.frontmatter.title,
    pubDate: post.frontmatter.pubDate,
    description: post.frontmatter.description,
    link: `/blog/${post.frontmatter.slug || post.file.split('/').pop().replace('.md', '')}/`,
  }));

  return rss({
    title: 'Agile Gadgets by Rap Payne',
    description: `A blog site for Rap's writing, consulting, mentoring and training`,
    site: context.site,
    items,
  });
}
