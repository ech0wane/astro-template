# Astro Blog Template

A clean, responsive blog template built with Astro 5 and Tailwind CSS. It comes with built-in bilingual support (English and Persian / LTR and RTL), fast static search, KaTeX math rendering, and executable Python code blocks.

## Features

- Bilingual and bidirectional: Native English (LTR) and Persian (RTL) routing with Vazir Code font support.
- Content collections: Organized Markdown content for posts, authors, and about pages.
- Math support: Render mathematical equations using KaTeX (both inline and display blocks).
- Executable Python blocks: Run Python code snippets during prebuild and display outputs or matplotlib charts directly under code blocks.
- Search: Static, client-side full-text search powered by Pagefind.
- Light and dark mode: Built-in theme switcher with persisted local storage preferences.
- SEO ready: Includes automatic RSS feeds, sitemap generation, Open Graph meta tags, and schema.org markup.

## Getting Started

### Prerequisites

You need Node.js (version 20 or newer) and pnpm (or npm / yarn).

### Installation

Clone the repository and install dependencies:

```bash
pnpm install
```

### Development

Run the local development server:

```bash
pnpm dev
```

Open your browser and navigate to `http://localhost:4321`.

### Build

To create a production build with search indexing and cached Python outputs:

```bash
pnpm build
```

The output will be generated in the `dist/` directory.

To preview the production build locally:

```bash
pnpm preview
```

## Configuration and Customization

### Site Information

Update basic site settings such as title, URL, author name, and social links in `src/config.ts`:

```typescript
export const SITE = {
  website: "https://example.com",
  author: "Your Name",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerPage: 5,
  lang: "en",
  timezone: "UTC",
};
```

Social media links displayed in the footer can be configured in `src/constants.ts`.

### Languages and Translations

Translations and language definitions are located in `src/i18n/`:

- `src/i18n/config.ts`: Define active locales, direction (LTR/RTL), and default language.
- `src/i18n/locales/en.ts`: English translation strings.
- `src/i18n/locales/fa.ts`: Persian translation strings.

### Content

- Blog posts: Place Markdown files in `src/data/blog/en/` for English posts and `src/data/blog/fa/` for Persian posts.
- Authors: Add or edit author profiles in `src/data/authors/` (e.g. `author.md`).
- About pages: Edit `src/data/about/about.en.md` and `src/data/about/about.fa.md`.
- Projects page: Update the showcased projects list in `src/data/projects.ts`.

### Executable Python Blocks

To display outputs from Python code inside a Markdown post, add the `exec` attribute to a code block:

````markdown
```python exec
import matplotlib.pyplot as plt

plt.plot([1, 2, 3], [4, 5, 6])
```
````

Running `pnpm build` will execute the snippet, cache its output in `src/plugins/.python-exec-cache.json`, and inject rendered figures and stdout below the code block.

## Deployment

Because the site produces standard static HTML, CSS, and JS in `dist/`, it can be deployed to any static hosting provider, including:

- GitHub Pages
- Cloudflare Pages
- Vercel
- Netlify

Make sure your build command is set to:

```bash
pnpm build
```

And your publish directory is set to `dist`.

## License

This project is open source and available under the MIT License.
