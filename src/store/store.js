import Vue from 'vue'

import Vuex from 'vuex';


//全局注册vueX
Vue.use(Vuex);
//全局引用cookie方法类
import cookie from '../static/js/cookie'

const userInfo = {
    name:cookie.getCookie('username')||'',
    token:cookie.getCookie('token')||'',
}
