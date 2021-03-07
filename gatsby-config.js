module.exports = {
  siteMetadata: {
    title: "AndraGH",
    titleTemplate: "%s · Web Developer",
    description: "Andra Ghitulescu Portfolio Website",
    image: "/images/andragh.png",
    url: "https://www.andragh.co.uk",
    twitterUsername: "@andra.ghitulescu",    
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
