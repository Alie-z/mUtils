const CompressionPlugin = require('compression-webpack-plugin')
const merge = require('webpack-merge')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  publicPath: './', // 默认'/'，部署应用包时的基本 URL
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              }, {
                libraryName: 'js-utils-m',
                libraryDirectory: 'lib',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'ESNext'
          }
        })
        return options
      })
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            filename: '[path].gz[query]',
            test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
            algorithm: 'gzip',
            cache: true,
            threshold: 10240,
            minRatio: 0.8,
          }),
        ],
        // optimization: {
        //   minimizer: [
        //     new UglifyJsPlugin({
        //       uglifyOptions: {
        //         compress: {
        //           pure_funcs: ['console.log']//移除console
        //         }
        //       }
        //     })
        //   ]
        // }
      }
    }
  },

  // devServer: {
  //     proxy: {
  //         '/api': {
  //             target: 'http://test.uniqorn.pro',//设置你调用的接口域名和端口号 别忘了加http
  //             changeOrigin: true,
  //             pathRewrite: {
  //                 '^/api': ''//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
  //             }
  //         }
  //     },  // 配置多个代理
  // }
}
