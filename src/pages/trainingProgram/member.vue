<template>
	<view class="list backBox">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					参训队员
				</view>
			</view>
		</u-navbar> -->
		<!-- <searchTop @determine='determine' :isImg='false'></searchTop> -->
		<view class="memberUl">
			<view class="memberLi flexCenter" v-for="(item,index) in list" :key='index'>
				<view class="memberLiL">
					<view class="meLiLname">
						{{item.name}}
						<text class="meLiLsex meLiLcont">
							{{item.sex}}
						</text>
					</view>
					<view class="meLiLcont">
						{{item.cont}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import searchTop from '@/components/searchTop';
	export default {
		components: {
			// searchTop,
		},
		data() {
			return {
				id:'',
				type: '',
				list: [],
				expShow: false,
				expaList: ['一倍', '二倍', '三倍', '四倍', '五倍', '六倍', '七倍'],
				value: [3],
				indicatorStyle: `height: 80rpx;lineHeight:80rpx`,
				expaItem: [3],
				form: {}, //上传数据占存



			}
		},
		onLoad:function(val){
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'参训队员')
			// if(val.id){
				this.id=val.id
				this.listApi()
			// }
		},
		mounted() {
			// console.log(12)

		},
		methods: {
			listApi() {
				// console.log(params)
				// let params={
				// 	teamId:this.id,
				// 	state:1
				// }
				// this.status = 'loading'
				// this.$Api.traPlayersList(params).then(res => {
				// 	if (res.code == 200) {
				// 			this.list = res.data
				// 	}
				// })
				this.$Api.trainingDetail({
					id: this.id
				}).then(res => {
					if (res.code == 200) {
						this.list = res.data.list
					}
				})
			},
			// 查询
			determine(val) {
				// console.log(val)
				this.popList.map(item => {
					// console.log(item.ulInde)
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.list {
		.memberUl {
			background-color: #FFFFFF;

			// border-top: 2rpx solid #FBFBFB;
			.memberLi {
				width: 750rpx;
				height: 144rpx;
				// padding: 28rpx 30rpx 40rpx 48rpx;
				padding: 0 30rpx 0 48rpx;
				border-bottom: 2rpx solid #F8F8F8;

				.memberLiL {
					.meLiLname {
						font-size: 28rpx;
						font-family: SourceHanSansCN-Medium, SourceHanSansCN;
						font-weight: 500;
						color: #333333;
						margin-bottom: 4rpx;

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

				.memberLiR {
					.memRimg {
						width: 28rpx;
						height: 24rpx;
					}
				}
			}
		}

	}
</style>
