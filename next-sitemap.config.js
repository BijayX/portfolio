module.exports = {
  siteUrl: process.env.SITE_URL || 'https://bijayastha.com.np',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  additionalPaths: async (config) => [await config.transform(config, '/')],
};
