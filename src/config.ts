export const SITE = {
  website: "https://example.com",
  author: "Author Name",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  lang: "en",
  timezone: "UTC", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  twitterHandle: "@username", // Optional: your Twitter handle
  editPost: {
    url: "https://github.com/your-username/your-repo/edit/main/",
    enabled: false,
  },
} as const;
