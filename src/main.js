import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
import 'vant/lib/index.css';
import Footer from "./components/Footer";
// import Footer from '@/components/Footer.js'
// Vue.component('Footer',Footer)
Vue.use(Vant);

Vue.use(MintUI);
Vue.config.productionTip = false;
Vue.component("Footer",Footer)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
