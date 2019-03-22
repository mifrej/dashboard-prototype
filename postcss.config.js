module.exports = {
  plugins: {
    "postcss-easy-import": {},
    "postcss-preset-env": {
      browsers: ['last 2 versions', 'ie >= 11'],
      importFrom: "components/theme/postcss-imports.css",
      stage: 0,
    },
    "postcss-spiffing": {},
    "postcss-reporter": { clearReportedMessages: true }
  },
}
