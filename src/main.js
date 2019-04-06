import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
// 路由数据
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

import notify from './components/mixins/zan.notify.js'
import {Loading} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.mixin(notify)
Vue.use(Loading)
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
