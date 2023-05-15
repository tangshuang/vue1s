/**
 * @todo Add tests for browser `@plugin`
 */
import AbstractPluginLoader from '../core/environment/abstract-plugin-loader.js';

/**
 * Browser Plugin Loader
 */
const PluginLoader = function(less) {
    this.less = less;
    // Should we shim this.require for browser? Probably not?
};

PluginLoader.prototype = Object.assign(new AbstractPluginLoader(), {
    loadPluginSync(filename, basePath, context, environment, fileManager) {
        const result = fileManager.loadFileSync(filename, basePath, context, environment);
        return result;
    }
});

export default PluginLoader;
