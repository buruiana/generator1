export const webpackconfigjs = `
// http://webpack.github.io/docs/configuration.html
// http://webpack.github.io/docs/webpack-dev-server.html
var app_root = 'src'; // the app root folder: src, src_users, etc
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  app_root: app_root, // the app root folder, needed by the other webpack configs
  entry: [
    // http://gaearon.github.io/react-hot-loader/getstarted/
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    __dirname + '/' + app_root + '/index.js',
  ],
  output: {
    path: __dirname + '/public/js',
    publicPath: 'js/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
      },
      {
        // https://github.com/jtangelder/sass-loader
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      { test: /\.json$/, loader: "json-loader" }
    ],
  },
  devServer: {
    contentBase: __dirname + '/public',
  },
  plugins: [
    new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
      root: __dirname + '/public',
      verbose: true,
      dry: false, // true for simulation
    }),
  ],
};
`;

export const packagejson = `
{
  "name": "redux-minimal",
  "version": "1.0.0",
  "description": "Start building complex react-redux apps today, with this minimalist easy to understand starter kit (boilerplate)",
  "keywords": [
    "react",
    "redux",
    "minimal",
    "starter kit",
    "boilerplate"
  ],
  "main": "index.js",
  "homepage": "http://redux-minimal.js.org/",
  "repository": {
    "type": "git",
    "url": "https://github.com/catalin-luntraru/redux-minimal"
  },
  "scripts": {
    "start": "webpack-dev-server --inline --hot --history-api-fallback --host localhost --port 8080",
    "build-dev": "webpack --config webpack.dev.config.js",
    "build-prod": "webpack -p --config webpack.prod.config.js",
    "test": "mocha --recursive --compilers js:babel-register --require babel-polyfill --require ignore-styles",
    "test-watch": "npm test -- --watch"
  },
  "babel": {
    "presets": [
      "es2015",
      "react",
      "stage-3"
    ]
  },
  "author": "Catalin Luntraru",
  "license": "MIT",
  "dependencies": {
    "brace": "^0.11.1",
    "ejs": "^2.6.1",
    "file-system": "^2.2.2",
    "firebase": "^5.4.2",
    "json-loader": "^0.5.7",
    "lodash": "^4.17.11",
    "mustache": "^3.0.0",
    "react": "^15.4.2",
    "react-ace": "^6.1.4",
    "react-bootstrap": "^0.32.4",
    "react-dom": "^15.4.2",
    "react-jsonschema-form": "^1.0.4",
    "react-redux": "^5.0.2",
    "react-router": "^3.0.1",
    "react-router-bootstrap": "^0.23.1",
    "react-router-redux": "^4.0.7",
    "react-sortable-tree": "^2.2.0",
    "react-sortable-tree-theme-file-explorer": "^2.0.0",
    "redux": "^3.6.0",
    "redux-saga": "^0.14.3",
    "redux-saga-firebase": "^0.14.1"
  },
  "devDependencies": {
    "babel-core": "^6.21.0",
    "babel-loader": "^6.2.10",
    "babel-polyfill": "^6.20.0",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-react": "^6.16.0",
    "babel-preset-stage-3": "^6.17.0",
    "babel-runtime": "^6.20.0",
    "clean-webpack-plugin": "^0.1.15",
    "css-loader": "^0.26.1",
    "enzyme": "^2.7.0",
    "extract-text-webpack-plugin": "^1.0.1",
    "ignore-styles": "^5.0.1",
    "mocha": "^3.2.0",
    "node-sass": "^4.3.0",
    "react-addons-test-utils": "^15.4.2",
    "react-hot-loader": "^1.3.1",
    "redux-freeze": "^0.1.5",
    "sass-loader": "^4.1.1",
    "style-loader": "^0.13.1",
    "webpack": "^1.14.0",
    "webpack-dev-server": "^1.16.2",
    "whatwg-fetch": "^2.0.1"
  }
}
`;