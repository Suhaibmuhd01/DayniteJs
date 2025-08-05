export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'json'],
  transformIgnorePatterns: [
    '/node_modules/(?!(YOUR_ESM_DEPENDENCIES_HERE)/)'
  ]
};