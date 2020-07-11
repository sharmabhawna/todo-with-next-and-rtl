module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: { '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest' },
  transformIgnorePatterns: ['/node_modules/'],
  testRegex: '/__tests__/.*\\.(test|spec)\\.js?$',
  moduleNameMapper: {
    'styled-components': '<rootDir>/node_modules/styled-components'
  },
}