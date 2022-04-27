<template>
	<view class="member backBox">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					人员调整
				</view>
			</view>
		</u-navbar> -->
		<searchTop @changShow='changShow' @determine='determine' isPlace='请输入单位' ref='searchTop'></searchTop>
		<popup ref='popup' :popList='popList' @reset='reset' @determine='determine'></popup>
		<deleModal ref='deleModal' @delConfirm='delConfirm'></deleModal>
		<view class="teamUl">
			<view class="tuLi " v-for="(item,index) in list" :key='index'>
				<view class="tuliL ">
					<view class="tuLText flexCenter">
						<text class="blueDot"></text>
						<text class="textMargR textFontsize">{{item.name}}</text>
						<text class="flex2 textColor textFontsize1">
							{{item.sexName}}
						</text>
						<text class="textFontsize3 textColor1">{{item.teamName}}</text>
					</view>
					<view class="tuLText flexCenter textFontsize3">
						<text class="blueDot"></text>
						<text class="flex2 textColor ">{{item.politicalLandscapeName}}</text>
						<text class="textColor">{{item.position}}</text>
					</view>
				</view>
				<view class="tuliR flexEnd" v-if="$store.state.roleId!=7">
					<view class="tuliRli flexCenter1" @click='add(item)'>
						<image src="../../static/img/edit.png" mode="" class="tuliRImg">
						</image> 编辑
					</view>
					<view class="tuliRli flexCenter1 tuliRlicolor" @click='dele(item)'>
						<image src="../../static/img/dele.png" mode="" class="tuliRImg"></image>
						删除
					</view>

				</view>
			</view>
		</view>
		<!-- <view class="memberUl">
			<view class="memberLi flexCenter" v-for="(item,index) in list" :key='index'>
				<view class="memberLiL">
					<view class="meLiLname">
						{{item.name}} 
						<text class="meLiLsex meLiLcont">
							{{item.sexName}}
						</text>
					</view>
					<view class="meLiLcont">
						{{item.position}}
					</view>
				</view>
				<view class="memberLiR flexCenter">
					{{item.type}}
					<view class="memberLiRImg">
						<view class="">
							<image src="../../static/img/edit.png" mode="" class="tuliRImg edit" @click='add(item)'>
							</image>
						</view>
						<view class="">
							<image src="../../static/img/dele.png" mode="" class="tuliRImg" @click='dele(item)'></image>
						</view>
					</view>
				</view>
			</view>
		</view> -->
		<view @click='add()' class="addBox">
			<!-- <view class="addBox"  style=""></view> -->
			<view class="addBox2">
				+
			</view>
			<view class="" style="color: #FFFFFF; font-size: 26rpx;height: 30rpx;">
				添加队员
			</view>
		</view>
		<u-loadmore :status="status" />
	</view>
</template>

<script>
	import searchTop from '@/components/searchTop';
	import popup from '@/components/popup';
	import deleModal from '@/components/deleModal';
	export default {
		components: {
			searchTop,
			popup,
			deleModal,
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
				teamAllList: [],
				sexList: [],
				polList: [],
				page: {
					size: 10,
					total: 48,
					page: 1,
				},
				status: 'loadmore',
				inpVal: '', //搜索框内的值
				deleItem: '',
			}
		},
		onShow() {
			this.$store.commit('perFormChang', {})
			this.$store.commit('teamItemChang', {})
			this.selectList()
			this.listApi()
		},
		onLoad() {
			let pagePath = this.$mp.page.route
			this.$myMD.userReporting(pagePath, '人员调整')
		},
		onReachBottom() {
			if (this.status != 'nomore') {
				this.page.page++
				this.listApi()
			}
		},
		methods: {

			add(item) {
				// console.log(item)
				// uni.navigateTo({
				// 	url:''
				// })
				if (item && item.id) {
					uni.navigateTo({
						url: './add?id=' + item.id
					})
				} else {
					uni.navigateTo({
						url: './add'
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
				this.$Api.playersDelete(params).then(res => {
					if (res.code == 200) {
						this.page.page = 1
						this.listApi()
						this.$uToast.show('删除成功', 'success')
					} else {
						this.$uToast.show(res.message, 'error')
					}
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
				this.inpVal = this.$refs.searchTop.search
				// this.inpVal = val

				this.page.page = 1
				this.listApi()
			},
			listApi() {
				let itemArr = this.popList.map(item => {
					return item.ul[item.ulInde] && item.ul[item.ulInde].id
					// console.log(item.ulInde)
				})
				// console.log(itemArr)

				let params = {
					page: this.page.page,
					unit: this.inpVal,
					// teamId:this.teamAllList[indexArrt[0]],
					teamId: itemArr[0],
					sex: itemArr[1],
					politicalLandscapeId: itemArr[2],
				}
				// console.log(params)
				// return 
				this.status = 'loading'
				this.$Api.playersList(params).then(res => {
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
				this.$Api.ZD_ZZZH_XB().then(res => {
					if (res.code == 200) {
						this.sexList = res.data
						this.popList[1].ul = res.data
					}
				})
				// 政治面貌
				this.$Api.ZD_ZZZH_ZZMM().then(res => {
					if (res.code == 200) {
						this.polList = res.data
						this.popList[2].ul = res.data
					}
				})
				this.$Api.teamAllList().then(res => {
					this.teamAllList = res.data
					this.popList[0].ul = res.data
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.member {

		// 		.addBox {
		// 			background-size: 105%;
		// 			border-radius: 50%;
		// 			width: 130rpx;
		// 			height: 130rpx;
		// 			overflow: hidden;
		// 			// border: 1px solid red;
		// 			background-image: url(../../static/img/add.png);
		// 			background-position: 50% 190%;
		// 			background-repeat: no-repeat;
		// background-color: #007AFF;
		// 		}
		.addBox {
			border-radius: 50%;
			background-color: #007AFF;
			width: 130rpx;
			height: 130rpx;
			position: fixed;
			bottom: 100rpx;
			right: 30rpx;
			text-align: center;
		}

		.addBox2 {
			font-size: 80rpx;
			color: #FFFFFF;
			font-weight: 1000;
			width: 100%;
			height: 70rpx;
			line-height: 80rpx;
			// font-family: YouYuan // border: 1px solid red;
		}

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

					.memberLiRImg {
						margin-left: 50rpx;

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
	}
</style>
