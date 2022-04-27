<template>
	<view class="history backBox">
		<u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					历史点验记录
				</view>
			</view>
		</u-navbar>
		<searchTop @determine='determine' :isImg='false'></searchTop>
		<view class="hisUl">
			<view class="hisLi flexCenter" v-for="(item,index) in list" :key='index' @click="goDetail">
				<view class="hisLiL">
					<view class="hisLiLRow">
						<text class="hisLiLRowLab">任务名称：</text>
						<text class="hisLiLRowTit">{{item.name}}</text>
					</view>
					<view class="hisLiLRow hisMargin">
						<text class="hisLiLRowLab">任务时间：</text>
						<text class="hisLiLRowTit">{{item.time}}</text>
					</view>
					<view class="hisLiLRow">
						<text class="hisLiLRowLab">任务结果：</text>
						<text class="hisLiLRowTit "
							:class="item.end==0?'textCol':'textCol1'">{{item.end==0?'未完成':'完成'}}</text>
					</view>
				</view>
				<image src="../../static/img/right.png" mode="" class="hisLiR"></image>
			</view>
		</view>

	</view>
</template>

<script>
	import searchTop from '@/components/searchTop';
	export default {
		components: {
			searchTop,
		},
		data() {
			return {
				list: [{
						name: '补救任务',
						time: '2021-02-12  12：00',
						end: 0,
					},
					{
						name: '补救任务',
						time: '2021-02-12  12：00',
						end: 1,
					},
					{
						name: '补救任务',
						time: '2021-02-12  12：00',
						end: 0,
					},
				],
			}
		},
		onShow() {
			console.log('history')
		},
		methods: {
			// 查询
			determine(val) {
				// console.log(val)
			},
			goDetail(){
				uni.navigateTo({
					url:'./detail'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.history {
		.hisUl {
			.hisLi {
				width: 690rpx;
				// height: 228rpx;
				background: #FFFFFF;
				border-radius: 8rpx;
				padding: 0 30rpx;
				margin: 36rpx auto 0;

				.hisLiL {
					.hisLiLRowLab {
						font-size: 28rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #999999;
					}

					.hisLiLRowTit {
						font-size: 28rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #333333;
					}
					.textCol {
						color: #FF6E6E;
					}

					.textCol1 {
						color: #007AFF;
					}
					.hisMargin{
						margin: 24rpx 0;
					}
				}


				.hisLiR {
					width: 32rpx;
					height: 32rpx;
				}
			}
		}
	}
</style>
