/*
 * @Author: your name
 * @Date: 2022-01-10 12:05:20
 * @LastEditTime: 2022-04-27 23:51:57
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /defens1/src/main.js
 */
// alert(0)
import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import MinRequest from './api/MinRequest.js'
import minRequest from './api/api.js'
import store from './store/index.js'
// import {VuexCop} from './store/index.js'
import diaTips from '@/components/tipsToast/index.js'
import myMD from '@/static/js/myMD.js'
import permission from './directives'
//注册自定义指令
Vue.use(permission)
Vue.use(uView);
Vue.use(diaTips);
Vue.use(myMD);

Vue.prototype.$Api = minRequest
Vue.prototype.$myMD = myMD
Vue.config.productionTip = false
// console.log(31231)
App.mpType = 'app'
Vue.use(MinRequest)

const app = new Vue({
	minRequest,
    ...App,
	store,
	// VuexCop,
})
app.$mount()
export default app
