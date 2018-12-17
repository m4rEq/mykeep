//var webpack = require('webpack')

const path = require('path')

module.exports = {
  mode: "development",
    entry: {
      app: ["./client/main.js"]
    },
  output: {
    //path: __dirname + '/public/build/',
    path: path.resolve(__dirname, 'public/build/'),
    //publicPath: "build/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      }
    ]
  }
}

/*
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.jsx$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!autoprefixer-loader!less",
                exluce: [/node_modules/, /public/]
            }
        ]
    }
}
*/