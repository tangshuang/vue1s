//
// index.js
// Should expose the additional browser functions on to the less object
//
import lessRoot from '../core/index.js';
import FM from './file-manager.js';
import PluginLoader from './plugin-loader.js';
import LogListener from './log-listener.js';
import ImageSize from './image-size.js';

export default (options) => {
    const less = lessRoot();

    less.options = options;
    const environment = less.environment;
    const FileManager = FM(options, less.logger);
    const fileManager = new FileManager();
    environment.addFileManager(fileManager);
    less.FileManager = FileManager;
    less.PluginLoader = PluginLoader;

    LogListener(less, options);
    ImageSize(less.environment);

    // Setup user functions - Deprecate?
    if (options.functions) {
        less.functions.functionRegistry.addMultiple(options.functions);
    }

    return less;
};
