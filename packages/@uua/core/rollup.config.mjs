export default [
  {
    input: 'lib/core.js',
    output: {
      file: 'dist/core.cjs.js',
      format: 'cjs'
    }
  },
  {
    input: 'lib/core.js',
    output: {
      file: 'dist/core.iife.js',
      format: 'iife',
      name: 'uua'
    }
  },
  {
    input: 'lib/core.js',
    output: {
      file: 'dist/core.es.js',
      format: 'es'
    }
  }
];
