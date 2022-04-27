<template>
	<view class="train">
		<view class="detailUl">
			<view class="detailUlLi" style="border-bottom:none">
				<view class="detailUlLiL">
					<text class="redTs">*</text>
					参训人数
				</view>
				<view class="detailUlLiR flexCenter">
					<view class="iulRtex iulRtexColAct">
						<!-- {{form.numberPerson?form.numberPerson:'请选择'}} -->
						{{form.numberPerson?form.numberPerson:0}}
					</view>
					<!-- <image src="../../static/img/right.png" mode="" class="iulRrig"></image> -->
				</view>
			</view>

		</view>
		<view class="detailUl">
			<view class="detailUlLi" style="border-bottom:none" @click="goMemberSelect">
				<view class="detailUlLiL">
					<text class="redTs">*</text>
					参训队员
				</view>
				<view class="detailUlLiR flexCenter">
					<view class="iulRtex" :class="form.list&&form.list.length>0?'iulRtexColAct':'iulRtexCol'">
						{{form.list&&form.list.length>0?'':'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<view class="deUlLimember flexCenter">
				<text class="deUlLimeText" v-for="(item,index) in form.list" :key='index'>{{item.name}}</text>
			</view>
		</view>
		<view class="detailUl">
			<view class="detailUlLi" style="border-bottom:none" @click="gatherSelect">
				<view class="detailUlLiL">
					<text class="redTs">*</text>
					队长（视频采集人员）
				</view>
				<view class="detailUlLiR flexCenter">
					<view class="iulRtex" :class="form.gatherPersonName?'iulRtexColAct':'iulRtexCol'">
						{{form.gatherPersonName?form.gatherPersonName:'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
				<u-select v-model="showGath" :list="form.list" label-name='name' value-name='id' @confirm='confirmGath'>
				</u-select>
			</view>

		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>

		<!-- <view  class='addList' @click='addList'>
					<image src="../../static/img/addList.png" mode="" class="addListImg"></image>
					新增列表
					</view> -->
		<!-- <u-button type="primary" class='addDeter' @click='trainCon'>发布</u-button> -->
		<u-button type="primary" class='addDeter' @click='trainCon'>确定</u-button>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import timePop from '@/components/timePop';
	import popSelect from '@/components/popSelect';
	export default {
		components: {
			timePop,
			popSelect,
		},
		data() {
			return {
				// 1 市人防办 2 县人防办 3 教员 4 联络员
				roleId: uni.getStorageSync('roleId'),
				id: '',
				createUserId: '',
				planId: '',
				teamId: '',
				trainingSubjects: [],
				accountByRoleList: [],
				form: {},
				showGath: false,
			}
		},
		onLoad: function(val) {
			let pagePath = this.$mp.page.route
			this.$myMD.userReporting(pagePath, '训练计划发布与管理')
			this.planId = val.planId || ''
			this.teamId = val.teamId || ''
			// console.log(this.form) 
			if (val.id) {
				this.id = val.id || ''
				this.detail()
			}
		},
		onShow() {
			this.form = this.$store.state.trainForm
			if (this.$store.state.memberList) {
				this.form.list = this.$store.state.memberList
			}
			// if(this.$store.state.teamItem.id){
			// this.form.professionalTeamId = this.$store.state.teamItem.id
			// this.form.professionalTeam = this.$store.state.teamItem.name
			// }
			this.$forceUpdate()
		},
		methods: {
			// 队员
			goMemberSelect() {
				this.$store.commit('trainFormChang', this.form)
				uni.navigateTo({
					url: '../../components/memberSelect?id=' + this.teamId
				})
			},
			// 队长（视频采集人员）
			gatherSelect() {
				if (this.form.list && this.form.list.length > 0) {
					this.showGath = true
				} else {
					this.$uToast.show('请先选择参训队员', 'error')
				}

			},
			confirmGath(val) {
				// console.log(val)
				this.form.gatherPersonId = val[0].value
				this.form.gatherPersonName = val[0].label
			},
			// 发布 确定
			trainCon() {
				let arr = []
				if (this.form.list && this.form.list.length > 0) {
					this.form.list.forEach(item => {
						arr.push({
							id: item.id,
							name: item.name
						})
					})
				}
				this.form.professionalTeamPersonInformationList = JSON.stringify(arr)
				// this.form.teamId = this.teamId
				// this.form.planId = this.planId
				// console.log(this.form)
				// return
				// if (this.id) {
				// 	params.id = this.id
				// 	this.edit(params)
				// } else {
				this.add(this.form)
				// }
				// uni.navigateBack()
			},
			add(params) {
				this.$Api.updatePersonList(params).then(res => {
					if (res.code == 200) {
						this.$uToast.show('编辑成功', 'success')
						uni.navigateBack()
					} else {
						this.$uToast.show(res.message, 'error')
					}
				})
			},
			detail() {
				this.$Api.trainingDetail({
					id: this.id                                                                                                                                                                                                                                                                                                                                                    
				}).then(res => {
					if (res.code == 200) {
						this.form.list = res.data.list
						this.form.gatherPersonId = res.data.gatherPersonId
						this.form.gatherPersonName = res.data.gatherPersonName
						this.form.numberPerson = res.data.numberPerson
						this.form.teamId = this.teamId||res.data.professionalTeamId
						this.form.planId = this.planId||res.data.planId
						// console.log(this.form.numberPerson)
						this.$forceUpdate()
					}
				})
			},
		}
	}
</script>
<style lang="scss" scoped>
	.train {
		padding-bottom: 120rpx;

		.addList {
			width: 276rpx;
			height: 72rpx;
			border-radius: 8rpx;
			border: 2rpx solid #007AFF;
			font-size: 28rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #007AFF;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 34rpx auto 0;

			.addListImg {
				width: 32rpx;
				height: 32rpx;
				margin-right: 20rpx;
			}
		}
	}
</style>
