// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios'; // 引入axios
import components from "./components/components.js";
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(components);
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>',
});
