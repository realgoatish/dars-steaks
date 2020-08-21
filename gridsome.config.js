// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: `Dar's Steaks`,
  siteDescription: `Serving the World's Best Cheesesteaks in Haddon Township, NJ`,
  plugins: [],
  icon: './uploads/dars-steaks-serif.png',
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
  }
}
