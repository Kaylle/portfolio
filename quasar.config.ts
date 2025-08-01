import { defineConfig } from '#q-app/wrappers';
import { fileURLToPath } from 'node:url';

export default defineConfig((ctx) => {
  return {
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
        browser: [ 'es2022', 'firefox115', 'chrome115', 'safari14' ],
        node: 'node20'
      },
      typescript: {
        strict: true,
        vueShim: true
      },
      vueRouterMode: 'history',
      vitePlugins: [
        ['@intlify/unplugin-vue-i18n/vite', {
          ssr: ctx.modeName === 'ssr',
          include: [ fileURLToPath(new URL('./src/i18n', import.meta.url)) ]
        }],
        ['vite-plugin-checker', {
          vueTsc: true,
          eslint: {
            lintCommand: 'eslint -c ./eslint.config.js "./src*/**/*.{ts,js,mjs,cjs,vue}"',
            useFlatConfig: true
          }
        }, { server: false }]
      ]
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
      prodPort: 3000,
      middlewares: [
        'render'
      ],
      pwa: false
    },
    pwa: {
      workboxMode: 'GenerateSW'
    },
    cordova: {},
    capacitor: {
      hideSplashscreen: true
    },
    electron: {
      preloadScripts: [ 'electron-preload' ],
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: {
        appId: 'portfolio'
      }
    },
    bex: {
      extraScripts: []
    }
  }
});
