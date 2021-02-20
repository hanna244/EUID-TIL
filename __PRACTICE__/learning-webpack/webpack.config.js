// Node.js API → built-in module
const path = require('path')

// dist 디렉토리 참조 변수 (절대 경로)
const distDir = path.resolve(__dirname, 'dist')

// Webpack 구성 파일(export webpack configure module)
// Webpack에 나 이렇게 작업할 거라고 알려주는 것!
module.exports = {
  entry: './src/index.js',
  output: {
    path: distDir,
    filename: 'assets/js/main.js',
  },
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
}