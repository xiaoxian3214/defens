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
