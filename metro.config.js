const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("node:path"); // <-- Import path

// Get the default configuration
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

// --- Add the cache fix ---
// This tells Metro to use a local cache folder you have permission for
config.cacheStores = [
	new (require("metro-cache").FileStore)({
		root: path.join(__dirname, "metro-cache"),
	}),
];
// --------------------------

// Export the config, wrapped with NativeWind
module.exports = withNativeWind(config, {
	input: "./global.css",
	inlineRem: 16,
});
