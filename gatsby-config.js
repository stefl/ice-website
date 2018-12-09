require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { RichText } = require('prismic-reactjs')

const { Elements } = RichText

const {
  _pathPrefix,
  shortName,
  description,
  themeColor,
  backgroundColor,
  _title,
  _titleAlt,
  _url,
  author,
  logo,
  favicon,
  siteLanguage,
  twitter,
} = require('./config/website')

module.exports = {
  /* General Information */
  pathPrefix: _pathPrefix,
  siteMetadata: {
    title: _title,
    titleAlt: _titleAlt,
    shortName,
    author,
    siteLanguage,
    logo, // Logo for JSONLD
    url: _url,
    siteUrl: _url + _pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix: _pathPrefix,
    description,
    banner: logo,
    twitter,
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'icewebsite',
        accessToken: `${process.env.API_KEY}`,
        linkResolver: () => post => `/${post.uid}`,
        htmlSerializer: () => (type, element, content) => {
          switch (type) {
            // First differentiate between a label and a preformatted field (e.g. the Code Block slice)
            case Elements.label: {
              // Use the blockquote for labels with the name "quote"
              if (element.data.label === 'quote') {
                return `<blockquote><p>${content}</p></blockquote>`
              }

              return null
            }
            case Elements.preformatted: {
              return null
            }
            default: {
              return null
            }
          }
        },
      },
    },
    'gatsby-plugin-lodash',
    // Although this starter doesn't use local files this plugin is necessary for the gatsby-image features of gatsby-source-prismic
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography.js',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: _title,
        short_name: _titleAlt,
        description,
        start_url: _pathPrefix,
        background_color: backgroundColor,
        theme_color: themeColor,
        display: 'standalone',
        icon: favicon,
      },
    },
    // Must be placed at the end
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
