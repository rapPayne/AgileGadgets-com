---
layout: ../../layouts/BlogPost.astro
title: "Incredibly easy diagrams with Mermaid"
date: 2025-04-28
author: Rap Payne
description: "Want to add diagrams to your web app? Mermaid.js makes it eye-poppingly simple!"
tags: [css, html]
time-to-read: 3 minutes
url: /blog/mermaid-diagrams
cloudinaryImageFileName: v1745247710/a11y-isnt-optional_eiaarx.jpg
---
# Mermaid Cheat Sheet

Mermaid (aka mermaid.js) creates diagrams super easily in your web apps and in Markdown.

## Getting Started in Astro
Mermaid needs to render server-side using rehype-meraid, Playwright, and MermaidJS itself. 
```bash
npm install @astrojs/mdx
npm install playwright
npx playwright install --with-deps chromium
npm install rehype-mermaid
npm install mermaid
```

---
Pro tip! You probably want to disable the default syntax highlighting in VS Code. Do this in astro.config.mjs:
```javascript
import { defineConfig } from 'astro/config';
import rehypeMermaid from 'rehype-mermaid';

export default defineConfig({
  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid', 'math'],
    },
    rehypePlugins: [rehypeMermaid],
  },
});
```
---


## Simple diagram
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```mermaid
graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
```
