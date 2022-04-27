<template>
	<view class="history backBox">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					历史点验记录
				</view>
			</view>
		</u-navbar> -->
		<searchTop @determine='determine' :isImg='false' isPlace='请输入专业队名称'></searchTop>
		<view class="hisUl">
			<view class="hisLi flexCenter" v-for="(item,index) in list" :key='index' @click="goDetail(item)">
				<view class="hisLiL">
					<view class="hisLiLRow">
						<text class="blueDot"></text>
						<text class="hisLiLRowLab">任务名称：</text>
						<text class="hisLiLRowTit">{{item.taskName}}</text>
					</view>
					<view class="hisLiLRow hisMargin">
						<text class="blueDot"></text>
						<text class="hisLiLRowLab">任务时间：</text>
						<text class="hisLiLRowTit">{{item.assemblyDate}}</text>
					</view>
					<view class="hisLiLRow">
						<!-- <text class="hisLiLRowLab">任务结果：</text> -->
						<text class="blueDot"></text>
						<text class="hisLiLRowLab">任务状态：</text>
						<text class="hisLiLRowTit "
							:class="item.taskStatus==0?'textCol':'textCol1'">{{item.taskStatus==0?'未完成':'完成任务'}}</text>
					</view>
				</view>
				<image src="../../static/img/right.png" mode="" class="hisLiR"></image>
			</view>
		</view>
		<u-loadmore :status="status" />

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
				list: [],
				page: {
					size: 10,
					total: 48,
					page: 1,
				},
				status: 'loadmore',
				inpVal:'',
			}
		},
		onShow() {
			// console.log('his')
		},
		onLoad:function(val){
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'历史点验记录')
			this.type=val.type
			this.listApi()
			// console.log(this.type)
		},
		onReachBottom() {
			if (this.status != 'nomore') {
				this.page.page++
				this.listApi()
			}
		},
		methods: {
			// 查询
			determine(val) {
				this.inpVal=val
				this.page.page=1
				this.listApi()
				// console.log(val)
			},
			goDetail(item){
				uni.navigateTo({
					// url:'./detail'
					url:'../taskAction/detail?type=2&id='+item.id
					})
			},
			listApi(){
				// 0：全部 1：任务计划列表 2：历史任务计划列表
				let parmas={
					type:2,
					page:this.page.page,
					name:this.inpVal,
				}
				this.$Api.kpullInspectionList(parmas).then(res=>{
					if(res.code==200){
						let resArr=res.page.records
						if (this.page.page == 1) {
							this.list = resArr
						} else {
							this.list = this.list.concat(resArr)
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
			},
		}
	}
	
</script>

<style lang="scss" scoped>
	.history {
		padding-bottom: 140rpx;
		.hisUl {
			margin-bottom: 40rpx;
			.hisLi {
				width: 690rpx;
				min-height: 228rpx;
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
