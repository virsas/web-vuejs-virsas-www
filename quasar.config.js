/* eslint-env node */
const ESLintPlugin = require("eslint-webpack-plugin");
const { configure } = require("quasar/wrappers");

module.exports = configure(function (ctx) {
  return {
    supportTS: false,
    boot: ["i18n", "axios"],
    css: ["app.scss"],
    extras: ["roboto-font", "material-icons"],

    build: {
      env: ctx.dev
        ? require("dotenv").config().parsed
        : {
            VUE_WEB_NAME: process.env.VUE_WEB_NAME,
            VUE_WEB_TITLE: process.env.VUE_WEB_TITLE,
            VUE_WEB_DESCRIPTION: process.env.VUE_WEB_DESCRIPTION,
            VUE_WEB_URL: process.env.VUE_WEB_URL,
            VUE_WEB_ASSETS: process.env.VUE_WEB_ASSETS,
            VUE_VSSAUTH_APP: process.env.VUE_VSSAUTH_APP,
            VUE_VSSAUTH_API: process.env.VUE_VSSAUTH_API,
          },
      vueRouterMode: "history",
      gzip: true,
      transpile: true,
      transpileDependencies: ["@virsas/vue-helpers"],

      chainWebpack(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js", "vue"] }]);
      },
    },

    devServer: {
      server: {
        type: "http",
      },
      port: process.env.VUE_WEB_PORT,
      open: true,
    },

    framework: {
      iconSet: "material-icons",
      lang: "en-US",
      components: [
        "QLayout",
        "QPageContainer",
        "QPage",
        "QHeader",
        "QDrawer",
        "QToolbar",
        "QBtn",
        "QBtnDropdown",
        "QList",
        "QItem",
        "QItemSection",
        "QItemLabel",
        "QInput",
        "QIcon",
        "QScrollArea",
        "QTable",
        "QTh",
        "QTr",
        "QTd",
        "QSelect",
        "QDialog",
        "QCard",
        "QCardSection",
        "QCardActions",
        "QAvatar",
        "QMenu",
        "QSeparator",
        "QTooltip",
        "QCheckbox",
        "QImg",
        "QTabs",
        "QTab",
        "QRouteTab",
        "QSpace",
        "QInnerLoading",
        "QSpinner",
        "QSpinnerPie",
        "QDate",
        "QTime",
        "QPopupEdit",
        "QPopupProxy",
        "QBreadcrumbs",
        "QBreadcrumbsEl",
        "QBadge",
        "QScrollArea",
        "QPagination",
        "QChatMessage",
        "QUploader",
        "QToggle",
        "QBar",
        "QInfiniteScroll",
      ],

      directives: ["ClosePopup", "Ripple"],
      plugins: ["Notify", "Cookies", "Loading", "Meta"],
      config: {
        dark: "auto",
      },
    },

    animations: [],
    ssr: {
      pwa: false,
      prodPort: process.env.VUE_WEB_PORT,
      maxAge: 1000 * 60 * 60 * 24 * 30,
      chainWebpackWebserver(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js"] }]);
      },

      middlewares: [ctx.prod ? "compression" : "", "render"],
    },

    pwa: {
      workboxPluginMode: "GenerateSW",
      workboxOptions: {},
      chainWebpackCustomSW(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js"] }]);
      },

      manifest: {
        name: process.env.VUE_WEB_TITLE,
        short_name: process.env.VUE_WEB_NAME,
        description: process.env.VUE_WEB_DESCRIPTION,
        display: "standalone",
        orientation: "portrait",
        background_color: "#ffffff",
        theme_color: process.env.VUE_WEB_COLOR,
      },
    },

    cordova: {},
    capacitor: {
      hideSplashscreen: true,
    },
    electron: {
      bundler: "packager",
      packager: {},
      builder: {
        appId: process.env.VUE_WEB_NAME,
      },
      chainWebpackMain(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js"] }]);
      },
      chainWebpackPreload(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js"] }]);
      },
    },
  };
});
