function userReporting (pagePath,cName) {
	(function (w, d, s, q, i) {
		w[q] = w[q] || [];
		var f = d.getElementsByTagName(s)[0], j = d.createElement(s);
		j.async = true;
		j.id = 'beacon-aplus';
		j.src = 'https://alidt.alicdn.com/alilog/mlog/aplus_cloud.js';
		f.parentNode.insertBefore(j, f);
		// 阿里巴巴保密信息 / ALIBABACONFIDENTIAL
	})(window, document, 'script', 'aplus_queue');
	aplus_queue.push({
		action: 'aplus.setMetaInfo',
		arguments: ['aplus-rhost-v', 'alog.zjzwfw.gov.cn']
	});
	aplus_queue.push({
		action: 'aplus.setMetaInfo',
		arguments: ['aplus-rhost-g', 'alog.zjzwfw.gov.cn']
	});
	var u = navigator.userAgent
	var isAndroid = u.indexOf('Android') > -1
	var isIOS = !!u.match(/\(i[^;]+;(U;)?CPU.+MacOSX/)
	aplus_queue.push({
		action: 'aplus.setMetaInfo',
		arguments: ['appId', isAndroid ? '28302650' : isIOS ? '28328447' :
			'47130293']
	});
	// 基础埋点
	//单页应用或“单个页面”需异步补充PV日志参数还需进行如下埋点：
	aplus_queue.push({
		action: 'aplus.setMetaInfo',
		arguments: ['aplus-waiting', 'MAN']
	});//
	//单页应用路由切换后或在异步获取到pv日志所需的参数后再执行sendPV：
	aplus_queue.push({
		'action': 'aplus.sendPV',
		'arguments': [{
			is_auto: false
		}, {
			//当前你的应用信息，此两行按应用实际参数修改，不可自定义。
			// bid: 'WZ_RFB_zzdpro',
			sapp_id: '21548',
			sapp_name: 'WZ_RFB',
			//自定义PV参数key-value键值对（只能是这种平铺的json，不能做多层嵌套），
			page_id: pagePath,
			page_name: cName,
			page_url: pagePath
		}]
	})
	// 阿里巴巴保密信息 / ALIBABACONFIDENTIAL
	// 用户信息埋点
	//如采集用户信息是异步行为需要先执行这个BLOCK埋点
	aplus_queue.push({
		action: 'aplus.setMetaInfo',
		arguments: ['_hold', 'BLOCK']
	});
	//设置会员ID
	aplus_queue.push({
		action: "aplus.setMetaInfo",
		arguments: ["_user_id", cName=='login'?JSON.parse(uni.getStorageSync('userInfor')).accountId:'']
	});
	aplus_queue.push({
		action: "aplus.setMetaInfo",
		arguments: ["_dev_id", "yourDeviceId"]
	});
	//如采集用户信息是异步行为，需要先设置完用户信息后再执行这个START埋点
	//此时被block住的日志会携带上用户信息逐条发出
	aplus_queue.push({
		action: 'aplus.setMetaInfo',
		arguments: ['_hold', 'START']
	});
	// console.log(pagePath,cName)
}

module.exports = {
	userReporting
}
