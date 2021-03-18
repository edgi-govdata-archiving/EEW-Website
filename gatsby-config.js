const siteConfig = require('./site-config');
const { nominalTypeHack } = require('prop-types');

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Environmental Enforcement Watch",
        short_name: "EEW",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#1B7F71",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "content/images/logos/eew-icon-web.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-social-cards`,
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
  ],
};
