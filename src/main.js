// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import $ from 'jquery';
// import 'amaze-vue/dist/amaze-vue.css';
import '../static/css/amazeui.min.css';
import '../static/css/app.css';


// import 'amaze-vue/dist/amaze-vue.js';
// import '../static/js/jquery.min.js';
import '../static/js/amazeui.min.js';
import '../static/js/app.js';
// import '../static/js/pinto.min.js';
// import '../static/js/img.js';

import '../static/js/vector.js';
import '../static/js/tagcanvas.js';


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
