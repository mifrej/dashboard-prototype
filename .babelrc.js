module.exports = {
  env: {
    development: {
      presets: [
        [
          "next/babel",
          {
            "styled-jsx": {
              plugins: [
                "styled-jsx-plugin-postcss",
                "styled-jsx-plugin-stylelint"
              ]
            }
          }
        ],
        "@zeit/next-typescript/babel"
      ]
    },
    production: {
      presets: [
        "next/babel",
        "@zeit/next-typescript/babel"
      ]
    },
    test: {
      presets: [
        [
          "next/babel",
          {
            "preset-env": {
              modules: "commonjs"
            }
          }
        ],
        "@zeit/next-typescript/babel"
      ]
    }
  }
}
