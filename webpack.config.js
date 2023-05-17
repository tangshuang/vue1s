const { DefinePlugin } = require('webpack')

module.exports = [
    // esm
    {
        mode: 'none',
        entry: __dirname + '/src/index.js',
        module: {
            unknownContextCritical : false,
        },
        experiments: {
            outputModule: true,
        },
        output: {
            path: __dirname + '/dist',
            filename: 'index.js',
            library: {
                type: "module",
            },
            chunkFormat: 'module',
        },
        plugins: [
            new DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            })
        ],
    },
    // esm压缩
    {
        mode: 'production',
        entry: __dirname + '/src/index.js',
        module: {
            unknownContextCritical : false,
        },
        experiments: {
            outputModule: true,
        },
        output: {
            path: __dirname + '/dist',
            filename: 'index.min.js',
            library: {
                type: "module",
            },
            chunkFormat: 'module',
        },
        plugins: [
            new DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            })
        ],
    },
    // 挂载到window上
    {
        mode: process.env.NODE_ENV === 'production' ? 'production' : 'none',
        entry: __dirname + '/src/index.js',
        output: {
            path: __dirname + '/dist',
            filename: 'browser.js',
            library: {
                name: 'vue1s',
                type: 'window',
            },
        },
        plugins: [
            new DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            })
        ],
    },
]
