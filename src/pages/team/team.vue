<template>
	<view class="team backBox">
		<!-- <view class="searchTop"> -->
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					专业队管理
				</view>
			</view>
		</u-navbar> -->
		<searchTop @changShow='changShow' @determine='determine' :isImg='false' isPlace='请输入专业队名称'></searchTop>
		<popup ref='popup' :popList='popList' @reset='reset' @determine='determine'></popup>
		<deleModal ref='deleModal' @delConfirm='delConfirm'></deleModal>
		<view class="teamUl">
			<view class="tuLi" v-for="(item,index) in list" :key='index'>
				<view class="tuliL"  @click='detail(item)'>
					<!-- <view class="tuLText flexCenter1">
						<text class="blueDot"></text>
						{{item.name}}
					</view>
					<view class="tuLText flexCenter1" v-if="item.branchName">
						<text class="blueDot"></text>
						{{item.branchName}}
					</view> -->
					<!-- 专业队名称、分队名称、编号、行政区域、主管单位、人数 -->
					<view class="tuLTeBox flexCenter1">
						<text class="blueDot"></text>
						<text class="tuLTeBoLab">专业队名称：</text><text
							class="tuLTeBoCon marginR ellipsisOne">{{item.name}}</text>
					</view>
					<view class="tuLTeBox flexCenter1">
						<text class="blueDot"></text>
						<text class="tuLTeBoLab">分队名称：</text><text
							class="tuLTeBoCon marginR ellipsisOne">{{item.branchName}}</text>
					</view>
					<view class="tuLTeBox flexCenter1">
						<text class="blueDot"></text>
						<text class="tuLTeBoLab">编号：</text><text
							class="tuLTeBoCon marginR ellipsisOne">{{item.number}}</text>
					</view>
					<view class="tuLTeBox flexCenter1">
						<text class="blueDot"></text>
						<text class="tuLTeBoLab">组建单位：</text><text class="tuLTeBoCon ellipsisOne">{{item.unit}}</text>
					</view>
					<view class="tuLTeBox flexCenter1">
						<text class="blueDot"></text>
						<text class="tuLTeBoLab">行政区域：</text><text class="tuLTeBoCon ellipsisOne">{{item.administrativeName}}</text>
					</view>
					<view class="tuLTeBox flexCenter1">
						<text class="blueDot"></text>
						<text class="tuLTeBoLab">主管单位：</text><text class="tuLTeBoCon ellipsisOne">{{item.directorUnit}}</text>
					</view>
					<view class="tuLTeBox flexCenter1">
						<text class="blueDot"></text>
						<text class="tuLTeBoLab">人数：</text><text class="tuLTeBoCon ellipsisOne">{{item.personNum}}</text>
					</view>


				</view>
				<view class="tuliR flexEnd" v-if="$store.state.roleId!=7">
					<!-- <view class="tuliRli flexCenter1" @click='detail(item)'>
						<image src="../../static/img/edit.png" mode="" class="tuliRImg">
						</image> 详情
					</view> -->
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
			<image src="../../static/img/add.png" mode="" class="imgAdd" @click='add()' v-if="$store.state.roleId!=7"></image>

		</view>


		<!-- </view> -->
		<u-toast ref="uToast" />
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
						ul: ['专业队1', '专业队2', '专业队3', '专业队4', ],
						ulInde: null
					},
					{
						title: '组织单位',
						ul: ['组织单位1', '组织单位2', '组织单位3', '组织单位4', ],
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
				// status:'loading',
				// status:'nomore',

			}
		},
		onShow() {
			this.listApi()
		},
		onLoad() {
			let pagePath = this.$mp.page.route
			this.$myMD.userReporting(pagePath, '专业队管理')
			// this.listApi()
		},
		onReachBottom() {
			if (this.status != 'nomore') {
				this.page.page++
				this.listApi()
			}
		},
		methods: {
			detail(item) {
					uni.navigateTo({
						url: './detail?id=' + item.id
					})
			},
			add(item) {
				if (item) {
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
				// this.$refs.uToast.show({
				// 	title: '删除成功',
				// 	type: 'success',
				// })
				let params = {
					id: this.deleItem.id
				}
				// console.log(params)
				this.$Api.teamDelete(params).then(res => {
					if (res.code == 200) {
						this.page.page = 1
						this.listApi()
						// this.$refs.uToast.show({
						// 	title: '删除成功',
						// 	type: 'success',
						// })
						this.$uToast.show('删除成功', 'success')
					} else {
						this.$uToast.show(res.message, 'error')
						// this.$refs.uToast.show({
						// 	title: res.message,
						// 	type: 'error',
						// })

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
			},
			// 查询
			determine(val) {
				// console.log(val)
				this.name = val
				this.page.page = 1
				this.listApi()
				// this.popList.map(item => {
				// 	// console.log(item.ulInde)
				// })
			},
			listApi() {
				// console.log(params)
				let params = {
					page: this.page.page,
					name: this.name
				}
				this.status = 'loading'
				this.$Api.teamList(params).then(res => {
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
					}else{
						this.$uToast.show(res.message, 'error')
					}
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.team {
		padding-bottom: 140rpx;
}
</style>
