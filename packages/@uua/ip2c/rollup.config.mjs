import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/ip2c.ts',
    output: [
      {
        dir: 'dist',
        format: 'es'
      }
    ],
    plugins: [typescript({ declaration: true, declarationDir: 'dist' })]
  },
  {
    input: 'src/ip2c.ts',
    output: [
      {
        file: 'dist/ip2c.cjs.js',
        format: 'cjs'
      },
      {
        file: 'dist/ip2c.browser.js',
        format: 'iife',
        name: 'uua'
      }
    ],
    plugins: [typescript()]
  }
];
