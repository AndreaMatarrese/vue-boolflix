import Vue from 'vue';
import 'bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add();

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
