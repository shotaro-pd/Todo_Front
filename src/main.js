import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(Toasted);

new Vue({
  render: h => h(App),
  vuetify,
}).$mount('#app')
