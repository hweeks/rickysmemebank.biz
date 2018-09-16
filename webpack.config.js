module.exports = {
  entry: "./src/index.js",
  mode: process.env.NODE_ENV,
  output: {
    path: `${__dirname}/static`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
       {
        test: /\.js?$/,
        include: [
          `${__dirname}/src`
        ],
        loader: "babel-loader",
      },
    ]
  },
  serve: {
    port: 1337,
    content: `${__dirname}/static`,
    dev: {
      publicPath: `/static/`,
    },
  }
}
