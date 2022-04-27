const config = Symbol('config')
const isCompleteURL = Symbol('isCompleteURL')
const requestBefore = Symbol('requestBefore')
const requestAfter = Symbol('requestAfter')
class MinRequest {
	[config] = {
		baseURL: '',
		header: {
			// 'content-type': 'text/html;charset=utf-8'
			'content-type': 'application/json'
		},
		method: 'GET',
		dataType: 'json',
		responseType: 'text'
	}

	interceptors = {
		request: (func) => {
			if (func) {
				MinRequest[requestBefore] = func
			} else {
				MinRequest[requestBefore] = (request) => request
			}

		},
		response: (func) => {
			if (func) {
				MinRequest[requestAfter] = func
			} else {
				MinRequest[requestAfter] = (response) => response
			}
		}
	}

	static[requestBefore](config) {
		return config
	}

	static[requestAfter](response) {
		return response
	}
	//校验地址
	static[isCompleteURL](url) {
		return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
	}

	setConfig(func) {
		this[config] = func(this[config])
	}

	request(options = {}) {		
		options.baseURL = options.baseURL || this[config].baseURL
		options.dataType = options.dataType || this[config].dataType
		options.url = MinRequest[isCompleteURL](options.url) ? options.url : (options.baseURL + options.url)
		options.data = options.data
		options.header = {
			...options.header
		}
		// options.header = {...options.header, ...this[config].header}
		options.method = options.method || this[config].method

		options = {
			...options,
			...MinRequest[requestBefore](options)
		}

		return new Promise((resolve, reject) => {
			options.success = function(res) {
				// console.log(res)
				resolve(MinRequest[requestAfter](res))
			}
			options.fail = function(err) {
				// console.log(err)
				reject(MinRequest[requestAfter](err))
			}
			uni.request(options) 
			// alert('0')
		})
	}

	get(url, data, options = {}) {
		options.url = url
		options.data = objValuefilter(data)
		options.method = 'GET'
		// options.header = {'content-type': 'application/x-www-form-urlencoded'}
		// options.header = {'content-type': 'application/json'}
		// options.header = {'content-type': 'multipart/form-data'}
		return this.request(options)
	}

	post(url, data, options = {}) {
		// alert(url)
		// alert(data)
		options.url = url
		options.data = objValuefilter(data)
		options.method = 'POST'
		// options.header = {'content-type': 'application/x-www-form-urlencoded'}
		options.header = {
			'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
		}
		// options.header = {'content-type': 'application/json;charset=UTF-8'}
		return this.request(options)
	}
	postJson(url, data, options = {}) {
		options.url = url
		options.data = objValuefilter(data)
		options.method = 'POST'
		// options.header = {'content-type': 'application/x-www-form-urlencoded'}
		// options.header = {'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'}
		options.header = {
			'content-type': 'application/json;charset=UTF-8'
		}
		return this.request(options)
	}
}
// data值去空
function objValuefilter(searchfrom) {
	let obj = {};
	for (const key in searchfrom) {
		if (searchfrom[key] || searchfrom[key] == 0) {
			obj[key] = searchfrom[key];
		}
	}
	return obj;
}
//影响注册之后所有创建的每个 Vue 实例
MinRequest.install = function(Vue) {
	Vue.mixin({
		beforeCreate: function() {
			if (this.$options.minRequest) {
				// console.log(this.$options.minRequest)
				Vue._minRequest = this.$options.minRequest
			}
		}
	})
	Object.defineProperty(Vue.prototype, '$Api', {
		get: function() {
			return Vue._minRequest.apis
		}
	})
}

export default MinRequest
