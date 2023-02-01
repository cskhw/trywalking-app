/* eslint-disable import/order */
import "@/@fake-db/db";
import "@/@iconify/icons-bundle";
import App from "@/App.vue";
import ability from "@/plugins/casl/ability";
import i18n from "@/plugins/i18n";
import layoutsPlugin from "@/plugins/layouts";
import vuetify from "@/plugins/vuetify";
import { loadFonts } from "@/plugins/webfontloader";
import router from "@/router";
import { abilitiesPlugin } from "@casl/vue";
import "@core/scss/template/index.scss";
import { createApp } from "vue";
import api from "@/api/api";

// Create pinia and setup
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
  store.api = markRaw(api);
});

loadFonts();

// Create vue app
const app = createApp(App);

// Use plugins
app.use(vuetify);
app.use(router);
app.use(layoutsPlugin);
app.use(i18n);
app.use(pinia);
app.use(abilitiesPlugin, ability, {
  useGlobalProperties: true,
});

// Mount vue app
app.mount("#app");
