(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-train-trainDetail"],{"0ee2":function(t,i,e){"use strict";e.r(i);var n=e("d205"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"11da":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-gap",style:[t.gapStyle]})},s=[]},"136d":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAmhJREFUWEft1rFrE2EYx/Hfc0mMJC4OTv4R4uZsWorVDCqIqJN4zyWIYBUHQfBQcFA0YOByfcMdmEXoddFBEZfiIIIOKg4idhChqGCCWDBq7l65cpFb2r53lzYIZgvJy/fzvnnvzUsY84vG3Me/BTBNUzNNMxjlqimvADNbAHQA7V6vd8bzPH8UEFUAMXMfwJYwSkTz3W73uOd5v7IiVAFg5lsAZmLBh+Vy+XCj0fiRBaEMCCO6rt8konOx4JPBYHDAdd3vaRGJAGGEmS8DMGPB5/1+f1+n0/maBpEYECFmpJThagzHv8nn85OWZX1KikgFiBCnANgAcuF7KeX7IAgmHMf5kASRGhDtiaNE1AFQiKIfpZQT7Xb7nSoiEyCMGIZRlVLOAdgaRT8T0dTs7OwrFURmQBip1Wp7gyC4B2BbFO3lcrnpVqv1bD3ESABhpF6v7/F9/wGA7VF0WdO0qm3bC2shRgaIfo5dUsrHAHZE0SUhxM5NAzDzfgDzsf3wUgixe1MAhmEcCoLgLhGt/F8ACB/HihBiccMBzHwMwB0A+Si26Pt+ReVMyLwHdF0/SURieCABeDsYDCqu6y6t9wSEn2cCMPNpALcBaFHstaZpk7Ztf1GJZwIw83kAN2KTeOH7/pTjOF3VeGqAYRiXpJRXY6GnAKaFEN+SxFMBdF2/RkQXhyEp5UKhUKhalrWcNJ4YwMwNAGeHISJ6VCqVDma5FSlvQma+DuBCbJb3i8XikWaz+TPNzP9OQnUwM4eba+WcJ6I5KeUJIcRv1fGrfS/JClwBEN4HO+O4lmed6KrjlVdgowT/AX8AZlHOIVkXD7UAAAAASUVORK5CYII="},"1b6f":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */',""]),t.exports=i},"2ad9":function(t,i,e){"use strict";e("7a82");var n=e("ee27").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("d81d");var a=n(e("f3f3")),s=n(e("6a89")),o=n(e("a2cb")),r={components:{timePop:s.default,popSelect:o.default},data:function(){return{roleId:uni.getStorageSync("roleId"),id:"",createUserId:"",planId:"",trainingSubjects:[],accountByRoleList:[],form:{}}},onLoad:function(t){var i=this.$mp.page.route;this.$myMD.userReporting(i,"训练计划发布与管理"),this.selectList(),this.planId=t.planId||"",t.id&&(this.id=t.id||"",this.detail())},onShow:function(){this.id&&this.detail(),this.form=this.$store.state.trainForm,this.$store.state.teamItem.id&&(this.form.professionalTeamId=this.$store.state.teamItem.id,this.form.professionalTeam=this.$store.state.teamItem.name,this.trainingPersonNum()),this.$forceUpdate()},methods:{trainCon:function(){var t=(0,a.default)({},this.form);if(t.planId=this.planId,this.form.list&&this.form.list.length>0){var i=this.form.list.map((function(t){return t.id})),e=i.join();t.professionalTeamPersonInformationId=e}this.id?(t.id=this.id,this.edit(t)):this.add(t)},goMember:function(){uni.navigateTo({url:"./member?id="+this.id})},add:function(t){var i=this;this.$Api.trainingAdd(t).then((function(t){200==t.code?(i.$uToast.show("新增成功","success"),uni.navigateBack()):i.$uToast.show(t.message,"error")}))},edit:function(t){var i=this;this.$Api.trainingEdit(t).then((function(t){200==t.code?(i.$uToast.show("编辑成功","success"),uni.navigateBack()):i.$uToast.show(t.message,"error")}))},addList:function(){uni.navigateTo({url:"./add"})},timeDet:function(t){this.form.startTime=t.y+"-"+t.m+"-"+t.d+" "+t.h+":"+t.mi,this.$forceUpdate()},popDete:function(t){this.form.trainingSubjectId=t.id,this.form.trainingSubject=t.name,this.form.trainingSubjectContent=t.content,this.$forceUpdate()},popDeteOne:function(t){this.form.faculty=t.id,this.form.facultyName=t.name,this.$forceUpdate()},goExpan:function(){this.$store.commit("trainFormChang",this.form);var t=1==this.roleId?1:0;uni.navigateTo({url:"../expansion/list?type=3&isCityUser="+t})},trainingPersonNum:function(){var t=this;this.$Api.trainingPersonNum({teamId:this.form.professionalTeamId,planId:this.planId}).then((function(i){200==i.code&&(t.form.numberPerson=i.data.numberPerson,t.$forceUpdate())}))},goMemberSelect:function(){this.form.professionalTeamId?(this.$store.commit("trainFormChang",this.form),uni.navigateTo({url:"../../components/memberSelect?id="+this.form.professionalTeamId})):this.$refs.uToast.show({title:"请先选择参训队伍",type:"error"})},detail:function(){var t=this;this.$Api.trainingDetail({id:this.id}).then((function(i){if(200==i.code){t.form=i.data;var e={id:t.form.professionalTeamId,name:t.form.professionalTeam};t.$store.commit("teamItemChang",e),t.$store.commit("memberListChang",t.form.list)}}))},selectList:function(){var t=this;this.$Api.trainingSubjects().then((function(i){200==i.code&&(t.trainingSubjects=i.data)})),this.$Api.getRoleList().then((function(i){200==i.code&&i.data.map((function(i){"教员"==i.name&&t.getAccountByRoleList(i.id)}))}))},getAccountByRoleList:function(t){var i=this;this.$Api.getAccountByRoleList({id:t}).then((function(t){200==t.code&&(i.accountByRoleList=t.data)}))}}};i.default=r},"3ad8":function(t,i,e){"use strict";e.r(i);var n=e("11da"),a=e("0ee2");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("549c");var o,r=e("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"3ee8fe8e",null,!1,n["a"],o);i["default"]=l.exports},"4d46":function(t,i,e){"use strict";e.r(i);var n=e("2ad9"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"50c45":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={uGap:e("3ad8").default,uToast:e("8e48").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"train"},[n("timePop",{ref:"timePop",on:{timeDet:function(i){arguments[0]=i=t.$handleEvent(i),t.timeDet.apply(void 0,arguments)}}}),n("popSelect",{ref:"popSelect",attrs:{popList:t.trainingSubjects,title:"训练科目"},on:{popDete:function(i){arguments[0]=i=t.$handleEvent(i),t.popDete.apply(void 0,arguments)}}}),n("popSelect",{ref:"popSelect1",attrs:{popList:t.accountByRoleList,title:"教员"},on:{popDete:function(i){arguments[0]=i=t.$handleEvent(i),t.popDeteOne.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"detailUl"},[n("v-uni-view",{staticClass:"detailUlLi"},[n("v-uni-view",{staticClass:"detailUlLiL"},[t._v("训练时间")]),n("v-uni-view",{staticClass:"detailUlLiR flexCenter"},[t._v(t._s(t.form.startTime))])],1),n("v-uni-view",{staticClass:"detailUlLi"},[n("v-uni-view",{staticClass:"detailUlLiL"},[t._v("训练地点")]),n("v-uni-view",{staticClass:"detailUlLiR flexCenter"},[t._v(t._s(t.form.address))])],1),n("v-uni-view",{staticClass:"detailUlLi"},[n("v-uni-view",{staticClass:"detailUlLiL"},[t._v("训练科目")]),n("v-uni-view",{staticClass:"detailUlLiR flexCenter"},[t._v(t._s(t.form.trainingSubject))])],1)],1),n("u-gap",{attrs:{height:"16","bg-color":"#FAFAFA"}}),n("v-uni-view",{staticClass:"detailUl"},[n("v-uni-view",{staticClass:"detailUlLi"},[n("v-uni-view",{staticClass:"detailUlLiL"},[t._v("科目内容")]),n("v-uni-view",{staticClass:"detailUlLiR flexCenter"},[t._v(t._s(t.form.trainingSubjectContent))])],1),n("v-uni-view",{staticClass:"detailUlLi"},[n("v-uni-view",{staticClass:"detailUlLiL"},[t._v("训练方式")]),n("v-uni-view",{staticClass:"detailUlLiR flexCenter"},[t._v(t._s(t.form.way))])],1),n("v-uni-view",{staticClass:"detailUlLi"},[n("v-uni-view",{staticClass:"detailUlLiL"},[t._v("训练时长")]),n("v-uni-view",{staticClass:"detailUlLiR flexCenter"},[t._v(t._s(t.form.hours)+"小时")])],1)],1),n("u-gap",{attrs:{height:"16","bg-color":"#FAFAFA"}}),n("v-uni-view",{staticClass:"detailUl"},[n("v-uni-view",{staticClass:"detailUlLi"},[n("v-uni-view",{staticClass:"detailUlLiL"},[t._v("教员")]),n("v-uni-view",{staticClass:"detailUlLiR flexCenter"},[t._v(t._s(t.form.facultyName))])],1),n("v-uni-view",{staticClass:"detailUlLi"},[n("v-uni-view",{staticClass:"detailUlLiL"},[t._v("考核方式")]),n("v-uni-view",{staticClass:"detailUlLiR flexCenter"},[t._v(t._s(t.form.accessType))])],1),n("v-uni-view",{staticClass:"detailUlLi"},[n("v-uni-view",{staticClass:"detailUlLiL"},[t._v("参训队伍")]),n("v-uni-view",{staticClass:"detailUlLiR flexCenter"},[t._v(t._s(t.form.professionalTeam))])],1),n("v-uni-view",{staticClass:"detailUlLi"},[n("v-uni-view",{staticClass:"detailUlLiL"},[t._v("参训人数")]),n("v-uni-view",{staticClass:"detailUlLiR flexCenter"},[t._v(t._s(t.form.numberPerson))])],1),n("v-uni-view",{staticClass:"detailUlLi"},[n("v-uni-view",{staticClass:"detailUlLiL"},[t._v("参训队员")]),n("v-uni-view",{staticClass:"detailUlLiR flexCenter",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goMember.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"iulRtex"},t._l(t.form.list,(function(i,e){return n("v-uni-text",{key:e,staticClass:"iulRtexItem"},[t._v(t._s(i.name))])})),1),n("v-uni-view",{staticClass:"flexCenter deUlLiRtex iulRrig"},[t._v("查看更多"),n("v-uni-image",{staticClass:"iulRrig",attrs:{src:e("136d"),mode:""}})],1)],1)],1)],1),n("u-gap",{attrs:{height:"16","bg-color":"#FAFAFA"}}),n("u-toast",{ref:"uToast"})],1)},s=[]},"549c":function(t,i,e){"use strict";var n=e("8658"),a=e.n(n);a.a},"559f":function(t,i,e){var n=e("eb04");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("1510d24c",n,!0,{sourceMap:!1,shadowMode:!1})},6414:function(t,i,e){"use strict";e.r(i);var n=e("50c45"),a=e("4d46");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("ea44");var o,r=e("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"6cb3b77a",null,!1,n["a"],o);i["default"]=l.exports},8658:function(t,i,e){var n=e("1b6f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("8064def6",n,!0,{sourceMap:!1,shadowMode:!1})},d205:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var n={name:"u-gap",props:{bgColor:{type:String,default:"transparent "},height:{type:[String,Number],default:30},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0}},computed:{gapStyle:function(){return{backgroundColor:this.bgColor,height:this.height+"rpx",marginTop:this.marginTop+"rpx",marginBottom:this.marginBottom+"rpx"}}}};i.default=n},ea44:function(t,i,e){"use strict";var n=e("559f"),a=e.n(n);a.a},eb04:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.train[data-v-6cb3b77a]{padding-bottom:%?120?%}.train .addList[data-v-6cb3b77a]{width:%?276?%;height:%?72?%;border-radius:%?8?%;border:%?2?% solid #007aff;font-size:%?28?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#007aff;display:flex;align-items:center;justify-content:center;margin:%?34?% auto 0}.train .addList .addListImg[data-v-6cb3b77a]{width:%?32?%;height:%?32?%;margin-right:%?20?%}',""]),t.exports=i}}]);