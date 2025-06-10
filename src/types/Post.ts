type Post = {
  frontmatter: Frontmatter;
}

type Frontmatter = {
  pubDate: string
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
type Tag = 'a11y'
  | 'API'
  | 'data science'
  | 'css'
  | 'flutter'
  | 'google colab'
  | 'html'
  | 'hugging face'
  | 'javascript'
  | 'kaggle'
  | 'machine learning'
  | 'python'
  | 'react'
  | 'react native'
  | 'svelte'
  | 'tutorial'
  | 'typescript'
  | 'vue'