/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://studiofantauzzo.it",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  changefreq: "monthly",
  priority: 0.7,
  additionalPaths: async () => [
    { loc: "/", priority: 1.0, changefreq: "weekly" },
    { loc: "/chi-siamo", priority: 0.8, changefreq: "monthly" },
    { loc: "/servizi", priority: 0.9, changefreq: "monthly" },
    { loc: "/faq", priority: 0.7, changefreq: "monthly" },
    { loc: "/contatti", priority: 0.8, changefreq: "monthly" },
  ],
};
