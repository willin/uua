const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname),
  preset: 'ts-jest',
  verbose: true,
  coverageReporters: ['text', 'lcov', 'html'],
  moduleNameMapper: {
    '^@uua/(.*)$': '<rootDir>/packages/@uua/$1/src/$1.ts'
  },
  testURL: 'https://uua.js.cool',
  testMatch: ['**/__tests__/**/*.(spec|test).[jt]s?(x)'],
  coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/']
};
