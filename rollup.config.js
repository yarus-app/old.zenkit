import { promises as fs } from 'fs';
import path from 'path';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import copyAssets from 'rollup-plugin-copy-imported-assets';

const extensions = ['.js', '.jsx', '.mjs'];

export default async commandLineArgs => {
  const isDev = commandLineArgs.watch;
   // const isDev = true;

  const ROOT_PATH = process.cwd();

  const PKG_PATH = ROOT_PATH + '/package.json';

  const LIB_PATH = 'lib';

  const PUBLIC_PATH = 'public';

  const pkg = await import(PKG_PATH);

  const title = pkg.name.replace(/[@/]/g, '-').split('-').filter(Boolean).join('-').toLowerCase();

  const name = title.split('-').map(item =>  item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join('');

  const newPkg = JSON.stringify({
    ...pkg.default,
    version: pkg.default.version || '1.0.0',
    main: path.join(LIB_PATH, title + '.js'),
    module: path.join(LIB_PATH, title + '.esm.js'),
    'modules.root': LIB_PATH,
    files: ['lib'],
    browser: undefined,
    unpkg: undefined,
    default: undefined
  }, null, 2);

  if (newPkg !== JSON.stringify(pkg.default, null, 2)) {
    await fs.writeFile(PKG_PATH, newPkg);
  }

  const config = {
    input: {
      [title]: 'src/index.js',
    },
    output: [{
      name,
      dir: LIB_PATH,
      format: 'cjs',
      entryFileNames: '[name].js',
      chunkFileNames: '[name].[hash].js',
      assetFileNames: './../' + PUBLIC_PATH + '/' + '[name].[hash][extname]',
      compact: !isDev,
      esModule: true,
      exports: 'named'
    }, {
      name,
      dir: LIB_PATH,
      format: 'esm',
      entryFileNames: '[name].[format].js',
      chunkFileNames: '[name].[hash].[format].js',
      assetFileNames: './../' + PUBLIC_PATH + '/' + '[name].[hash][extname]',
      compact: !isDev,
      esModule: true,
      exports: 'named'
    }],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
      globals(),
      builtins(),
      resolve({
        extensions,
        browser: true,
        modulesOnly: true
      }),
      commonjs({ include: /node_modules/ }),
      json(),
      copyAssets({ include: /\.(svg|png|jpe?g|webp)/, keepEmptyImports: true }),
      babel({
        runtimeHelpers: true,
        presets: [
          ['@babel/preset-env', {
            modules: false,
            useBuiltIns: 'usage',
            loose: true,
            corejs: 3,
            exclude: [
              'transform-async-to-generator',
              'transform-template-literals',
              'transform-regenerator'
            ]
          }],
          '@babel/preset-react'
        ],
        plugins: [
           ['@babel/plugin-transform-runtime', {
              corejs: 3,
              absoluteRuntime: false,
              regenerator: false
           }],

            // Stage 0
           '@babel/plugin-proposal-function-bind',

            // Stage 1
           '@babel/plugin-proposal-export-default-from',
           '@babel/plugin-proposal-logical-assignment-operators',
           ['@babel/plugin-proposal-optional-chaining', { loose: false }],
           ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
           ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
           '@babel/plugin-proposal-do-expressions',

            // Stage 2
           ['@babel/plugin-proposal-decorators', { legacy: true }],
           '@babel/plugin-proposal-function-sent',
           '@babel/plugin-proposal-export-namespace-from',
           '@babel/plugin-proposal-numeric-separator',
           '@babel/plugin-proposal-throw-expressions',

            // Stage 3
           '@babel/plugin-syntax-dynamic-import',
           '@babel/plugin-syntax-import-meta',
           ['@babel/plugin-proposal-class-properties', { loose: true }],
           '@babel/plugin-proposal-json-strings',

           ['@babel/plugin-transform-template-literals', { loose: true, spec: true }],
           '@babel/plugin-transform-property-mutators',
           '@babel/plugin-transform-member-expression-literals',
           '@babel/plugin-transform-property-literals',
           ['@babel/plugin-proposal-object-rest-spread', {
             useBuiltIns: true
           }],

          'babel-plugin-macros'
        ],
        extensions,
        exclude: /node_modules/,
        sourceMaps: true
      }),
     !isDev && terser()
    ],
    preserveModules: true,
    preserveSymlinks: true,
    shimMissingExports: true
  }

  return config;
}
