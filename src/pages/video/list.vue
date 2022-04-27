<template>
	<view class="trainingProgram backBox">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					{{type==1?'实时查看':'5G点验'}}
				</view>
			</view>
		</u-navbar> -->
		<!-- <searchTop @changShow='changShow' @determine='determine'></searchTop>
		<popup ref='popup' :popList='popList' @reset='reset' @determine='determine'></popup> --><view class="teamUl">
			<view class="tuLi " v-for="(item,index) in list" :key='index' @click="detail(item)">
				<view class="tuliL ">
					<view class="tuLText flexCenter">
						<text class="blueDot"></text>
						<text class="textMargR textFontsize flex2">{{item.name}}</text>
						<text class="textColor textFontsize1">
							{{item.type}}
						</text>
					</view>
					<view class="tuLText flexCenter textFontsize3">
						<text class="blueDot"></text>
						<text class="flex2 textColor ">{{item.roomName}}</text>
					</view>
				</view>
				<!-- <view class="tuliR">
				</view> -->
			</view>
		</view>
		<!-- <view class="memberUl">
			<view class="memberLi flexCenter" v-for="(item,index) in list" :key='index' @click="detail(item)">
				<view class="memberLiL">
					<view class="meLiLname">
						{{item.name}}
					</view>
					<view class="meLiLcont">
						{{item.roomName}}
					</view>
				</view>
				<view class="memberLiR">
					{{item.type}}
				</view>
			</view>
		</view> -->
		<!-- <u-loadmore :status="status" /> -->
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



			}
		},
		onShow() {
		},
		onLoad: function(val) {
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,this.type==1?'实时查看':'5G点验')
			this.type = val.type
			this.listApi()
		},
		onReachBottom() {
			// if (this.status != 'nomore') {
			// 	this.page.page++
			// 	this.listApi()
			// }
		},
		methods: {
			detail(item) {
				// if(this.type==2){
				// uni.navigateTo({
				// 	url:'./detail?id='+item.id+'&type='+this.type
				// })	
				// }else{
				uni.navigateTo({
					url: '../video/video?roomName=' + item.roomName+'&userId='+item.userId
				})
				// }
			},
			listApi() {
				if (this.type == 1) {
					this.$Api.taskList().then(res => {
						if (res.code == 200) {
								this.list = res.data
						}
					})
				} else {
					this.$Api.taskListTwo().then(res => {
						if (res.code == 200) {
								this.list = res.data
						}
					})

				}
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
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #333333;
				}
			}

		}
	}
</style>
