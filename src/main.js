import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faExpand, faTimes } from '@fortawesome/free-solid-svg-icons'

import "@/assets/code-highlight.css"
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add( faFacebook, faInstagram, faYoutube, faPinterest, faExpand, faTimes )

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  Vue.component('font-awesome', FontAwesomeIcon)

  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
