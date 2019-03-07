const path = require("path");
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
    filename: "[name].bundle.js"
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
      }
    ]
  },
  mode: "development"
};
