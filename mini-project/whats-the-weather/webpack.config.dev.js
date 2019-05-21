const path = require('path');

module.exports = (env, options) => {
  const config = {
    mode: 'development',
    entry: {
      app: ['./src/index.js']
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  }

  if (options.mode === "development") {
    // Development 설정
  } else {
    // Production 설정
  }
  return config;
}