// 拼接路径
const resolve = dir => require('path').join(__dirname, dir)

// 增加环境变量
process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_BUILD_TIME = require('dayjs')().format('YYYY-M-D HH:mm:ss')

// 基础路径 注意发布之前要先修改这里
let publicPath = './'

module.exports = {
  publicPath, // 根据你的实际情况更改这里
  lintOnSave: true,
  devServer: {
    // publicPath // 和 publicPath 保持一致
    proxy: {
      '/api': {
        target: 'http://gues.eclass.cn/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
  chainWebpack: config => {
    /**
     * 删除懒加载模块的 prefetch preload，降低带宽压力
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
     * 而且预渲染时生成的 prefetch 标签是 modern 版本的，低版本浏览器是不需要的
     */
    config.plugins
      .delete('prefetch')
      .delete('preload')
    // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
    config.resolve
      .symlinks(true)
    config
      // 开发环境
      .when(process.env.NODE_ENV === 'development',
        // sourcemap不包含列信息
        config => config.devtool('cheap-source-map')
      )
      // 非开发环境
      // .when(process.env.NODE_ENV !== 'development', common => {
      //   common.optimization
      //     .minimizer([
      //       new UglifyJsPlugin({
      //         uglifyOptions: {
      //           // 移除 console
      //           // 其它优化选项 https://segmentfault.com/a/1190000010874406
      //           compress: {
      //             warnings: false,
      //             drop_console: true,
      //             drop_debugger: true,
      //             pure_funcs: ['console.log']
      //           }
      //         }
      //       })
      //     ])
      // })
    // 重新设置 alias
    config.resolve.alias
      .set('@api', resolve('src/api'))
    // node
    config.node
      .set('__dirname', true)
      .set('__filename', true)
  }
}
