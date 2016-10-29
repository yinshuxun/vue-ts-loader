module.exports = {
    entry: {
        a: './a.ts',
        b: './b.ts'
    },
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            // this will fail if both files are passed through the same instance
            { test: /a\.ts$/, loader: '../../dist/index.js' },
            { test: /b\.ts$/, loader: '../../dist/index.js?instance=different' }
        ]
    }
}
