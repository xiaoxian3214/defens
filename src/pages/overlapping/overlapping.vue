<template>
	<view class="overlapping backBox">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					交叉编兵审核
				</view>
			</view>
		</u-navbar> -->
		<searchTop @changShow='changShow' @determine='determine' isPlace='请输入队员名称' ref='searchTop'></searchTop>
		<popup ref='popup' :popList='popList' @reset='reset' @determine='determine'></popup>
		<view class="teamUl">
			<view class="tuLi " v-for="(item,index) in list" :key='index'>
				<view class="tuliL" @click='detail(item)'>
					<view class="meLiLname flexCenter">
						<text class="blueDot"></text>
						<text class="flex2">{{item.name}}</text>
						<text class="meLiLsex meLiLcont ">
							{{item.sexName}}
						</text>
					</view>
					<view class="meLiLcont flexCenter1">
						<text class="blueDot"></text>
						{{item.position}}
					</view>
				</view>
				<view class="tuliR flexEnd"	v-if="roleId!=3&&roleId!=7">
					<view class="tuliRli flexCenter1 tuliRlicolor2" @click='inform(item)' 	v-if="roleId==1||roleId==2">
						<u-icon name="bell" color="#FFD767" size="38" class="tuliRImg"></u-icon>
						</image> 通知
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
	import {arrFilter} from '@/utils/utils.js'
	export default {
		components: {
			searchTop,
			popup
		},
		data() {
			return {
				// 1 市人防办 2 县人防办 3 教员 4 联络员
				roleId: uni.getStorageSync('roleId'),
				popList: [{
						title: '专业',
						ul: ['专业1', '专业2', '专业3', '专业4', ],
						ulInde: null
					},
					{
						title: '学历',
						ul: ['本科', '大专', '研究生',],
						ulInde: null
					},
					{
						title: '年龄区间',
						minAge:'',
						maxAge:'',
					},
				],
				list: [],
				proList:[],
				eduList:[],
				page: {
					size: 10,
					total: 48,
					page: 1,
				},
				status: 'loadmore',
				inpVal: '', //搜索框内的值
			}
		},
		onLoad() {
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'交叉编兵审核')
		},
		onShow() {
			this.$store.commit('perFormChang',{})
			this.$store.commit('teamItemChang',{})
			// console.log(this.$store.state.perForm)
			this.selectList()
			this.listApi()
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
				this.$Api.crossAuditinform({idList:item.id}).then(res=>{
					if (res.code == 200) {
						this.$uToast.show('通知成功', 'success')
					} else {
						this.$uToast.show(res.message, 'error')
					}
				})
			},
			detail(item){
				uni.navigateTo({
					url:'./detail?id='+item.id
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
					if(item.title=='年龄区间'){
					item.minAge=''
					item.maxAge=''
					}
				})
				this.listApi()
			},
			// 查询
			determine(val) {
				this.inpVal = this.$refs.searchTop.search
				// this.inpVal = val
				this.page.page = 1
				this.listApi()
			},
			listApi() {
				let itemArr=this.popList.map(item => {
					if(item.ul&&item.ul[item.ulInde]&&item.ul[item.ulInde].id){
					return item.ul[item.ulInde].id
					}else if(item.ul&&item.ul[item.ulInde]&&item.ul[item.ulInde].name){//专业
					return item.ul[item.ulInde].name
					}else if(item.title=='年龄区间'){
						return {minAge:item.minAge,maxAge:item.maxAge}
					}
					// console.log(item.ulInde)
				})
				// console.log(this.popList,itemArr)
				// return
				
				let params={
					page:this.page.page,
					name:this.inpVal,
					// teamId:this.teamAllList[indexArrt[0]],
					// teamId:itemArr[0],
					// sex:itemArr[1],
					// politicalLandscapeId:itemArr[2],
					professional:itemArr[0],
					education:itemArr[1],
					minAge:itemArr[2].minAge,
					maxAge:itemArr[2].maxAge,
				}
				// console.log(params)
				// return 
				this.status = 'loading'
				this.$Api.crossAuditList(params).then(res => {
					if (res.code == 200) {
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
						// console.log(this.status)
					}
				})
			},
			// 字典
			selectList(){
				// 性别
				// this.$Api.ZD_ZZZH_XB().then(res=>{
				// 	if(res.code==200){
				// 		this.sexList=res.data
				// 		this.popList[1].ul=res.data
				// 	}
				// })
				// 专业
				this.$Api.crossAuditProf().then(res=>{
					this.proList=res.data
					this.popList[0].ul=res.data
				})
				// 文化程度
				this.$Api.ZD_XLDJ().then(res=>{
					if(res.code==200){
						this.eduList=res.data
						this.popList[1].ul=res.data
					}
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
.overlapping{
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
					margin-bottom: 16rpx;
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
	.meLiLname{
		margin-bottom: 16rpx;
	}
}
</style>
