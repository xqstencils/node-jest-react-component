module.exports = {
  rootDir: '../',
  testURL: 'http://localhost/',
  globals: { },
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx}'
  ],
  coverageReporters: ['html'],
  testMatch: ['<rootDir>/src/**/__tests__/*.js?(x)', '<rootDir>/src/**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/src/index.js'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/config/__init__/setupTests.js',
  coveragePathIgnorePatterns: [
    '<rootDir>/lib',
    '<rootDir>/coverage',
    '<rootDir>/node_modules'
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/__init__/fileMock.js'
  }
}
