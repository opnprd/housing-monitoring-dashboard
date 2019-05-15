import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss'
import copyTo from 'rollup-plugin-copy-assets-to';
import copy from 'rollup-plugin-copy';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';

export default [
  {
    input: 'src/dashboard.js',
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
      globals(),
      builtins(),
      babel({ exclude: 'node_modules/**' }),
      scss({
        output: 'dist/dashboard.css',
      }),
      copy({
        targets: [
          'node_modules/react/umd/react.development.js',
          'node_modules/react-dom/umd/react-dom.development.js',
          'node_modules/leaflet/dist/leaflet.js',
          'node_modules/leaflet-providers/leaflet-providers.js',
        ],
        outputFolder: 'dist/js/vendor',
      }),
      copyTo({
        assets: [
          './src/index.html',
        ],
        outputDir: 'dist',
      }),
    ],
    external: ['react', 'react-dom', 'leaflet-providers'],
  }, {
    input: 'src/report.js',
    output: {
      name: 'Report',
      format: 'iife',
      dir: 'dist',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
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
      globals(),
      builtins(),
      babel({ exclude: 'node_modules/**' }),
      copyTo({
        assets: [
          './src/report.html',
        ],
        outputDir: 'dist',
      }),
    ],
    external: ['react', 'react-dom'],
  },
];
