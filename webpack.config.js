const path = require("path");
module.exports = {
  // entry: "./src/index.js",
  entry: {
    app: "./src/index.js",
    hello: "./src/hello.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // 多个文件  是根据那个entry的key
    filename: "[name].bundle.js"
  },
  mode: "development"
};
