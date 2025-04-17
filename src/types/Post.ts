type Post = {
  frontmatter: Frontmatter;
}

type Frontmatter = {
  date: string
  layout: Layout;
  title: string;
  author: string;
  description: string;
  tags: Array<Tag>;
  timeToRead: number;  // Replace with library to estimate https://www.npmjs.com/package/reading-time
  url: string;
  cloudinaryImageFileName: string;
  homePageImageUrl: string;
  listImageUrl: string;
  mainImageUrl: string;
}

type Layout = '../../layouts/BlogPost.astro';  // So we can add new layouts later if we choose.
type Tag = 'css' | 'flutter' | 'html' | 'javascript' | 'react' | 'react native'