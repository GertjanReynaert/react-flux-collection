module.exports = {
  entry: "./app/manifest.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/assets/"
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' }
    ]
  }
};
