/*
 * @Author: zxw
 * @Date: 2021-07-15 14:35:24
 * @LastEditTime: 2021-07-15 14:40:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rescuestation\src\components\tipsToast\index.js
 */
import Toast from './tipsToast.vue'
const obj = {}
obj.install = function(Vue){
    const tipsToastContrustor = Vue.extend(Toast);
    const tipsToast =  new tipsToastContrustor();
    tipsToast.$mount(document.createElement('div'))
    document.body.appendChild(tipsToast.$el)
    // Vue.prototype.$tipsToast = tipsToast
    Vue.prototype.$uToast = tipsToast
}
export default obj