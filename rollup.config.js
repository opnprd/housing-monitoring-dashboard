import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss'
import copyTo from 'rollup-plugin-copy-assets-to';

export default {
  input: ['src/dashboard.js'],
  output: {
    name: 'Dashboard',
    format: 'iife',
    dir: 'dist',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'leaflet-providers': 'L',
    }
  },
  watch: {
    include: [ 'src/**', 'rollup.config.js', 'package.json' ],
  },
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    scss({
      output: 'dist/dashboard.css',
    }),
    copyTo({
      assets: [
        './src/index.html',
      ],
      outputDir: 'dist',
    }),
  ],
  external: ['react', 'react-dom', 'leaflet-providers'],
};
