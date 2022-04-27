import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/api.js'
import app from '@/main.js'

Vue.use(Vuex)

// alert(0)
let data =''
if(uni.getStorageSync('userInfor')){
 data = JSON.parse(uni.getStorageSync('userInfor')) || {}
}
let VuexCop = new Vuex.Store({
	state: {
		longData: data,
		roleName: data.roleName,
		roleId: data.roleId,
		// 人员调整
		perForm: {},
		// 上传
		uploadForm: {},
		// 训练计划
		trainForm: {},
		// 选择的队伍
		teamItem: {},
		// 选择的队员
		memberList: [],
		// 任务发布
		taskForm: {},
		// 装备
		equipment: {},
		equipmentList: [],
	},
	mutations: {
		longData(state, val) {
			state.longData = val
			state.roleName = val.roleName
			state.roleId = val.roleId
		},
		// 人员
		perFormChang(state, data) {
			state.perForm = data
		},
		uploadFormChang(state, data) {
			state.uploadForm = data
		},
		trainFormChang(state, data) {
			state.trainForm = data
		},
		teamItemChang(state, data) {
			state.teamItem = data
			// 专业队重选队员清空
			// state.memberList = []
		},
		memberListChang(state, data) {
			state.memberList = data
		},
		taskFormChang(state, data) {
			state.taskForm = data
		},
		equipmentChang(state, data) {
			state.equipment = data
		},
		equipmentListChang(state, data) {
			state.equipmentList = data
		},
	},
	actions: {},
	modules: {}
})
export default VuexCop
// export  VuexCop
