const siteUrl = `https://alberic.trancart.net`;

module.exports = {
  siteMetadata: {
    title: `Albéric Trancart`,
    description: `Developer, space explorer, dungeon master and more!`,
    author: `Albéric Trancart`,
    siteUrl,
  },
  plugins: [
    // Codebase
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tsconfig-paths`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,

    // Assets
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: { checkSupportedExtensions: false },
    },
    `gatsby-plugin-styled-components`,

    // Articles
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 800,
              related: false,
              noIframeBorder: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
        ],
      },
    },

    // SEO
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Albéric Trancart`,
        short_name: `Albéric Trancart`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `./src/images/alberictrancart.jpg`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-110877372-1`,
        head: false,
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
