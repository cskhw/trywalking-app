import { createVuetify } from "vuetify";
import defaults from "./defaults";
import { icons } from "./icons";
import theme from "./theme";
import * as components from "vuetify/components";
import * as labComponents from "vuetify/labs/components";

// Styles
import "@core/scss/template/libs/vuetify/index.scss";
import "vuetify/styles";

export default createVuetify({
  ssr: true,
  defaults,
  components: {
    ...components,
    ...labComponents,
  },
  icons,
  theme,
});
