import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
import '../components/css/index.scss';
import JXUI from '../components/lib/index';
Vue.use(JXUI);
new Vue({
  render: h => h(App),
}).$mount('#app');
