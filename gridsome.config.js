// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: `Dar's Steaks`,
  siteDescription: `Serving the World's Best Cheesesteaks in Haddon Township, NJ`,
  permalinks: {
    trailingSlash: true
  },
  icon: './uploads/dars-steaks-serif.png',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'markdowns/menu/**/*.md',
        typeName: 'MenuContent',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
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
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
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
