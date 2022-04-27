import MinRequest from './MinRequest'
// import tipsToast from '../components/tipsToast/tipsToast.vue'
import app from '@/main.js'

const minRequest = new MinRequest()

let BASE_URL ='https://rfb-zlf.wenzhou.gov.cn:8003/' // 外网https://rfb-zlf.wenzhou.gov.cn:8003/
// let BASE_URL ='http://www.daoting.co:8899/' // 外网rfb-zlf.wenzhou.gov.cn:8003   
// let BASE_URL = 'http://192.168.1.108:8006/'  
// let BASE_URL = 'http://192.168.1.105:8006/'
// let BASE_URL ='http://www.daoting.co:10544/iot-platform/' // 外网
let IMG_URL = BASE_URL + 'api/app/uploadFile' //上传  
// let BASE_HTTP = 'http://www.daoting.co:7944' /                 /实时画 面地址
// 请求拦截器 
minRequest.interceptors.request((request) => {
	// alert('0')
	let token = uni.getStorageSync('token') ? uni.getStorageSync('token') :
		'';
	// alert('1')
	// console.log(uni.getStorageSync('token'))
	if (token) {
		// request.header.Authorization = token; //将token放到请求头发送给服务器
		request.header.token = token; //将token放到请求头发送给服务器
	}
	// alert('2')
	return request
})

// 响应拦截器
minRequest.interceptors.response((response) => {
	// console.log(response.data.code)
	// if(response.data.code==200){
	return response.data
	// }else{
	// 	 return app.$uToast.show(response.data.message,'error')
	// }
})

// 设置默认配置
minRequest.setConfig((config) => {
	config.baseURL = BASE_URL
	return config
})

