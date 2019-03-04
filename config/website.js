module.exports = {
  _pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  _title: 'The ICE List', // Navigation and Site Title
  _titleAlt: 'The ICE List', // Title for JSONLD
  description: 'We’ve built a community of the world’s most exciting entrepreneurs. Want to join the adventure?',
  _url: 'https://theicelist.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/ice-logo@2x.png', // Used for SEO

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'ICE', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Stef Lewandowski', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@icelist', // Twitter Username
}
