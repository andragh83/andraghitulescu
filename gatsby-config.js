module.exports = {
  siteMetadata: {
    title: "AndraGH",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:300,400,400i,700`,
          `Julius Sans One`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-fontawesome-css`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdownPages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
