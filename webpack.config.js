const webpack = require('webpack') 	// 用于访问内置插件
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackPromptPlugin = require('@dw/webpack-prompt-plugin')
// const nodeExternals = require('webpack-node-externals');
const importType = 'umd'
const extractSass = new ExtractTextPlugin({
  filename: 'css/[name]-[hash].css',
  disable: process.env.NODE_ENV === 'development'
})

const resolve = function (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  entry: {
    // 这里只是编译的时候用的
    index: './src/index.ts'
    // index: './lib/index.js'
    // index: './src/lib/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'mUtils'),
    publicPath: '',
    filename: 'mUtils.js',
    libraryTarget: importType,
    // libraryTarget: 'var',
    library: 'mjsutils',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader'
            }
          ]
        })
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader']
        })
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'ts-loader',
            options: {
              // 加快编译速度
              transpileOnly: true,
              // 指定特定的ts编译配置，为了区分脚本的ts配置
              configFile: path.resolve(__dirname, './tsconfig.json')
            }
          }
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    extractSass,
    new CleanWebpackPlugin({
    	verbose: false
    }),
    new WebpackPromptPlugin()
  ],
  devServer: {
    // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过传入以下启用：
    contentBase: './',
    host: '127.0.0.1',
    // 端口号
    port: 8088,
    //当有编译器错误或警告时，在浏览器中显示全屏覆盖。默认禁用。如果您只想显示编译器错误：
    noInfo: true,
    // 配置端口号
    overlay: true,
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
  resolve: {
    alias: {
      'src': resolve('src'),
      'commonjs': resolve('src/commonjs'),
      'scss': resolve('src/scss'),
      'stylus': resolve('src/stylus'),
      'script': resolve('src/script'),
      'static': resolve('static'),
    },
    extensions: ['.ts', '.tsx', '.js', '.d.ts'],
    modules: ['src', 'node_modules']
  },
  // externals: [nodeExternals({
  // 	importType: importType,
  // })],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 3,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
  }
}

// 1. 修改版本号：使用 npm version <update_type> 进行修改，update_type 有三个参数
// patch：这个是补丁的意思，补丁最合适；
// minor：这个是小修小改；
// major：这个是大改咯；
// 具体咋用：
// 比如我想来个1.0.1版本，注意，是最后一位修改了增1，那么命令：npm version patch
// 比如我想来个1.1.0版本，注意，是第二位修改了增1，那么命令： npm version minor
// 比如我想来个2.0.0版本，注意，是第一位修改了增1，那么命令： npm version major
