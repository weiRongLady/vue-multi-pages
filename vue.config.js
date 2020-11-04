const path = require('path')
const fs = require('fs')
module.exports = {
  configureWebpack: {
    'resolve': {
      extensions: ['.js', '.vue', '.json', '.less'],
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
    demo: {
      entry: 'src/pages/demo/main.js',
      template: 'public/demo.html',
      filename: 'demo.html',
    },
    demo2: {
      entry: 'src/pages/demo2/main.js',
      template: 'src/pages/demo2/demo2.html',
      filename: 'demo2.html',
    },
  },
  devServer: {
    disableHostCheck: true, // 解决 图片403 forbidden
  }
}