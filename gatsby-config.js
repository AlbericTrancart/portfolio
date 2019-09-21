const siteUrl = `https://alberic.trancart.net`;

module.exports = {
  siteMetadata: {
    title: `Albéric Trancart`,
    description: `Developer, life hacker, space enthusiast and more!`,
    author: `Albéric Trancart`,
    siteUrl
  },
  plugins: [
    // Codebase
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`
    //   }
    // },

    // Assets
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,

    // SEO
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-110877372-1`,
        head: false
      }
    },
    `gatsby-plugin-netlify`
  ]
};
