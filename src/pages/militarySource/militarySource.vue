<template>
	<view class="overlapping backBox">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					兵源查询列表
				</view>
			</view>
		</u-navbar> -->
		<!-- <searchTop @changShow='changShow' @determine='determine' isPlace='请输入队员名称' ref='searchTop' :isInput='false'> -->
		<searchTop @changShow='changShow' @determine='determine' isPlace='请输入单位' ref='searchTop'></searchTop>
		</searchTop>
		<popup ref='popup' :popList='popList' @reset='reset' @determine='determine'></popup>

		<view class="teamUl">
			<view class="tuLi " v-for="(item,index) in list" :key='index' @click='detail(item)'>
				<view class="tuliL">
					<view class="meLiLname flexCenter">
						<text class="blueDot"></text>
						<text class="flex2">{{item.name}}</text>
						<text class="meLiLsex meLiLcont ">
							{{item.sexName}}
						</text>
					</view>
					<view class="meLiLcont flexCenter1">
						<text class="blueDot"></text>
						{{item.politics}}
						<!-- {{item.position}} -->
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
	import {
		arrFilter
	} from '@/utils/utils.js'
	export default {
		components: {
			searchTop,
			popup
		},
		data() {
			return {
				popList: [{
						title: '专业队',
						ul: [],
						ulInde: null
					},
					{
						title: '性别',
						ul: [],
						ulInde: null
					},
					// {
					// 	title: '主管单位',
					// 	ul: ['主管单位1', '主管单位2', '主管单位3', '主管单位4', ],
					// 	ulInde: null
					// },
					{
						title: '政治面貌',
						ul: [],
						ulInde: null
					},
				],
				list: [],
				proList: [],
				eduList: [],
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
			this.selectList()
			this.listApi()
		},
		onLoad() {
			let pagePath = this.$mp.page.route
			this.$myMD.userReporting(pagePath, '兵源查询列表')
		},
		onReachBottom() {
			if (this.status != 'nomore') {
				this.page.page++
				this.listApi()
			}
		},
		methods: {
			detail(item){
				
			},
			// 筛选弹出框
			changShow(val) {
				this.$refs.popup.show = val
			},
			// 重置
			reset() {
				this.popList.map(item => {
					item.ulInde = null
					if (item.title == '年龄区间') {
						item.minAge = ''
						item.maxAge = ''
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
				let itemArr = this.popList.map(item => {
					if (item.ul && item.ul[item.ulInde] && item.ul[item.ulInde].id) {
						return item.ul[item.ulInde].id
					} else if (item.title == '年龄区间') {
						return {
							minAge: item.minAge,
							maxAge: item.maxAge
						}
					}
					// console.log(item.ulInde)
				})
				// console.log(itemArr)

				let params = {
					page: this.page.page,
					// name: this.inpVal,
					// source: itemArr[0],
					// education: itemArr[1],
					// minAge: itemArr[2].minAge,
					// maxAge: itemArr[2].maxAge,
					unit:this.inpVal,
					// teamId:this.teamAllList[indexArrt[0]],
					teamId:itemArr[0],
					sex:itemArr[1],
					politicalLandscapeId:itemArr[2],
				}
				// console.log(params)
				// return 
				this.status = 'loading'
				this.$Api.playersSourceList(params).then(res => {
					if (res.code == 200) {
						let resArr = res.page.records
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
			selectList() {
				// 性别
				this.$Api.ZD_ZZZH_XB().then(res=>{
					if(res.code==200){
						this.sexList=res.data
						this.popList[1].ul=res.data
					}
				})
				// 政治面貌
				this.$Api.ZD_ZZZH_ZZMM().then(res=>{
					if(res.code==200){
						this.polList=res.data
						this.popList[2].ul=res.data
					}
				})
				this.$Api.teamAllList().then(res=>{
					this.teamAllList=res.data
					this.popList[0].ul=res.data
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.overlapping {
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
