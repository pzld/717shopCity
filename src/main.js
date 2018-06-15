import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'swiper/dist/css/swiper.css';
import store from './store';
import './assets/index.css';
import http from './utils/request';
import VueLazyLoad from 'vue-lazyload';

Vue.use(VueLazyLoad, {
  error: '../static/img/error.jpg',
  loading: '../static/img/loading.gif'
})

Vue.use(http)
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
