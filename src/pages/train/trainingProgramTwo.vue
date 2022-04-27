<template>
	<view class="trainingProgram backBox">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					训练计划发布与管理
				</view>
			</view>
		</u-navbar> -->
		<!-- <searchTop @changShow='changShow' @determine='determine'></searchTop>
		<popup ref='popup' :popList='popList' @reset='reset' @determine='determine'></popup> -->
		<deleModal ref='deleModal' @delConfirm='delConfirm'></deleModal>
		<view class="teamUl">
			<view class="tuLi" v-for="(item,index) in list" :key='index'>
				<view class="tuliL">
					<view class="meLiLname flexCenter">
						<text class="blueDot"></text>
						<text class="flex2">{{item.professionalTeamName}}</text>
						<view class=" ">
							{{item.time}}
						</view>
					</view>
					<view class="meLiLcont flexCenter1">
						<text class="blueDot"></text>
						{{item.subjec}}
					</view>
				</view>
				<!-- v-if="roleId==1?item.isCity==1:true" -->
				<view class="tuliR flexEnd">
					<view class="tuliRli flexCenter1" @click='add(item)' v-permission="[1,2]">
						<image src="../../static/img/edit.png" mode="" class="tuliRImg">
						</image> 编辑
					</view>
					<view class="tuliRli flexCenter1 tuliRlicolor" @click='dele(item)' v-permission="[1,2]">
						<image src="../../static/img/dele.png" mode="" class="tuliRImg"></image>
						删除
					</view>
					<view class="tuliRli flexCenter1 " @click='detail(item)' v-permission="[4]">
						详情
					</view>
				</view>
			</view>
		</view>
		<!-- <image src="../../static/img/add.png" mode="" class="imgAdd" @click='add()'></image> -->
		<u-loadmore :status="status" />
	</view>
</template>

<script>
	// import searchTop from '@/components/searchTop';
	// import popup from '@/components/popup';
	import deleModal from '@/components/deleModal';
	export default {
		components: {
			deleModal
			// searchTop,
			// popup
		},
		data() {
			return {
				// 1 市人防办 2 县人防办 3 教员 4 联络员
				roleId: uni.getStorageSync('roleId'),
				popList: [{
						title: '专业队',
						ul: [],
						ulInde: null
					},
					{
						title: '训练科目',
						ul: [],
						ulInde: null
					},
				],
				list: [],
				deleItem: {},
				page: {
					size: 10,
					total: 48,
					page: 1,
				},
				status: 'nomore',
				name: '', //搜索框内的值
				professionalTeamId: '',
				planId: ''

			}
		},
		onShow() {
			this.$store.commit('trainFormChang', {})
			this.$store.commit('teamItemChang', {})
			this.$store.commit('memberListChang', [])
			this.listApi()
		},
		onLoad: function(val) {
			let pagePath = this.$mp.page.route
			this.$myMD.userReporting(pagePath, '训练计划发布与管理')
			this.planId = val.planId || ''
			this.professionalTeamId = val.professionalTeamId || ''
		},
		onReachBottom() {
			// if (this.status != 'nomore') {
			// 	this.page.page++
			// 	this.listApi()
			// }
		},
		methods: {
			add(item, type) {
				// console.log(item)
				// uni.navigateTo({
				// 	url:''
				// })
				if (item) {
					uni.navigateTo({
						url: './train?id=' + item.id + '&planId=' + this.planId
					})
				} else {
					uni.navigateTo({
						url: './train?planId=' + this.id
					})
				}

			},

			detail(item, type) {
				// console.log(123)
				// uni.navigateTo({
				// 	url:'./trainingProgramTwo?id=' + item.id
				// })
				// uni.navigateTo({
				// 	url: './trainingProgramTwo?planId=' + this.id + '&professionalTeamId=' + item.id
				// })
				if (item) {
					uni.navigateTo({
						url: './trainDetail?id=' + item.id + '&planId=' + this.planId
					})
				} else {
					uni.navigateTo({
						url: './trainDetail?planId=' + this.id
					})
				}
			},
			// 删除
			dele(item) {
				// console.log(item)
				this.deleItem = item,
					this.$refs.deleModal.delShow = true
			},
			delConfirm() {
				// console.log('确认删除')
				let params = {
					id: this.deleItem.id
				}
				// console.log(params)
				// return
				this.$Api.trainingDelete(params).then(res => {
					if (res.code == 200) {
						this.page.page = 1
						this.listApi()
						this.$uToast.show('删除成功', 'success')
					} else {
						this.$uToast.show(res.message, 'error')
					}
				})
			},
			// // 筛选弹出框
			// changShow(val) {
			// 	this.$refs.popup.show = val
			// },
			// // 重置
			// reset() {
			// 	this.popList.map(item => {
			// 		item.ulInde = null
			// 	})
			// },
			// // 查询
			// determine(val) {
			// 	// console.log(val)
			// 	this.name = val
			// 	this.page.page = 1
			// 	this.listApi()
			// 	// this.popList.map(item => {
			// 	// 	// console.log(item.ulInde)
			// 	// })
			// },
			listApi() {
				// console.log(params)
				let params = {
					planId: this.planId,
					professionalTeamId: this.professionalTeamId,
					// page:this.page.page,
					// name:this.name,
				}
				// this.status = 'loading'
				this.$Api.trainingAllList(params).then(res => {
					if (res.code == 200) {
						// if (this.page.page == 1) {
						if (res.data.length > 0) {
							this.list = res.data[0].trainingList
						}
						// } else {
						// 	this.list = this.list.concat(res.data)
						// }
						// this.page.page = res.page.current;
						// this.page.total = res.page.total;
						// this.page.size = res.page.size;
						// if (res.data.length < 10) {
						// 	this.status = 'nomore'
						// } else {
						// 	this.status = 'loadmore'
						// }
					}
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.trainingProgram {
		.memberUl {
			background-color: #FFFFFF;
			border-top: 2rpx solid #FBFBFB;

			.memberLi {
				width: 750rpx;
				height: 144rpx;
				padding: 28rpx 30rpx 40rpx 48rpx;
				border-bottom: 2rpx solid #FBFBFB;

				.memberLiL {}

				.memberLiR {
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #333333;

					.memberLiRImg {
						margin-left: 30rpx;

						.tuliRImg {
							width: 32rpx;
							height: 32rpx;
						}

						.edit {
							margin-bottom: 26rpx;
						}
					}
				}
			}

		}

		.meLiLname {
			font-size: 28rpx;
			font-family: SourceHanSansCN-Medium, SourceHanSansCN;
			font-weight: 500;
			color: #333333;
			margin-bottom: 16rpx;

			.meLiLsex {
				margin-left: 30rpx;
			}
		}

		.meLiLcont {
			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #666666;
		}
	}
</style>
