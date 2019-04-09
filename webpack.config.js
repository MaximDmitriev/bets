const path = require('path');

module.exports = {
  mode: "development",
  watch: true,
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  }
};