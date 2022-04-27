<template>
	<view class="organization backBox">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					组织架构
				</view>
			</view>
		</u-navbar> -->
		<searchTop @changShow='changShow' @determine='determine' isPlace='请输入组织架构名' ref='searchTop' :isImg='false'>
		</searchTop>
		<popup ref='popup' :popList='popList' @reset='reset' @determine='determine'></popup>
		<deleModal ref='deleModal' @delConfirm='delConfirm'></deleModal>
		<view class="memberUl">
			<!-- 一级 -->
			<view class="" v-for="(item,index) in list" :key='index' @click="showChang(item)">
				<view class="memberLi flexCenter">
					<view class="memberLiL flexCenter">
						<view class="uIcon">
							<template v-if="item.organizationListVOList&&item.organizationListVOList.length>0">
								<u-icon size="20" name="play-right-fill" color='#6E7277' v-show='!item.show'></u-icon>
								<u-icon size="20" name="arrow-down-fill" color='#6E7277' v-show='item.show'></u-icon>
							</template>
						</view>
						<view class="meLiLname">
							<view class="">
								<text class="textLable">组织名称：</text>
								{{item.name}}
							</view>
							<view class="" v-if="item.liaisonName">
								<text class="textLable">联络员姓名：</text>
								{{item.liaisonName}}
							</view>
							<view class="" v-if="item.phone">
								<text class="textLable">手机号： </text>
								{{item.phone}}
							</view>
						</view>
					</view>
					<!-- <view class="memberLiR flexCenter">
							<view class="memberLiRImg"  @click.stop='add(item,1)'>
								<u-icon name="plus" class="tuliRImg" size="34"></u-icon>
							</view>
						<view class="memberLiRImg" v-if="$store.state.roleId!=7">
							<view class="">
								<image src="../../static/img/edit.png" mode="" class="tuliRImg edit"
									@click.stop='add(item)'>
								</image>
							</view>
							<view class="">
								<image src="../../static/img/dele.png" mode="" class="tuliRImg"
									@click.stop='dele(item)'></image>
							</view>
								
						</view>
					</view> -->
				</view>
				<!-- 二级 -->
				<template v-if="item.show">
					<view class="orginTwo" v-for="(item2,index2) in item.organizationListVOList" :key='index2'
						@click.stop="showChang(item2)">
						<view class="memberLi flexCenter">
							<view class="memberLiL flexCenter">
								<view class="uIcon">
									<template
										v-if="item2.organizationListVOList&&item2.organizationListVOList.length>0">
										<u-icon size="20" name="play-right-fill" color='#6E7277' v-show='!item2.show'>
										</u-icon>
										<u-icon size="20" name="arrow-down-fill" color='#6E7277' v-show='item2.show'>
										</u-icon>
									</template>
								</view>
								<view class="meLiLname">
									<view class="">
										<text class="textLable">组织名称：</text>
										{{item2.name}}
									</view>
									<view class="" v-if="item2.liaisonName">
										<text class="textLable">联络员姓名：</text>
										{{item2.liaisonName}}
									</view>
									<view class="" v-if="item2.phone">
										<text class="textLable">手机号： </text>
										{{item2.phone}}
									</view>
								</view>
							</view>
							<!-- <view class="memberLiR flexCenter">
							<view class="memberLiRImg"  @click.stop='add(item2,1)'>
								<u-icon name="plus" class="tuliRImg" size="34"></u-icon>
							</view>
								<view class="memberLiRImg" v-if="$store.state.roleId!=7">
									<view class="">
										<image src="../../static/img/edit.png" mode="" class="tuliRImg edit"
											@click.stop='add(item2)'>
										</image>
									</view>
									<view class="">
										<image src="../../static/img/dele.png" mode="" class="tuliRImg"
											@click.stop='dele(item2)'></image>
									</view>
								</view>
							</view> -->
						</view>
						<!-- 三级 -->
						<template v-if="item2.show">
							<view class="orginTwo" v-for="(item3,index3) in item2.organizationListVOList" :key='index3'
								@click.stop="showChang(item3)">
								<view class="memberLi flexCenter">
									<view class="memberLiL flexCenter">
										<view class="uIcon">
											<template
												v-if="item3.organizationListVOList&&item3.organizationListVOList.length>0">
												<u-icon size="20" name="play-right-fill" color='#6E7277'
													v-show='!item3.show'>
												</u-icon>
												<u-icon size="20" name="arrow-down-fill" color='#6E7277'
													v-show='item3.show'>
												</u-icon>
											</template>
										</view>
										<view class="meLiLname">
											<view class="">
												<text class="textLable">组织名称：</text>
												{{item3.name}}
											</view>
											<view class="" v-if="item3.liaisonName">
												<text class="textLable">联络员姓名：</text>
												{{item3.liaisonName}}
											</view>
											<view class="" v-if="item3.phone">
												<text class="textLable">手机号： </text>
												{{item3.phone}}
											</view>
										</view>
									</view>
									<!-- <view class="memberLiR flexCenter">
										<view class="memberLiRImg" @click.stop='add(item3,1)'>
											<u-icon name="plus" class="tuliRImg" size="34"></u-icon>
										</view>
										<view class="memberLiRImg" v-if="$store.state.roleId!=7">
											<view class="">
												<image src="../../static/img/edit.png" mode="" class="tuliRImg edit"
													@click.stop='add(item3)'>
												</image>
											</view>
											<view class="">
												<image src="../../static/img/dele.png" mode="" class="tuliRImg"
													@click.stop='dele(item3)'></image>
											</view>
										</view>
									</view> -->
								</view>
								<!-- 四级 -->
								<template v-if="item3.show">
									<view class="orginTwo" v-for="(item4,index4) in item3.organizationListVOList"
										:key='index4' @click.stop="showChang(item4)">
										<view class="memberLi flexCenter">
											<view class="memberLiL flexCenter">
												<view class="uIcon">
													<template
														v-if="item4.organizationListVOList&&item4.organizationListVOList.length>0">
														<u-icon size="20" name="play-right-fill" color='#6E7277'
															v-show='!item4.show'>
														</u-icon>
														<u-icon size="20" name="arrow-down-fill" color='#6E7277'
															v-show='item4.show'>
														</u-icon>
													</template>
												</view>
												<view class="meLiLname">
													<view class="">
														<text class="textLable">组织名称：</text>
														{{item4.name}}
													</view>
													<view class="" v-if="item4.liaisonName">
														<text class="textLable">联络员姓名：</text>
														{{item4.liaisonName}}
													</view>
													<view class="" v-if="item4.phone">
														<text class="textLable">手机号： </text>
														{{item4.phone}}
													</view>
												</view>
											</view>
											<!-- <view class="memberLiR flexCenter">
												<view class="memberLiRImg" v-if="$store.state.roleId!=7">
													<view class="">
														<image src="../../static/img/edit.png" mode=""
															class="tuliRImg edit" @click.stop='add(item4)'>
														</image>
													</view>
													<view class="">
														<image src="../../static/img/dele.png" mode="" class="tuliRImg"
															@click.stop='dele(item4)'></image>
													</view>
												</view>
											</view> -->
										</view>

									</view>

								</template>
							</view>

						</template>
					</view>

				</template>

			</view>
		</view>
		<!-- <image src="../../static/img/add.png" mode="" class="imgAdd" @click='add()' v-if="$store.state.roleId!=7">
		</image> -->
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
						title: '性别',
						ul: ['男', '女'],
						ulInde: null
					},
					{
						title: '主管单位',
						ul: ['主管单位1', '主管单位2', '主管单位3', '主管单位4', ],
						ulInde: null
					},
					{
						title: '政治面貌',
						ul: ['党员', '团员', '群众', ],
						ulInde: null
					},
				],
				list: [],
				deleItem: '',
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
		onLoad() {
			let pagePath = this.$mp.page.route
			this.$myMD.userReporting(pagePath, '组织架构')
		},
		onShow() {
			this.listApi()
		},
		onReachBottom() {
			if (this.status != 'nomore') {
				this.page.page++
				this.listApi()
			}
		},
		methods: {

			showChang(item) {
				if (item.organizationListVOList && item.organizationListVOList.length > 0) {
					item.show = !item.show
				}
			},
			add(item, type) {
				// console.log(item)
				// uni.navigateTo({
				// 	url:''
				// })
				if (item) {
					if (type == 1) {
						uni.navigateTo({
							url: './add?id=' + item.id + '&type=' + type + '&level=' + item.level
						})
					} else {
						uni.navigateTo({
							url: './add?id=' + item.id
						})
					}

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
				this.$Api.organizDelete(params).then(res => {
					if (res.code == 200) {
						this.page.page = 1
						this.listApi()
						this.$uToast.show('删除成功', 'success')
					} else {
						this.$uToast.show(res.message, 'error')
					}
				})
			},
			detail(item) {
				uni.navigateTo({
					url: './detail'
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
					name: this.inpVal,
				}
				// console.log(params)
				// return 
				// this.status = 'loading'
				this.$Api.organizList(params).then(res => {
					if (res.code == 200) {
						// let resArr = res.page.records
						let resArr = res.data
						resArr.map(item => {
							item.show = false
							if (item.organizationListVOList && item.organizationListVOList.length > 0) {
								item.organizationListVOList.map(item2 => {
									item2.show = false
									if (item2.organizationListVOList && item2
										.organizationListVOList.length > 0) {
										item2.organizationListVOList.map(item3 => {
											item3.show = false
											if (item3.organizationListVOList && item3
												.organizationListVOList.length > 0) {
												item3.organizationListVOList.map(item4 => {
													item4.show = false
												})
											}
										})
									}
								})
							}
						})
						if (this.page.page == 1) {
							this.list = resArr
						} else {
							this.list = this.list.concat(resArr)
						}

						// this.page.page = res.page.current;
						// this.page.total = res.page.total;
						// this.page.size = res.page.size;
						// if (res.page.records.length < 10) {
							this.status = 'nomore'
						// } else {
						// 	this.status = 'loadmore'
						// }
						// console.log(this.status)
					}
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.organization {
		.orginTwo {
			padding-left: 50rpx;
			box-sizing: border-box;
		}

		.memberUl {
			background-color: #FFFFFF;
			border-top: 2rpx solid #FBFBFB;

			.memberLi {
				// width: 750rpx;
				min-height: 144rpx;
				padding: 28rpx 30rpx 40rpx 48rpx;
				border-bottom: 2rpx solid #FBFBFB;

				.memberLiL {
					.uIcon {
						// width: 20rpx;
						margin-right: 10rpx;
					}

					.meLiLname {
						font-size: 28rpx;
						font-family: SourceHanSansCN-Medium, SourceHanSansCN;
						font-weight: 500;
						color: #333333;
						// margin-bottom: 4rpx;
						margin-left: 10rpx;
						line-height: 54rpx;

						.textLable {
							min-width: 140rpx;
							display: inline-block;
							text-align: right;
						}

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
						margin-left: 30rpx;
						// margin-left: 50rpx;

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
