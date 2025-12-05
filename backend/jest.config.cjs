module.exports = {
  testEnvironment: 'node',
  transform: {},
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testTimeout: 10000,
  testMatch: ['<rootDir>/tests/unit/**/*.test.mjs', '<rootDir>/tests/**/*.test.mjs'],
  moduleFileExtensions: ['mjs', 'js', 'json', 'node'],
  verbose: true,
};