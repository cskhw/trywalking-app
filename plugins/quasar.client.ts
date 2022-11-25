import * as components from "quasar";
import { QuasarPluginOptions } from "quasar";
import mdi from "quasar/icon-set/svg-mdi-v6";

export default defineNuxtPlugin(({ vueApp }) => {
  const quasarPluginOptions: QuasarPluginOptions = {
    autoImportComponentCase: "pascal", // or 'kebab' (default) or 'combined',
    components: components,
    iconSet: mdi,
    plugins: {},
  };
  vueApp.use(components.Quasar, quasarPluginOptions);
});