export default {
	// 这里统一管理api请求
	apis: {
		IMG_URL, //上传
		// BASE_HTTP,//实时画面

		// 免登
		// 获取accessToken
		getAccessToken(data) {
			return minRequest.get('api/app/AppLogin/getAccessToken', data)
		},
		// 获取用户信息
		getUserInformation(data) {
			return minRequest.post('api/app/AppLogin/getUserInformation', data)
		},
		// 获取accessToken
		login(data) {
			return minRequest.post('api/app/AppLogin/login', data)
		},
		// 获取验证码
		sendCode(data) {
			// return get("api/screen/login", data)
			return minRequest.post("api/app/AppLogin/sendCode", data)
		},
		// 字典
		// ZD_ZZZH_RFZHJGJB	组织指挥-人防指挥机构级别
		ZD_ZZZH_RFZHJGJB(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_ZZZH_RFZHJGJB'
			})
		},
		// ZD_ZZZH_ZHZZWJB	组织指挥-指挥长职务级别
		ZD_ZZZH_ZHZZWJB(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_ZZZH_ZHZZWJB'
			})
		},
		// ZD_ZZZH_ZHPTJB	组织指挥-指挥平台级别
		ZD_ZZZH_ZHPTJB(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_ZZZH_ZHPTJB'
			})
		},
		// ZD_ZZZH_SJLX	组织指挥-数据类型
		ZD_ZZZH_SJLX(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_ZZZH_SJLX'
			})
		},
		// ZD_ZZZH_XXTXQK	组织指挥-信息通信情况
		ZD_ZZZH_XXTXQK(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_ZZZH_XXTXQK'
			})
		},
		// ZD_ZZZH_PTCLYT	组织指挥-配套车辆用途
		ZD_ZZZH_PTCLYT(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_ZZZH_PTCLYT'
			})
		},
		// ZD_ZZZH_ZYJJMBDJ	组织指挥-重要经济目标等级
		ZD_ZZZH_ZYJJMBDJ(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_ZZZH_ZYJJMBDJ'
			})
		},
		// ZD_ZZZH_ZYJJMBDL	组织指挥-重要经济目标大类
		ZD_ZZZH_RFZHJGJB(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_ZZZH_RFZHJGJB'
			})
		},
		// ZD_ZZZH_ZYJJMBZL	组织指挥-重要经济目标中类
		ZD_ZZZH_ZYJJMBZL(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_ZZZH_ZYJJMBZL'
			})
		},
		// ZD_ZZZH_ZYJJMBXL	组织指挥-重要经济目标小类
		ZD_ZZZH_ZYJJMBXL(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_ZZZH_ZYJJMBXL'
			})
		},
		// ZD_ZZZH_ZYJJMBXZ	组织指挥-重要经济目标性质
		ZD_ZZZH_ZYJJMBXZ(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_ZZZH_ZYJJMBXZ'
			})
		},
		// ZD_ZZZH_ZYDNLLX	组织指挥-专业队能力类型
		ZD_ZZZH_ZYDNLLX(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_ZZZH_ZYDNLLX'
			})
		},
		// ZD_ZZZH_XB	组织指挥-性别
		ZD_ZZZH_XB(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_ZZZH_XB'
			})
		},
		// ZD_ZZZH_ZZMM	组织指挥-政治面貌
		ZD_ZZZH_ZZMM(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_ZZZH_ZZMM'
			})
		},
		// ZD_ZZZH_FHZBQK	组织指挥-防护装备情况
		ZD_ZZZH_FHZBQK(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_ZZZH_FHZBQK'
			})
		},
		// ZD_ZZZH_FHWZCBQK	组织指挥-防护物资储备情况
		ZD_ZZZH_FHWZCBQK(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_ZZZH_FHWZCBQK'
			})
		},
		// ZD_XLDJ	学历等级
		ZD_XLDJ(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_XLDJ'
			})
		},
		// ZD_XZQDM	行政区代码
		ZD_XZQDM(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_XZQDM'
			})
		},
		// ZD_WZ_XZQDM 温州行政区域代码
		ZD_WZ_XZQDM(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_WZ_XZQDM'
			})
		},
		// ZD_DATA_RESOURCE	数据来源
		ZD_DATA_RESOURCE(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_DATA_RESOURCE'
			})
		},
		// ZD_JSLX	宣传内容建设类型
		ZD_JSLX(data) {
			return minRequest.get('api/app/dictionary/detailList', {
				type: 'ZD_JSLX'
			})
		},


		// 编兵审核通知
		crossAuditinform(data) {
			return minRequest.get('api/app/crossAudit/inform', data)
		},
		// 训练计划的通知
		traininginform(data) {
			return minRequest.post('api/app/training/informTheLiaison', data)
		},
		// 拉动点验的通知
		pullInspectioninform(data) {
			return minRequest.post('api/app/pullInspection/informTheLiaison', data)
		},



		// 专业队
		// 列表 分页
		teamList(data) {
			return minRequest.get('api/app/team/list', data)
		},
		// 列表 全部
		teamAllList(data) {
			return minRequest.get('api/app/team/allList', data)
		},
		// 详情
		teamDetail(data) {
			return minRequest.get('api/app/team/detail', data)
		},
		// 新增
		teamAdd(data) {
			return minRequest.post('api/app/team/add', data)
		},
		// 编辑
		teamEdit(data) {
			return minRequest.post('api/app/team/edit', data)
		},
		// 删除
		teamDelete(data) {
			return minRequest.get('api/app/team/delete', data)
		},

		// 队员
		// 列表
		playersList(data) {
			return minRequest.get('api/app/players/list', data)
		},
		// 详情
		playersDetail(data) {
			return minRequest.get('api/app/players/detail', data)
		},
		// 新增
		playersAdd(data) {
			return minRequest.post('api/app/players/add', data)
		},
		// 编辑
		playersEdit(data) {
			return minRequest.post('api/app/players/edit', data)
		},
		// 删除
		playersDelete(data) {
			return minRequest.get('api/app/players/delete', data)
		},

		// 交叉编兵
		// 列表
		crossAuditList(data) {
			return minRequest.get('api/app/crossAudit/list', data)
		},
		// 获取队员所有专业
		crossAuditProf(data) {
			return minRequest.get('api/app/crossAudit/professional', data)
		},
		// 替换
		crossAuditRepl(data) {
			return minRequest.post('api/app/crossAudit/replace', data)
		},
		// 详情
		crossAuditDetail(data) {
			return minRequest.get('api/app/crossAudit/detail', data)
		},


		// 兵源查询
		// 列表
		playersSourceList(data) {
			return minRequest.get('api/app/playersSource/list', data)
		},
		// 扩编
		playersSourceExpansion(data) {
			return minRequest.post('api/app/playersSource/expansion', data)
		},

		// // 队伍兵源 -列表
		// export const playersSourceList = data => { return get("api/web/defense/playersSource/list", data) }
		// // 队伍兵源 -导入
		// export const playersSourceImp = data => { return post("api/web/defense/playersSource/import", data) }
		// // 队伍兵源-编辑
		// export const playersSourceupdate = data => { return post("api/web/defense/playersSource/update", data) }
		// // 队伍兵源 -详情
		// export const playersSourcedetail = data => { return get("api/web/defense/playersSource/detail", data) }
		// // 队伍兵源 -删除
		// export const playersSourcedelete = data => { return get("api/web/defense/playersSource/delete", data) }
		// // 队伍兵源 -扩编
		// export const playersSourceexpansion = data => { return post("api/web/defense/playersSource/expansion", data) }



		// 训练计划发布与管理
		// 计划列表
		traPlanList(data) {
			return minRequest.post('api/app/training/planList', data)
		},
		// 计划新增
		traPlanAdd(data) {
			return minRequest.post('api/app/training/planAdd', data)
		},
		// 计划编辑
		traPlanUpdate(data) {
			return minRequest.post('api/app/training/planUpdate', data)
		},
		// 计划删除
		traPlanDelete(data) {
			return minRequest.post('api/app/training/planDelete', data)
		},
		// 指定队伍的队员列表
		traPlayersList(data) {
			return minRequest.get('api/app/training/playersList', data)
		},
		// 训练计划的新增
		trainingAdd(data) {
			return minRequest.post('api/app/training/add', data)
		},
		// 训练计划的列表
		trainingList(data) {
			return minRequest.get('api/app/training/list', data)
		},
		// 训练计划的列表(专业队)
		trainingAllList(data) {
			return minRequest.get('/api/app/training/trainingAllList', data)
		},
		// 编辑人员
		updatePersonList(data) {
			return minRequest.post('api/app/training/updatePersonList', data)
		},
		// 人数回显
		trainingPersonNum(data) {
			return minRequest.get('api/app/training/trainingPersonNum', data)
		},
		// 训练计划详情
		trainingDetail(data) {
			return minRequest.get('api/app/training/detail', data)
		},
		// 训练计划的新增
		trainingAdd(data) {
			return minRequest.post('api/app/training/add', data)
		},
		// 训练计划的编辑
		trainingEdit(data) {
			return minRequest.post('api/app/training/edit', data)
		},
		// 训练计划的删除
		trainingDelete(data) {
			return minRequest.post('api/app/training/delete', data)
		},
		// 训练计划上传
		trainingUpload(data) {
			return minRequest.post('api/app/training/trainingUpload', data)
		},
		// 训练科目
		trainingSubjects(data) {
			return minRequest.get('api/app/trainingSubjects/allList', data)
		},
		// 获取所有角色
		getRoleList(data) {
			return minRequest.get('api/app/role/getRoleList', data)
		},
		// 根据角色id获取所有角色
		getAccountByRoleList(data) {
			return minRequest.get('api/app/user/getAccountByRoleList', data)
		},
		// 训练计划直播列表
		taskList(data) {
			return minRequest.get('api/app/training/taskList', data)
		},
		// 创建roomToken
		createRoomToken(data) {
			// return minRequest.get('api/qiniu/createRoomToken', data)
			return minRequest.get('api/app/qiniu/createRoomToken', data)
		},



		// 学习管理
		// 人防知识列表
		knowledgeList(data) {
			return minRequest.post('api/app/knowledge/list', data)
		},
		// 人防知识详情
		knowledgeDetail(data) {
			return minRequest.post('api/app/knowledge/detail', data)
		},
		// 人防知识新增
		knowledgeAdd(data) {
			return minRequest.post('api/app/knowledge/add', data)
		},


		// 拉动点验
		// 列表
		kpullInspectionList(data) {
			return minRequest.post('api/app/pullInspection/list', data)
		},
		// 新增
		kpullInspectionAdd(data) {
			return minRequest.post('api/app/pullInspection/add', data)
		},
		// 编辑
		kpullInspectionUpdate(data) {
			return minRequest.post('api/app/pullInspection/update', data)
		},
		// 详情
		kpullInspectionDetail(data) {
			return minRequest.get('api/app/pullInspection/detail', data)
		},
		// 上传
		kpullInspectionResultUpload(data) {
			return minRequest.post('api/app/pullInspection/resultUpload', data)
		},
		// 装备列表
		equipmentList(data) {
			return minRequest.get('api/app/equipment/list', data)
		},
		// 拉练任务直播列表
		taskListTwo(data) {
			return minRequest.get('api/app/pullInspection/taskList', data)
		},


		// 组织架构
		// 列表
		organizList(data) {
			return minRequest.get('api/app/organizationalStructure/list', data)
		},
		// 新增
		organizAdd(data) {
			return minRequest.post('api/app/organizationalStructure/add', data)
		},
		// 编辑
		organizUpdata(data) {
			return minRequest.post('api/app/organizationalStructure/update', data)
		},
		// 详情
		organizDetail(data) {
			return minRequest.get('api/app/organizationalStructure/detail', data)
		},
		// 删除
		organizDelete(data) {
			return minRequest.get('api/app/organizationalStructure/delete', data)
		},
		// 获取当前专业队所有队员
		playersAllList(data) {
			return minRequest.get('api/app/players/allList', data)
		}








	}
}
