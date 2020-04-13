module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './dist/**/*.html',
    './dist/assets/js/*.js',
    './dist/assets/fonts/*'
  ],
  css: ['./dist/assets/css/*.css'],
  rejected: true,
  fontFace: true,
  variables: true,
  whitelistPatterns: [/.mdi.*/],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
}
