/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path');

module.exports = {
  clearMocks: true,
  displayName: 'App-Orçamento',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: [join(__dirname, '**/*.test.{ts,tsx}')],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.((jpg|jpeg|png|gif)|svg)$':
      '<rootDir>/node_modules/jest-transform-stub',
  },
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
    '\\.(css)$': '<rootDir>/src/test/genericMock.ts',
  },
  setupFilesAfterEnv: [join(__dirname, '/src/test/config/jest.setup.ts')],
  snapshotResolver: join(__dirname, '/src/test/config/snapshotResolver.ts'),
  testEnvironment: 'jsdom',
};
