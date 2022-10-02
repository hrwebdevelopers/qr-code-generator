import commonjs from '@rollup/plugin-commonjs';

export default {
  input: '/main.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [commonjs()]
};
