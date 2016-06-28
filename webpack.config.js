const HtmlPlugin = require('html-webpack-plugin');
const Autoprefixer = require('autoprefixer-stylus');
const Path = require('path');
const include   = [Path.resolve(process.cwd(), 'src')];
const bsInclude = [Path.resolve(process.cwd(), './node_modules/bootstrap/dist')];
const config = {
  entry: {
    app: ['babel-polyfill', './src/main']
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      include,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.jade$/,
      include,
      loader: 'jade'
    }, {
      test: /\.styl/,
      include,
      loader: 'style!css!stylus'
    }, {
      test: /\.css/,
      include: bsInclude,
      loader: 'style!css'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      include: bsInclude,
      loader: 'file-loader'
    }, {
      test: /\.(woff|woff2)$/,
      include: bsInclude,
      loader:'url-loader?prefix=font/&limit=8192'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      include: bsInclude,
      loader: 'url-loader?limit=8192&mimetype=application/octet-stream'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      include: bsInclude,
      loader: 'url-loader?limit=8192&mimetype=image/svg+xml'
    }]
  },
  plugins: [
    new HtmlPlugin({
      template: './src/index.jade'
    })
  ],
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules']
  },
  stylus: {
    use: [Autoprefixer({
      browsers: 'last 2 versions'
    })]
  }
};

module.exports = config;
