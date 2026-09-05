---
author: "author"
pubDatetime: 2026-05-01T10:00:00.00
title: "Getting Started with the Blog Template"
featured: true
draft: false
archived: false
tags:
  - guide
  - markdown
  - demo
description: "An overview of features supported by this template, including Markdown, KaTeX math equations, and code highlighting."
---

This sample post showcases the formatting capabilities and structure of this Astro blog template.

## Table of Contents

## Overview

This template is built with **Astro 5** and **Tailwind CSS v4**, designed for technical writing with bilingual support (LTR and RTL).

Key highlights:
- Bilingual routing (English and Persian out of the box)
- Markdown content collections
- KaTeX mathematical expressions
- Executable Python code blocks with cached outputs
- Fast client-side search powered by Pagefind
- Responsive layout with dark and light mode toggle
- RSS feed and sitemap generation

## Math and Equations

Inline equations can be rendered using single dollar signs: $f(x) = a x^2 + b x + c$.

Block equations use double dollar signs:

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

Here is Euler's identity:

$$
e^{i\pi} + 1 = 0
$$

## Code Blocks

Syntax highlighting works seamlessly with Shiki:

```typescript
export interface SiteConfig {
  website: string;
  author: string;
  lang: string;
}

export const SITE: SiteConfig = {
  website: "https://example.com",
  author: "Author Name",
  lang: "en",
};
```

## Tables

| Feature | Status | Description |
| :--- | :---: | :--- |
| Bi-directional (RTL/LTR) | Supported | Automatically aligns content based on locale |
| Dark / Light Theme | Supported | Persisted theme preference across pages |
| Search | Supported | Client-side search with Pagefind |
| Math Equations | Supported | Rendered via remark-math and rehype-katex |

## Blockquotes

> "Simplicity is prerequisite for reliability."
> — Edsger W. Dijkstra
