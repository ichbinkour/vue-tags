const version = "__VERSION__";

import VueTags from "./components/VueTags.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

const install = (Vue) => {
  /*
   * NOTE:
   *   if you need to extend Vue contstructor, you can extend it in here.
   */

  Vue.prototype.$add = (a, b) => {
    return a + b;
  };

  /*
   * NOTE:
   *  somthing implementation here ...
   */
  Vue.component("font-awesome-icon", FontAwesomeIcon);
  Vue.component(VueTags.name, VueTags);
};

const plugin = {
  install,
  version,
};

export default plugin;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
