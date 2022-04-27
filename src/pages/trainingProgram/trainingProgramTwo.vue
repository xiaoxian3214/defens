<template>
	<view class="trainingProgram backBox">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					训练计划
				</view>
			</view>
		</u-navbar> -->
		<!-- <searchTop @changShow='changShow' @determine='determine'></searchTop>
		<popup ref='popup' :popList='popList' @reset='reset' @determine='determine'></popup> -->
		<view class="memberUl">
			<view class="memberLi flexCenter" v-for="(item,index) in list" :key='index' @click="detail(item)">
				<view class="leftCenter">
					<image src="../../static/img/time.png" mode=""></image>
					<view class="tiemBox">
						{{item.startTime.split(" ")[1]}}
					</view>
				</view>
				<view class="rightCenter">
					<view class="topCenter">
						{{item.professionalTeam}}
					</view>
					<view class="bootomCenter">
						<view class="">
							{{item.trainingSubject}}
						</view>
						<view class="">
							{{item.startTime.split(" ")[0]}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-loadmore :status="status" />
	</view>
</template>

<script>
	// import searchTop from '@/components/searchTop';
	// import popup from '@/components/popup';
	export default {
		components: {
			// searchTop,
			// popup
		},
		data() {
			return {
				type: '',
				popList: [{
						title: '专业队',
						ul: ['专业队1', '专业队2', '专业队3', '专业队4', ],
						ulInde: null
					},
					{
						title: '训练科目',
						ul: ['科目一', '科目二', '科目三', '科目四', ],
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
				status: 'loadmore',
				name: '', //搜索框内的值
				id: '',



			}
		},
		onShow() {
			this.listApi()
		},
		onLoad: function(val) {
			this.type = val.type
			this.id = val.id
			// console.log(this.id, 123)
			let pagePath = this.$mp.page.route
			this.$myMD.userReporting(pagePath, '训练计划')
		},
		onReachBottom() {
			if (this.status != 'nomore') {
				this.page.page++
				this.listApi()
			}
		},
		methods: {
			detail(item) {
				// if(this.type==1){
				// 	uni.navigateTo({
				// 		url:'../upload/upload?id='+item.id
				// 	})
				// }else{
				// if(this.type!=2){
				uni.navigateTo({
					url: './detail?id=' + item.id + '&type=' + this.type
				})
				// }else{
				// uni.navigateTo({
				// 	url:'../video/video?roomName='+item.roomName
				// })	
				// }
				// }
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
					page: this.page.page,
					planId: this.id,
					// name:this.name
				}
				this.status = 'loading'
				this.$Api.trainingList(params).then(res => {
					if (res.code == 200) {
						if (this.page.page == 1) {
							this.list = res.page.records
						} else {
							this.list = this.list.concat(res.page.records)
						}
						this.page.page = res.page.current;
						this.page.total = res.page.total;
						this.page.size = res.page.size;
						if (res.page.records.length < 10) {
							this.status = 'nomore'
						} else {
							this.status = 'loadmore'
						}
					}
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.trainingProgram {
		.memberUl {
			background-color: #FAFAFA;
			border-top: 2rpx solid #FBFBFB;

			.memberLi {
				width: 690rpx;
				margin: 30rpx 30rpx;
				height: 176rpx;
				// padding: 28rpx 30rpx 40rpx 48rpx;
				// border-bottom: 2rpx solid #FBFBFB;
				background: #FFFFFF;

				.leftCenter {
					width: 124rpx;
					height: 70rpx;
					border-right: 1px solid #F5F5F5;
					text-align: center;

					image {
						width: 26rpx;
						height: 24rpx;
					}

					.tiemBox {
						font-size: 32rpx;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 1000;
						color: #007AFF;
					}
				}

				.rightCenter {
					width: 566rpx;
					padding: 0 28rpx;

					.topCenter {
						margin-bottom: 20rpx;
						height: 44rpx;
						font-size: 32rpx;
						font-family: PingFangSC-Medium, PingFang SC;
						// font-weight: 1000;
						color: #333333;
						line-height: 44rpx
					}

					.bootomCenter {
						// text-align: right;
						display: flex;
						align-items: center;
						justify-content: space-between;
						view{
							font-size: 24rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #333333;
								line-height: 34rpx;
						}
					}
				}
			}

		}
	}
</style>
