(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-organization-add"],{"0cc9":function(t,e,n){"use strict";var i=n("925f"),a=n.n(i);a.a},"0ee2":function(t,e,n){"use strict";n.r(e);var i=n("d205"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"11da":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-gap",style:[t.gapStyle]})},o=[]},"136d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAmhJREFUWEft1rFrE2EYx/Hfc0mMJC4OTv4R4uZsWorVDCqIqJN4zyWIYBUHQfBQcFA0YOByfcMdmEXoddFBEZfiIIIOKg4idhChqGCCWDBq7l65cpFb2r53lzYIZgvJy/fzvnnvzUsY84vG3Me/BTBNUzNNMxjlqimvADNbAHQA7V6vd8bzPH8UEFUAMXMfwJYwSkTz3W73uOd5v7IiVAFg5lsAZmLBh+Vy+XCj0fiRBaEMCCO6rt8konOx4JPBYHDAdd3vaRGJAGGEmS8DMGPB5/1+f1+n0/maBpEYECFmpJThagzHv8nn85OWZX1KikgFiBCnANgAcuF7KeX7IAgmHMf5kASRGhDtiaNE1AFQiKIfpZQT7Xb7nSoiEyCMGIZRlVLOAdgaRT8T0dTs7OwrFURmQBip1Wp7gyC4B2BbFO3lcrnpVqv1bD3ESABhpF6v7/F9/wGA7VF0WdO0qm3bC2shRgaIfo5dUsrHAHZE0SUhxM5NAzDzfgDzsf3wUgixe1MAhmEcCoLgLhGt/F8ACB/HihBiccMBzHwMwB0A+Si26Pt+ReVMyLwHdF0/SURieCABeDsYDCqu6y6t9wSEn2cCMPNpALcBaFHstaZpk7Ztf1GJZwIw83kAN2KTeOH7/pTjOF3VeGqAYRiXpJRXY6GnAKaFEN+SxFMBdF2/RkQXhyEp5UKhUKhalrWcNJ4YwMwNAGeHISJ6VCqVDma5FSlvQma+DuBCbJb3i8XikWaz+TPNzP9OQnUwM4eba+WcJ6I5KeUJIcRv1fGrfS/JClwBEN4HO+O4lmed6KrjlVdgowT/AX8AZlHOIVkXD7UAAAAASUVORK5CYII="},"1b6f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */',""]),t.exports=e},"2ece":function(t,e,n){"use strict";n.r(e);var i=n("a72f"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"361e":function(t,e,n){var i=n("903c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("164492fa",i,!0,{sourceMap:!1,shadowMode:!1})},"3ad8":function(t,e,n){"use strict";n.r(e);var i=n("11da"),a=n("0ee2");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("549c");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"3ee8fe8e",null,!1,i["a"],r);e["default"]=u.exports},"4fff":function(t,e,n){"use strict";function i(t,e,n){this.$children.map(a=>{t===a.$options.name?a.$emit.apply(a,[e].concat(n)):i.apply(a,[t,e].concat(n))})}n.r(e),e["default"]={methods:{dispatch(t,e,n){let i=this.$parent||this.$root,a=i.$options.name;while(i&&(!a||a!==t))i=i.$parent,i&&(a=i.$options.name);i&&i.$emit.apply(i,[e].concat(n))},broadcast(t,e,n){i.call(this,t,e,n)}}}},"50ec":function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("498a");var a=i(n("4fff")),o={name:"u-input",mixins:[a.default],props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0},adjustPosition:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!=e&&"select"==this.type&&this.handleInput({detail:{value:t}})}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,n=t.detail.value;this.trim&&(n=this.$u.trim(n)),this.$emit("input",n),this.defaultValue=n,setTimeout((function(){e.dispatch("u-form-item","on-form-change",n)}),40)},handleBlur:function(t){var e=this,n=t.detail.value;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",n),setTimeout((function(){e.dispatch("u-form-item","on-form-blur",n)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=o},"549c":function(t,e,n){"use strict";var i=n("8658"),a=n.n(i);a.a},"803d":function(t,e,n){"use strict";n.r(e);var i=n("be1c"),a=n("2ece");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("c83d");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"46b8c07a",null,!1,i["a"],r);e["default"]=u.exports},8658:function(t,e,n){var i=n("1b6f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("8064def6",i,!0,{sourceMap:!1,shadowMode:!1})},"8dcc":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-input[data-v-020a28e5]{position:relative;flex:1;\ndisplay:flex;flex-direction:row\n}.u-input__input[data-v-020a28e5]{font-size:%?28?%;color:#303133;flex:1}.u-input__textarea[data-v-020a28e5]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;flex:1}.u-input--border[data-v-020a28e5]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-020a28e5]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-020a28e5]{margin-left:%?10?%}.u-input__right-icon--select[data-v-020a28e5]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-020a28e5]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},"903c":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.add[data-v-46b8c07a]{padding-bottom:%?80?%}',""]),t.exports=e},"925f":function(t,e,n){var i=n("8dcc");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("bf6b922e",i,!0,{sourceMap:!1,shadowMode:!1})},"9fd1":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("f86b").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?n("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"cursor-spacing":t.getCursorSpacing,"show-confirm-bar":t.showConfirmbar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType,"cursor-spacing":t.getCursorSpacing,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"show-confirm-bar":t.showConfirmbar,"adjust-position":t.adjustPosition},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&""!=t.value&&t.focused?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[n("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):t._e(),t.passwordIcon&&"password"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[n("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[n("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},o=[]},a72f:function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("d81d");var a=i(n("f3f3")),o=i(n("a2cb")),r={components:{popSelect:o.default},data:function(){return{accountByRoleList:[],params:{},id:"",level:"",type:"",form:{}}},onLoad:function(t){var e=this.$mp.page.route;this.$myMD.userReporting(e,"组织架构信息"),this.selectList(),1==t.type?(this.id=t.id,this.type=t.type,this.level=t.level):(this.id=t.id,this.detail())},methods:{determine:function(){var t=(0,a.default)({},this.form);t.liaison=t.liaison||"",t.phone=t.phone||"",this.id&&1!=this.type?(t.id=this.id,this.edit(t)):this.id&&1==this.type?(t.parentId=this.id,t.level=Number(this.level)+1,this.add(t)):(t.level=1,this.add(t))},add:function(t){var e=this;this.$Api.organizAdd(t).then((function(t){200==t.code?(e.$uToast.show("新增成功","success"),uni.navigateBack()):e.$uToast.show(t.message,"error")}))},edit:function(t){var e=this;this.$Api.organizUpdata(t).then((function(t){200==t.code?(e.$uToast.show("编辑成功","success"),uni.navigateBack()):e.$uToast.show(t.message,"error")}))},popDete:function(t){this.form.liaison=t.id,this.form.liaisonName=t.name,this.$forceUpdate()},detail:function(){var t=this,e={id:this.id};this.$Api.organizDetail(e).then((function(e){200==e.code&&(t.form=e.data)}))},selectList:function(){var t=this;this.$Api.getRoleList().then((function(e){200==e.code&&e.data.map((function(e){"联络员"==e.name&&t.getAccountByRoleList(e.id)}))}))},getAccountByRoleList:function(t){var e=this;this.$Api.getAccountByRoleList({id:t}).then((function(t){200==t.code&&(e.accountByRoleList=t.data,e.form.liaison&&e.accountByRoleList.map((function(t){t.id==e.form.liaison&&(e.form.liaisonName=t.name)})))}))}}};e.default=r},be1c:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uGap:n("3ad8").default,uInput:n("d5da").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"add"},[i("v-uni-view",{staticClass:"navTop flexCenter"},[i("v-uni-view",{staticClass:"navTitle"}),i("v-uni-view",{staticClass:"navRig",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.determine.apply(void 0,arguments)}}},[t._v("完成")])],1),i("popSelect",{ref:"popSelect",attrs:{popList:t.accountByRoleList,title:"联络员"},on:{popDete:function(e){arguments[0]=e=t.$handleEvent(e),t.popDete.apply(void 0,arguments)}}}),i("u-gap",{attrs:{height:"16","bg-color":"#FAFAFA"}}),i("v-uni-view",{staticClass:"detailUl"},[i("v-uni-view",{staticClass:"detailUlLi"},[i("v-uni-view",{staticClass:"detailUlLiL"},[i("v-uni-text",{staticClass:"redTs"},[t._v("*")]),t._v("组织名称("+t._s(1==t.level?"二级":2==t.level?"三级":3==t.level?"四级":"一级")+")")],1),i("v-uni-view",{staticClass:"detailUlLiR"},[i("u-input",{staticClass:"iulrInput",attrs:{type:"text",placeholder:"请输入"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1)],1),i("u-gap",{attrs:{height:"16","bg-color":"#FAFAFA"}}),i("v-uni-view",{staticClass:"detailUl"},[i("v-uni-view",{staticClass:"detailUlLi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$refs.popSelect.popShow=!0}}},[i("v-uni-view",{staticClass:"detailUlLiL"},[t._v("联络员:")]),i("v-uni-view",{staticClass:"detailUlLiR flexCenter"},[i("v-uni-view",{staticClass:"iulRtex",class:t.form.liaisonName?"iulRtexColAct":"iulRtexCol"},[t._v(t._s(t.form.liaisonName?t.form.liaisonName:"请选择"))]),i("v-uni-image",{staticClass:"iulRrig",attrs:{src:n("136d"),mode:""}})],1)],1),i("v-uni-view",{staticClass:"detailUlLi"},[i("v-uni-view",{staticClass:"detailUlLiL"},[t._v("联系电话")]),i("v-uni-view",{staticClass:"detailUlLiR"},[i("u-input",{staticClass:"iulrInput",attrs:{placeholder:"请输入",type:"number",maxLength:"11"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)],1)],1),i("u-gap",{attrs:{height:"16","bg-color":"#FAFAFA"}})],1)},o=[]},c83d:function(t,e,n){"use strict";var i=n("361e"),a=n.n(i);a.a},d205:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"u-gap",props:{bgColor:{type:String,default:"transparent "},height:{type:[String,Number],default:30},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0}},computed:{gapStyle:function(){return{backgroundColor:this.bgColor,height:this.height+"rpx",marginTop:this.marginTop+"rpx",marginBottom:this.marginBottom+"rpx"}}}};e.default=i},d5da:function(t,e,n){"use strict";n.r(e);var i=n("9fd1"),a=n("daa9");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("0cc9");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"020a28e5",null,!1,i["a"],r);e["default"]=u.exports},daa9:function(t,e,n){"use strict";n.r(e);var i=n("50ec"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);