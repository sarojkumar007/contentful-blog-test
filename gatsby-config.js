/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata:{
      title: "Full-stack Dev Bootcamp",
      author: "@dev_sarojkumar"
    },
    plugins:[
        'gatsby-plugin-react-helmet',
        {
          resolve: 'gatsby-source-contentful',
          options: {
            spaceId: 'f9ztga0mebb8',
            accessToken: '3y03Hrg1mlvZzX3Rbk9MG_vcPD4M0qXoECrWdt8rgrQ'
          }
        },
        'gatsby-plugin-sass',
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'src',
            path: `${__dirname}/src/`
          }
        },
        'gatsby-plugin-sharp',
        {
          resolve: 'gatsby-transformer-remark',
          options: {
            plugins: [
              'gatsby-remark-relative-images',
              {
                resolve: 'gatsby-remark-images',
                options: {
                  maxWidth: 750,
                  linkImagesToOriginal: false
                }
              }
            ]
          }
        }
    ]
}
