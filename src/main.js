import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: process.env.NODE_ENV === 'development',
  connection: process.env.VUE_APP_BACKEND
}));

new Vue({
  render: h => h(App),
}).$mount('#app')