
var path = require('path');
var webpack = require('webpack');
var js_dist = path.join(__dirname, './dist');

module.exports = {
  name: 'chartComponent',
  entry: {
    line: './line.jsx',
    bar: './barChart.jsx',
    pie: './pieChart.jsx'
  },
  output: {
    path: js_dist,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx$/],
        loaders: ["babel-loader"],
      }
    ],
  },
  watch: true,
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx']
  }
};
