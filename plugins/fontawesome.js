import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleUser, faArrowUp, faBagShopping,faDoorOpen, faPencil, faTrashCan, } from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons'
 
// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false
 
// adding the icons to the library
library.add(faArrowUp,faCircleUser,faDoorOpen,faBagShopping, faInstagram, faYoutube, faTwitter, faPencil, faTrashCan)
 
// Register the component globally
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
