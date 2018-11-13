module.exports = {
  siteMetadata: {
    name: `Josh Bryant`,
    title: `GatsbyJS`,
    date: `November 13th, 2018`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src`,
      },
    },
  ],
};
