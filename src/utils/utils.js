const formatTime = date => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}

/**
 * 时间戳转化为年 月 日 时 分 秒
 * ts: 传入时间戳
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致
 */
function tsFormatTime(timestamp, format) {

	const formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
	let returnArr = [];

	let date = new Date(timestamp);
	let year = date.getFullYear()
	let month = date.getMonth() + 1
	let day = date.getDate()
	let hour = date.getHours()
	let minute = date.getMinutes()
	let second = date.getSeconds()
	returnArr.push(year, month, day, hour, minute, second);

	returnArr = returnArr.map(formatNumber);

	for (var i in returnArr) {
		format = format.replace(formateArr[i], returnArr[i]);
	}
	return format;

}
//函数节流
function throttle(fn, interval) {
	var enterTime = 0; //触发的时间
	var gapTime = interval || 2000; //间隔时间，如果interval不传，则默认300ms
	return function() {
		var context = this;
		var backTime = new Date(); //第一次函数return即触发的时间
		if (backTime - enterTime > gapTime) {
			fn.call(context, arguments);
			enterTime = backTime; //赋值给第一次触发的时间，这样就保存了第二次触发的时间
		}
	};
}

/*函数防抖*/
//防抖(立即执行)
function debounce(fn, interval) {
	var timerId = null;
	var flag = true;
	return function() {
		clearTimeout(timerId);
		if (flag) {
			fn.apply(this, arguments);
			flag = false
		}
		timerId = setTimeout(() => {
			flag = true
		}, interval)
	}
}

function arrFilter(arr, data) {
	// console.log(arr,data)
	const val = arr.filter((item, index) => {
		if (data && (item.id == data || item.id == data.id)) {
			// console.log(item)
			item.index = index
			return item
		}
	})
	if (val.length > 0) {
		return val[0]
	} else {
		return ''
	}
}

function GetRequestParameters(label) { //label 参数名
// console.log(label)
	let url = window.location.search;
	let theRequest = new Object();
	if (url.indexOf("?") != -1) {
		let str = url.substr(1);
		let strs = str.split("&");
		for (let i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
		}
	}
	return theRequest[label];
}
// function debounce(fn, interval) {
//   var timer;
//   var gapTime = interval || 1000;//间隔时间，如果interval不传，则默认1000ms
//   return function() {
//     clearTimeout(timer);
//     var context = this;
//     var args = arguments;//保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
//     timer = setTimeout(function() {
//       fn.call(context,args);
//     }, gapTime);
//   };
// }





module.exports = {
	formatTime: formatTime,
	tsFormatTime: tsFormatTime,
	throttle: throttle,
	debounce: debounce,
	arrFilter,
	GetRequestParameters,
}
