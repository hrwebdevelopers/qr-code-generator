import commonjs from '@rollup/plugin-commonjs';

export default {
  input: '/main.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [commonjs({
    // non-CommonJS modules will be ignored, but you can also
    // specifically include/exclude files
    include: '/node_modules/',  // Default: undefined
    // exclude: ['node_modules/foo/**', 'node_modules/bar/**'],  // Default: undefined
    // these values can also be regular expressions
    // include: /node_modules/

    // search for files other than .js files (must already
    // be transpiled by a previous plugin!)
    extensions: ['.js'],  // Default: [ '.js' ]

    // if true then uses of `global` won't be dealt with by this plugin
    ignoreGlobal: false,  // Default: false

    // if false then skip sourceMap generation for CommonJS modules
    // sourceMap: false,  // Default: true

    // explicitly specify unresolvable named exports
    // (see below for more details)
    namedExports: { 'qrcodejs': ['qrcodejs'] },  // Default: undefined

    // sometimes you have to leave require statements
    // unconverted. Pass an array containing the IDs
    // or a `id => boolean` function. Only use this
    // option if you know what you're doing!
    ignore: ['conditional-runtime-dependency']
  })]
};