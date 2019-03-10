const path = require("path");
// html模板
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 抽离css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 清除dist文件的插件
const CleanWebpackPlugin = require("clean-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  // entry: "./src/index.js",
  entry: {
    // app: ["@babel/polyfill", "./src/index.js"],
    // hello: ["@babel/polyfill", "./src/hello.js"]
    app: ["./src/index.js"],
    hello: ["./src/hello.js"]
  },
  // devtool 为false则output的文件就没有eval
  devtool: false,
  output: {
    path: path.resolve(__dirname, "dist"),
    // 多个文件  是根据那个entry的key
    filename: "[name]-[hash].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            // 预设 debug 为 true就打印依赖
            // presets: [["@babel/preset-env", { debug: false }]],
            // class
            // plugins: [
            //   [
            //     "@babel/plugin-proposal-decorators",
            //     {
            //       legacy: true
            //     }
            //   ]
            // ]
            // 箭头函数
            // plugins: ["@babel/plugin-transform-arrow-functions"]
            // class
            // plugins: [
            //   [
            //     "@babel/plugin-proposal-decorators",
            //     {
            //       legacy: true
            //     }
            //   ]
            // ]
          }
        }
      },
      {
        test: /\.css$/,
        // 先用cssloader转换 再用styleloader注入style
        use: [
          // "style-loader" //之前使用的css的loader
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          // {
          //   loader: "style-loader" // creates style nodes from JS strings
          // },
          // {
          //   loader: "css-loader" // translates CSS into CommonJS
          // },
          // {
          //   loader: "less-loader" // compiles Less to CSS
          // }
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader", // translates CSS into CommonJS
          "less-loader" // compiles Less to CSS
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          // "style-loader", // creates style nodes from JS strings
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      filename: "index.html",
      template: "./public/index.html",
      hash: true,
      chunks: ["app"]
    }),
    new HtmlWebpackPlugin({
      title: "My Index",
      filename: "admin.html",
      template: "./public/index.html",
      hash: true,
      chunks: ["hello"]
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? "[name].css" : "[name].[hash].css",
      // chunkFilename: "[id].css"
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};
