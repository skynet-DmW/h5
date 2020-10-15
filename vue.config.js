const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const timestamp = new Date().getTime()

module.exports = {
  devServer: {
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    host: 'localhost',
    port: 9999, // 端口号
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器
    hotOnly: false // 热更新
  },
  configureWebpack: {
    output: {
      filename: `js/[name].${timestamp}.js`, // 每次构建打包时给文件名加上时间戳，确保每次版本更新的文件名不一样
      chunkFilename: `js/[name].${timestamp}.js`
    }
  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))

    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-dev.js')

      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js')

      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios'
      })

      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })
  }
}
