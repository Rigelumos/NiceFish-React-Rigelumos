var pkg = require("./package.json");
var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const copyWebPackPlugin = require("copy-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.tsx"),
    // 将 第三方依赖(node_modules中的) 单独打包
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: __dirname + "/docs",
    filename: "[name].[chunkhash:8].js"
  },

  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts",'.png']
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader:'url-loader',
            options:{
              limit:10000
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      },
      {
        test: /\.(woff|woff2|tff|eot|ttf)()/i,
        use: [
          {
            loader:'url-loader',
            options:{
              limit:10000
            }
          }
        ]
      },
      {
        test: /\.scss|css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin("Copyright By yanyunchangfeng"),
    new CleanWebpackPlugin(["docs"]),
    // html 模板插件
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html",
      favicon:'./src/assets/images/nice-fish.png'
    }),
    // new copyWebPackPlugin([
    //   {from :'src/assets',to:'assets/',toType:'dir'}
    // ]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
