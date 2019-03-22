const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');

module.exports = withTypescript(
  withCSS(
    {
      webpack: config => {
        config.plugins = config.plugins || []

        config.plugins = [
          ...config.plugins,

          // new Dotenv({
          //   path: path.join(__dirname, '.env'),
          //   systemvars: true,
          // })
        ]
        return config
      }
    }
  )
);
