<template>
	<view class="taskAction backBox">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					行动任务
				</view>
			</view>
		</u-navbar> -->
		<searchTop @determine='determine'  :isImg='false' isPlace='请输入专业队名称'></searchTop>
		<view class="teamUl">
			<view class="tuLi" v-for="(item,index) in list" :key='index'>
				<view class="tuliL" @click="detail(item)">
					<view class="meLiLname flexCenter">
						<text class="blueDot"></text>
						<text class="flex2">{{item.taskName}}</text>
						<text>{{item.assemblyDate}}</text>
					</view>
					<view class="meLiLcont flexCenter1">
						<text class="blueDot"></text>
						{{item.professionalTeam}}
					</view>
				</view>
				<!-- 人防办和联络员可编辑，教员不行   v-if="roleId==1?item.isCity==1:true"-->
				<view class="tuliR flexEnd" v-permission="[1,2,4]"	>
					<view class="tuliRli flexCenter1 tuliRlicolor2" @click='inform(item)' v-permission="[1,2]" 	v-if="item.informStatus == 1 || item.informStatus == 3">
						<u-icon name="bell" color="#FFD767" size="38" class="tuliRImg"></u-icon>
					 通知
					</view>
					<view class="tuliRli flexCenter1" @click='edit(item)'>
						<image src="../../static/img/edit.png" mode="" class="tuliRImg">
						</image> 编辑
					</view>

				</view>
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
				// 1 市人防办 2 县人防办 3 教员 4 联络员
				roleId: uni.getStorageSync('roleId'),
				type:'',
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
			this.listApi()
		},
		onLoad:function(val){
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'行动任务')
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
			// 通知
			inform(item){
				// console.log(item,'通知')
				this.$Api.pullInspectioninform({id:item.id}).then(res=>{
					if (res.code == 200) {
						this.$uToast.show('通知成功', 'success')
					} else {
						this.$uToast.show(res.message, 'error')
					}
				})
			},
			edit(item){
				uni.navigateTo({
					url:'./edit?id='+item.id
				})
				
			},
			// 查询
			determine(val) {
				this.inpVal=val
				this.page.page=1
				this.listApi()
			},
			detail(item){
				// if(this.type!=2){
				uni.navigateTo({
					url:'./detail?type='+this.type+'&id='+item.id
				})
				// }else{
				// uni.navigateTo({
				// 	url:'../video/video?roomName='+item.roomName
				// })
				// }
			},
			listApi(){
				// 0：全部 1：任务计划列表 2：历史任务计划列表
				let parmas={
					type:1,
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
.taskAction{
	.memberUl{
		background-color: #FFFFFF;
		border-top: 2rpx solid #FBFBFB;
		.memberLi{
			width: 750rpx;
			height: 144rpx;
			padding: 28rpx 30rpx 40rpx 48rpx;
			border-bottom: 2rpx solid #FBFBFB;
			.memberLiL{
				.meLiLname{
					font-size: 28rpx;
					font-family: SourceHanSansCN-Medium, SourceHanSansCN;
					font-weight: 500;
					color: #333333;
					margin-bottom: 4rpx;
					.meLiLsex{
						margin-left: 30rpx;
					} 
				}
				.meLiLcont{
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #666666;
				}
				
			}
			.memberLiR{
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #333333;
			}
		}
		
	}
}
</style>
