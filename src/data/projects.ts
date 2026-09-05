import type { LocaleKey } from "@/i18n/config";

type LocalizedText = Record<LocaleKey, string>;

export interface Project {
  name: string;
  repoUrl: string;
  summary: LocalizedText;
  description: LocalizedText;
  highlights: Record<LocaleKey, string[]>;
  stack: string[];
}

export const projects: Project[] = [
  {
    name: "Astro Blog",
    repoUrl: "https://github.com/your-username/your-repo",
    summary: {
      en: "A bilingual technical blog built with Astro for writing and portfolio.",
      fa: "وبلاگ و پورتفولیوی دو زبانه ساخته شده با Astro",
    },
    description: {
      en: "A modern blog template featuring localized routes, Markdown content collections, RSS, sitemap generation, syntax highlighting, LaTeX support, and Python code execution.",
      fa: "یک قالب وبلاگ مدرن با پشتیبانی از مسیرهای دو زبانه، کالکشن‌های Markdown، فید RSS، سایت‌مپ، هایلایت کد، پشتیبانی از فرمول‌های LaTeX و اجرای کدهای پایتون در زمان بیلد.",
    },
    highlights: {
      en: [
        "Localized English and Persian routes with RTL/LTR-aware presentation.",
        "Markdown-first publishing workflow for posts, authors, and about pages.",
        "Search indexing, RSS, sitemap, dark mode, and technical typography.",
        "Python executable code blocks for richer demo and notebook posts.",
      ],
      fa: [
        "هندل کردن صحیح محتوای راست به چپ / چپ به راست",
        "فرایند انتشار Markdown-first برای پست‌ها، نویسنده‌ها و صفحه درباره.",
        "ایندکس جستجو، RSS، sitemap، حالت تاریک و تایپوگرافی مناسب محتوای فنی.",
        "بلاک‌های Python قابل اجرا و پست‌های notebook-مانند.",
      ],
    },
    stack: ["Astro", "TypeScript", "Tailwind CSS", "Markdown", "Pagefind"],
  },
];
