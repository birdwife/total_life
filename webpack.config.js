const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),  // Polyfill for 'stream'
      // You can add other polyfills here if necessary (e.g., for 'zlib', 'crypto', etc.)
    },
  },
  // other Webpack config options...
};