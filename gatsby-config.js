const siteConfig = require('./site-config');
const { nominalTypeHack } = require('prop-types');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  pathPrefix: "/EEW-Website",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        pedantic: false,
        gfm: true,
        commonmark: true,
        footnotes: true,
        plugins: [
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 600,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                }
              ]
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              backgroundColor: 'none',
              linkImagesToOriginal: 'false',
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true
            }
          }          
        ]
      }
    },
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: 'https://envirodatagov.us16.list-manage.com/subscribe/post?u=0cecb14f2c571ba076e646bbb&amp;id=37cabebe36',
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: '@mkitio/gatsby-theme-password-protect',
      options: {
        pagePaths: ['/reports'],
        partialMatching: true,
        password: 'We envision a future in which justice and equity are at the center of environmental, climate, and data governance.' // delete or `undefined` to disable password protection
      }
    }
  ],
};
