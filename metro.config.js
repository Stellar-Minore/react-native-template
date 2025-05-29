const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const customConfig = {
    transformer: {
      babelTransformerPath: require.resolve('./customTransformer.js'),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'  && ext !== 'scss'),
          sourceExts: [...sourceExts, 'css', 'svg', 'scss', 'sass', 'cjs', 'json'],
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), customConfig);
