import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
// import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
// import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { 
    faSpinner, faPaw, faMapMarkerAlt, faAngleRight, faCircleNotch, faBars, faDrum, faUser, faEnvelope,
    faPaperPlane
  } from '@fortawesome/free-solid-svg-icons'
// import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSkype } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faSpinner,
  faPaw,
  faFacebook,
  faInstagram, 
  faTwitter, 
  faSkype, 
  faBuilding, 
  faAngleRight,
  faMapMarkerAlt,
  faCircleNotch,
  faBars,
  faDrum,
  faUser,
  faEnvelope,
  faPaperPlane
)

Vue.component('fai', FontAwesomeIcon)

Vue.config.productionTip = false