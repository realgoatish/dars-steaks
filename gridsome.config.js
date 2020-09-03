// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: `Dar's Steaks`,
  siteDescription: `Serving the World's Best Cheesesteaks in Westmont, NJ`,
  titleTemplate: `%s | Dar's Steaks`,
  siteUrl: 'https://www.darssteaks.com',
  permalinks: {
    trailingSlash: true
  },
  icon: './uploads/dars-steaks-serif.png',
  metadata: {
    menu: {
      title: `Menu`,
      description: `Cheesesteaks, sandwiches, fries, and zeppoles in Westmont, NJ`
    },
    home: {
      title: `Home`,
      description: `Serving the world's best cheesesteak in Westmont, NJ`
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'markdowns/menu/**/*.md',
        typeName: 'MenuContent',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          autolinkHeadings: false
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'markdowns/global-layout/**/*.md',
        typeName: 'GlobalLayout',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          autolinkHeadings: false
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'markdowns/home-page/**/*.md',
        typeName: 'HomePage',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          autolinkHeadings: false
        }
      }
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    }
  ],
  chainWebpack: config => {
    config.module
    .rule('pug')
    .test(/\.pug$/)
    .use('pug-plain-loader')
    .loader('pug-plain-loader')
  }
}
