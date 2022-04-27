<template>
	<view class="study">
		<!-- <u-navbar :border-bottom='false'> -->
			<view class="navTop flexCenter">
				<view class="navTitle">
					<!-- 学习管理 -->
				</view>
				<view class="navRig" @click='goRele' v-if="$store.state.roleId==1 || $store.state.roleId==2">
					发布
				</view>
			</view>
		<!-- </u-navbar> -->
		<searchTop @changShow='changShow' @determine='determine' isPlace='输入标题搜索' :isImgCop='true' :isImg='false' :isInput='false'></searchTop>
		<popup ref='popup' :popList='popList' @reset='reset' @determine='determine'></popup>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="studyUl">
			<view class="studyLi flexCenter" v-for="(item,index) in list" :key='index' @click="goDetail(item)">
				<image :src="item.url" mode="" class="hquLiL"></image>
				<view class="hquLiR">
					<view class="hquLiTitle flexCenter">
						<!-- 青年大学习 -->
						{{item.title}}
						<view class="hquLiTiTab" v-if="item.type">
							<!-- 青年知识 -->
							{{item.type}}
						</view>
					</view>
					<view class="hquLiTiCont ellipsis">
						{{item.introduction}}
						<!-- 在五四青年节来临之际，习近平委托工作人员，向中国政法大学民商经济法学院1502班团员青年致在五四青年节来临之际，习近平委托工作人员，向中国政法大学民商经济法学院1502班团员青年致… -->
					</view>
				</view>
			
			</view>
		</view>
		

		<u-loadmore :status="status" />
	</view>
</template>

<script>
	import searchTop from '@/components/searchTop';
	import popup from '@/components/popup';
	export default {
		components: {
			searchTop,
			popup,
		},
		data() {
			return {
				popList: [
					{
						title: '类型',
						ul: [],
						ulInde: null
					},
				],
				list:[],
				type:'',
				page: {
					size: 10,
					total: 48,
					page: 1,
				},
				status: 'loadmore',
				inpVal: '', //搜索框内的值

			}
		},
		onShow() {
			this.listApi()
			this.selectList()
		},
		onLoad() {
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'学习管理')
		},
		onReachBottom() {
			if (this.status != 'nomore') {
				this.page.page++
				this.listApi()
			}
		},
		methods: {
			goRele(){
				uni.navigateTo({
					url:'./release'
				})
			},
			goDetail(val){
				uni.navigateTo({
					url:'./detail?id='+val.id
				})
			},
			// 筛选弹出框
			changShow(val) {
				this.$refs.popup.show = val
			},
			// 重置
			reset() {
				this.popList.map(item => {
					item.ulInde = null
				})
				this.listApi()
			},
			// 查询
			determine(val) {
				// this.inpVal = this.$refs.searchTop.search
				// this.inpVal = val
				this.page.page = 1
				this.listApi()
			},
			listApi(){
				let itemArr=this.popList.map(item => {
					return item.ul[item.ulInde]&&item.ul[item.ulInde].id
					// console.log(item.ulInde)
				})
				let params={
					type:itemArr[0]||'',
					page:this.page.page
				}
				this.$Api.knowledgeList(params).then(res=>{
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
			// 字典
			selectList(){
				this.$Api.ZD_JSLX().then(res=>{
					if(res.code==200){
						// this.list=res.data
						this.popList[0].ul=res.data
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.study {
		.studyUl{
			padding: 16rpx 0 80rpx;
				.studyLi {
					// width: 690rpx;
					height: 232rpx;
					padding: 0 30rpx;
					border-bottom: 2rpx solid #EEEEEE;
					// background: #F9F9F9;
					// border-radius: 8rpx;
					// padding: 18rpx 22rpx 18rpx 12rpx;
					// display: flex;
					// margin-bottom: 30rpx;
			
					.hquLiL {
						width: 196rpx;
						height: 176rpx;
						margin-right: 16rpx;
						flex-shrink: 0;
					}
			
					.hquLiR {
						flex: 2;
						.hquLiTitle {
							font-size: 32rpx;
							font-family: PingFangSC-Semibold, PingFang SC;
							font-weight: 600;
							color: #565656;
							margin-bottom: 12rpx;
			
							.hquLiTiTab {
								min-width: 120rpx;
								padding: 0 10rpx;
								height: 38rpx;
								background: rgba(0, 122, 255, 0.1);
								border-radius: 4rpx;
								font-size: 24rpx;
								font-family: PingFangSC-Regular, PingFang SC;
								font-weight: 400;
								color: #007AFF;
								text-align: center;
								line-height: 38rpx;
								// flex-shrink: 0;
							}
						}
			
						.hquLiTiCont {
							font-size: 28rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #565656;
							line-height: 40rpx;
						}
					}
				}
			
		}
	}
</style>
