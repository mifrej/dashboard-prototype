module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-prettier/recommended"
  ],
  processors: [
    [
      "@mapbox/stylelint-processor-arbitrary-tags",
      {
        "startTag": "\\s*<style jsx>{`",
        "endTag": "\\s*`}<\/style>"
      }
    ]
  ],
  plugins: [
    "stylelint-order",
    "stylelint-prettier","stylelint-value-no-unknown-custom-properties"
  ],
  rules: {
    "prettier/prettier": true,
    "unit-whitelist": ["em", "deg", "rem", "%"]
  }
}
