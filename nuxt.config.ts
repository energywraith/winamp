// https://v3.nuxtjs.org/api/configuration/nuxt.config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  srcDir: "src/",
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
  ],
  alias: {
    stores: "/<srcDir>/stores",
    types: "/<srcDir>/types",
  },
  hooks: {
    "webpack:config": (configs) => {
      configs.forEach((config) => {
        const svgRule = config.module.rules.find((rule: any) =>
          rule.test.test(".svg")
        );
        svgRule.test = /\.(png|jpe?g|gif|webp)$/;
        config.module.rules.push({
          test: /\.svg$/,
          use: ["vue-loader", "vue-svg-loader"],
        });
      });
    },
  },
});
