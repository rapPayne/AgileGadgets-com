import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  const unsortedItems = await pagesGlobToRssItems(import.meta.glob('./**/*.md'));
  const items = unsortedItems.toSorted((a, b) => b.pubDate - a.pubDate);
  return rss({
    title: "Agile Gadgets, Rap Payne's Blog",
    description: "Rap Payne's blog about web tech and AI",
    site: context.site,
    items,
    customData: `<language>en-us</language>`,
  });
}