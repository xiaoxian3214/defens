<template>
	<view class="task">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					任务发布
				</view>
			</view>
		</u-navbar> -->
		<!-- 联络员无新增任务权限，无删除、直播权限。编辑只可选择队员，队长（视频采集人员），装备，对其他内容无编辑权限。 -->
		<timePop ref='timePop' @timeDet='timeDet'></timePop>
		<view class="detailUl">
			<view class="detailUlLi">
				<view class="detailUlLiL">
					<text class="redTs">*</text>
					任务名称
				</view>
				<view class="detailUlLiR flexCenter">
					<u-input v-model="form.taskName" type="text" placeholder='请输入' class='iulrInput'
						:disabled='roleId==4?true:false' />
				</view>
			</view>
			<view class="detailUlLi" @click="roleId!=4?$refs.timePop.timeShow=true:''">
				<view class="detailUlLiL">
					<text class="redTs">*</text>
					集结时间
				</view>
				<view class="detailUlLiR flexCenter">
					<!-- <u-input v-model="form.c" type="text" placeholder='请输入' class='iulrInput' /> -->
					<view class="iulRtex" :class="form.assemblyDate?'iulRtexColAct':'iulRtexCol'">
						{{form.assemblyDate?form.assemblyDate:'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					<text class="redTs">*</text>
					集结地点
				</view>
				<view class="detailUlLiR flexCenter">
					<u-input v-model="form.assemblyArea" type="text" placeholder='请输入' class='iulrInput'
						:disabled='roleId==4?true:false' />
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi" @click="roleId!=4?goTeamSel(0):''">
				<view class="detailUlLiL">
					<text class="redTs">*</text>
					专业队
				</view>
				<view class="detailUlLiR flexCenter">
					<view class="iulRtex" :class="form.professionalTeamName?'iulRtexColAct':'iulRtexCol'">
						{{form.professionalTeamName?form.professionalTeamName:'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<view class="detailUlLi" @click="goTeamSel(1)">
				<view class="detailUlLiL">
					<text class="redTs">*</text>
					专业队队员
				</view>
				<!-- {{form.c?form.c:'请选择'}} -->
				<view class="detailUlLiR flexCenter">
					<view class="iulRtex"
						:class="form.memberList&&form.memberList.length>0?'iulRtexColAct':'iulRtexCol'">
						<!-- {{form.professionalTeamPersonInformationId?form.professionalTeamPersonInformationId:'请选择'}} -->
						<view class="" v-if="form.memberList&&form.memberList.length>0">
							<text v-for="(item,index) in form.memberList" class="iulRtexItem">{{item.name}}</text>
						</view>
						<view class="" v-else>
							请选择
						</view>
					</view>
					<!-- <view class="deUlLimember flexCenter">
				<text class="deUlLimeText" v-for="(item,index) in form.memberList" :key='index'>{{item.name}}</text>
			</view> -->
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<!-- @click="equChang" -->
			<view class="detailUlLi" @click="goTeamSel(2)">
				<view class="detailUlLiL">
					<text class="redTs">*</text>
					携带装备情况
				</view>
				<view class="detailUlLiR flexCenter">
					<!-- <view class="iulRtex" :class="form.equipmentList.name?'iulRtexColAct':'iulRtexCol'">
						{{form.equipmentList.name?form.equipmentList.name:'请选择'}}
						{{form.equipmentList.number?'x' +form.equipmentList.number:''}}
					</view> -->
					<!-- <view class="iulRtex" :class="form.professionalTeamName?'iulRtexColAct':'iulRtexCol'">
						{{form.professionalTeamName?form.professionalTeamName:'请选择'}}
					</view> -->
					<view class="iulRtex"
						:class="form.equipmentList&&form.equipmentList.length>0?'iulRtexColAct':'iulRtexCol'">
						<view class="iulRtexBox " v-if="form.equipmentList&&form.equipmentList.length>0">
							<view v-for="(item,index) in form.equipmentList" class="iulRtexItem">{{item.name}}
								x{{item.num}}</view>
						</view>
						<view class="" v-else>
							请选择
						</view>
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<!-- <u-popup v-model="equShow" mode='bottom' border-radius='32' height='886'>
				<view class="expTopBox">
					<view class="expTop flexCenter">
						<text class="expTopimg"></text>
						选择装备
						<image src="../../static/img/cancel.png" mode="" class="expTopimg" @click="equShow=false">
						</image>
					</view>
					<picker-view :indicator-style="indicatorStyle" :value="value" @change="bindChange"
						class="picker-view">
						<picker-view-column>
							<view class="item" v-for="(item,index) in equiList" :key="index">{{item.name}}</view>
						</picker-view-column>
					</picker-view>
					<u-button type="primary" class='addDeterCop' @click='goTeamSel(2)'>确定</u-button>
				</view>
			</u-popup> -->
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi" @click="personShow=true">
				<view class="detailUlLiL">
					<text class="redTs">*</text>
					队长（视频采集人员）
				</view>
				<view class="detailUlLiR flexCenter">
					<!-- <u-input v-model="form.gatherPersonName" type="select" /> -->
					<!-- <u-input v-model="form.c" type="text" placeholder='请输入' class='iulrInput' /> -->
					<view class="iulRtex" :class="form.gatherPersonName?'iulRtexColAct':'iulRtexCol'">
						{{form.gatherPersonName?form.gatherPersonName:'请选择'}}
					</view>
					<u-select v-model="personShow" :list="form.memberList" label-name='name' value-name='id' @confirm='conPerson'></u-select>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					<text class="redTs">*</text>
					训练人数
				</view>
				<view class="detailUlLiR flexCenter">
					<u-input v-model="form.numberPerson" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
		</view>
		<u-button type="primary" class='addDeter' @click='trainCon'>{{idCop?'保存':'发布'}} </u-button>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import timePop from '@/components/timePop';
	import {
		arrFilter
	} from '@/utils/utils.js';
	export default {
		components: {
			timePop,
		},
		props: ['idCop'],
		data() {
			return {
				// 1 市人防办 2 县人防办 3 教员 4 联络员
				roleId: uni.getStorageSync('roleId'),
				form: {
					memberList: [],
					equipmentList: [],
					teamItem: {},
					equipment: {},
				},
				equShow: false,
				equiList: [],
				// equList:['大炮','手枪','狙击枪','突击步枪','散弹枪','电棍'],
				equList: [{
					id: 1,
					name: '大炮'
				}, {
					id: 2,
					name: '手枪'
				}, {
					id: 3,
					name: '狙击枪'
				}, {
					id: 4,
					name: '突击步枪'
				}, {
					id: 5,
					name: '散弹枪'
				}, {
					id: 6,
					name: '电棍'
				}],
				value: [0],
				indicatorStyle: `height: 80rpx;lineHeight:80rpx`,
				index: 0,
				personShow:false,

			}
		},
		watch: {
			idCop: function(newId) {
				console.log(newId)
			}
		},
		mounted() {
			// console.log(this.idCop, 124)
			if (this.idCop) {
				// this.form = this.$store.state.taskForm
				// this.form.memberList = this.$store.state.memberList
				// if (this.$store.state.teamItem.id) {
				// 	this.form.professionalTeamId = this.$store.state.teamItem.id
				// 	this.form.professionalTeamName = this.$store.state.teamItem.name
				// }
				// this.form.equipmentList = this.$store.state.equipmentList
				// console.log(this.form.equipmentList,1231)
				this.detail()
				// console.log(this.form.equipmentList,1232)
			}
		},
		onShow() {
			// console.log(this.$store.state.uploadForm)
			this.showBack()
		},
		onLoad() {
			let pagePath = this.$mp.page.route
			this.$myMD.userReporting(pagePath, '任务发布')
			// this.selectList()
		},
		methods: {
			conPerson(val){
				// console.log(val)
				this.form.gatherPersonName=val[0].label
				this.form.gatherPersonId=val[0].value
			},
			showBack() {
				// console.log(this.$store.state.taskForm,1)
				this.form = this.$store.state.taskForm
				this.form.memberList = this.$store.state.memberList
				if (this.$store.state.teamItem.id) {
					this.form.professionalTeamId = this.$store.state.teamItem.id
					this.form.professionalTeamName = this.$store.state.teamItem.name
				}
				this.form.equipmentList = this.$store.state.equipmentList
				// console.log(this.form.equipmentList,1233)
				// this.form.teamItem = this.$store.state.teamItem
				// this.form.equipment = this.$store.state.equipment
				// this.form.equipmentNum=this.$store.state.equipment.number
				// console.log(this.$store.state.equipment)
				this.$forceUpdate()

			},
			// 发布
			trainCon() {
				// this.form={
				// 	memberList:[],
				// 	teamItem:{},
				// 	equipment:{}
				// }

				// ...this.form
				let isTop = false
				let memberList
				let equipmentList
				if (this.form.memberList && this.form.memberList.length > 0) {
					// console.log(this.form.memberList)
					let arr = this.form.memberList.map(item => {
						return item.id
					})
					memberList = arr.join()
				} else {
					this.$uToast.show('请选择队员', 'error')
					return
				}
				if (this.form.equipmentList && this.form.equipmentList.length > 0) {
					let arr = []
					this.form.equipmentList.map(item => {
						if (!item.num) {
							this.$uToast.show('请填写装备数量', 'error')
							isTop = true
							return
						} else {
							let por = {
								id: item.id,
								num: item.num
							}
							arr.push(por)
						}
					})
					equipmentList = JSON.stringify(arr)
				} else {
					this.$uToast.show('请选择装备', 'error')
					return
				}
				if (isTop) {
					return
				}
				let params = {
					taskName: this.form.taskName,
					assemblyDate: this.form.assemblyDate,
					assemblyArea: this.form.assemblyArea,
					professionalTeamId: this.form.professionalTeamId,
					professionalTeamPersonInformationList: memberList,
					equipmentList: equipmentList,
					gatherPersonId: this.form.gatherPersonId,
					numberPerson: this.form.numberPerson,
					// id
					// num

				}
				// console.log(params)
				if (this.idCop) {
					params.id = this.idCop
					this.kpullInspectionUpdate(params)
				} else {
					this.kpullInspectionAdd(params)
				}
			},
			kpullInspectionAdd(params) {
				this.$Api.kpullInspectionAdd(params).then(res => {
					if (res.code == 200) {
						this.$uToast.show('新增成功', 'success')
						uni.navigateBack()
					} else {
						this.$uToast.show(res.message, 'error')
					}
				})
			},
			kpullInspectionUpdate(params) {
				this.$Api.kpullInspectionUpdate(params).then(res => {
					if (res.code == 200) {
						this.$uToast.show('编辑成功', 'success')
						uni.navigateBack()
					} else {
						this.$uToast.show(res.message, 'error')
					}
				})
			},
			// 确定时间
			timeDet(dat) {
				this.form.assemblyDate = dat.y + '-' + dat.m + '-' + dat.d + ' ' + dat.h + ':' + dat.mi
				this.$forceUpdate()
			},
			// 选择装备
			equChang() {
				// uni.navigateTo({
				// 	url: './fillNumber'
				// })
				// this.equShow = true;
				// if (this.form && this.form.equipment) {
				// 	this.equList.forEach((item,index)=>{
				// 		if(this.form&&this.form.equipment&&item.id==this.form.equipment.id){
				// 			return this.value = [index]
				// 		}
				// 	})
				// }
			},
			bindChange: function(e) {
				this.index = e.detail.value[0]

				// console.log(this.equItem,e.detail.value)
			},
			goTeamSel(type) {
				this.$store.commit('taskFormChang', this.form)
				// console.log(this.form,0)
				if (type == 0) {
					// 专业队
					let isCityUser = this.roleId == 1 ? 1 : 0
					uni.navigateTo({
						url: '../expansion/list?type=' + 3 + '&isCityUser=' + isCityUser
					})
				} else if (type == 1) {
					// 队员
					// this.$store.commit('taskFormChang', this.form)
					// console.log(this.form.teamItem)
					if (!this.form.professionalTeamId) {
						this.$refs.uToast.show({
							title: '请先选择专业队',
							type: 'error',
						})
						return
					}
					uni.navigateTo({
						url: '../../components/memberSelect?id=' + this.form.professionalTeamId
					})
				} else if (type == 2) {
					// 装备 填写数量
					// console.log(this.equItem)
					// this.$store.commit('taskFormChang', this.form)
					// var equipment = this.equList[this.index]
					// this.equShow = false
					// console.log(1234)
					uni.navigateTo({
						// url: './equipmentList'
						url: '/pages/task/equipmentList'
					})
				}
			},
			detail() {
				// 装备
				this.$Api.equipmentList().then(res => {
					if (res.code == 200) {
						this.equiList = res.data
						// this.form.equipmentList.name=arrFilter(this.eduList,this.form.equipmentList.id).name
					}
				})
				// 专业队
				this.$Api.teamAllList().then(res => {
					if (res.code == 200) {
						this.teamList = res.data
					}
				})
				this.$Api.kpullInspectionDetail({
					id: this.idCop
				}).then(res => {
					if (res.code == 200) {
						this.form = res.data
						// this.form.professionalTeamName = arrFilter(this.teamList, this.form.professionalTeamId)
						// 	.name
						// console.log(this.form.professionalTeamName,this.teamList, this.form.professionalTeamId)
						// this.form.memberList=
						// this.form.equipmentList.name = arrFilter(this.equiList, this.form.equipmentList[0].id).name
					}
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.task {}
</style>
