import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/core.ts',
    output: [
      {
        dir: 'dist',
        format: 'es'
      }
    ],
    plugins: [typescript({ declaration: true, declarationDir: 'dist' })]
  },
  {
    input: 'src/core.ts',
    output: [
      {
        file: 'dist/core.cjs.js',
        format: 'cjs'
      },
      {
        file: 'dist/core.browser.js',
        format: 'iife',
        name: 'uua'
      }
    ],
    plugins: [typescript()]
  }
];
