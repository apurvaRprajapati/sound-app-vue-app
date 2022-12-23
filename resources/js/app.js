import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'

import '~/plugins'
import '~/components'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import ToggleButton from 'vue-js-toggle-button'
import { createPinia, PiniaVuePlugin } from 'pinia'
import bFormSlider from 'vue-bootstrap-slider';


Vue.use(bFormSlider)
Vue.use(BootstrapVue)
Vue.use(PiniaVuePlugin)
Vue.use(ToggleButton)
Vue.use(IconsPlugin)

const pinia = createPinia()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App,
  pinia
})
