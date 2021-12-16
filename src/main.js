import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueImg from 'v-img'
Vue.use(VueImg);
import VueMasonry from 'vue-masonry-css'
Vue.use(VueMasonry);
import '../node_modules/fontawesome-4.7/css/font-awesome.min.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
