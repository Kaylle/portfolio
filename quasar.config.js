/* eslint-env node */

const { configure } = require('quasar/wrappers');

module.exports = configure(function (/* ctx */) {
  return {
    eslint: {
      warnings: true,
      errors: true
    },
    boot: [
      'i18n'
    ],
    css: [
      'app.scss'
    ],
    extras: [
      'eva-icons'
    ],
    build: {
      target: {
        browser: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
        node: 'node16'
      },
      vueRouterMode: 'history',
    },
    devServer: {
      open: true
    },
    framework: {
      config: {},
      lang: 'ru',
      plugins: [
        "Notify",
        "Meta"
      ]
    },
    animations: [],
    ssr: {
      pwa: false,
      prodPort: 3000,
      middlewares: [
        'render'
      ]
    },
    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false
    },
    cordova: {},
    capacitor: {
      hideSplashscreen: true
    },
    electron: {
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: {
        appId: 'portfolio'
      }
    },
    bex: {
      contentScripts: [
        'my-content-script'
      ]
    }
  }
});
