const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// const {getDefaultConfig} = require('@react-native/metro-config');
// const exclusionList = require('metro-config/src/defaults/exclusionList');

// module.exports = {
//   resolver: {
//     blacklistRE: exclusionList([
//       /node_modules\/.*\/node_modules\/react-native\/.*/,
//       /\.git\/.*/,
//       /.*\/__tests__\/.*/,
//     ]),
//   },
//   watchFolders: [__dirname],
//   server: {
//     enhanceMiddleware: (middleware) => (req, res, next) => {
//       res.setHeader('Access-Control-Allow-Origin', '*');
//       middleware(req, res, next);
//     },
//   },
//   maxWorkers: 2, // Reduce concurrent workers
// };
