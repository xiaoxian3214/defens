<template>
	<view class="list backBox">
		<!-- type 0 专业队 1 医疗队 2 资料上传跳转过来选择专业队 3训练计划发布与管理跳转过来选择专业队 任务发布-->
		<!-- {{type==0||type==2||type==3?'选择专业队':type==1?'选择医疗队':''}} -->
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					选择专业队
				</view>
			</view>
		</u-navbar> -->
		<!-- <u-button type="primary" class='addDeter' @click='expansion' v-if='!type'>扩编</u-button>
		<u-button type="primary" class='addDeter' @click='uploadCon' v-else>确定</u-button> -->
		<view class="navTop flexCenter">
			<view class="navTitle">
				<searchTop @changShow='changShow' @determine='determine' :isImg='false' isPlace='请输入专业队名称'></searchTop>
			</view>
			<view class="navRig" @click='expansion' v-if='!type'>
				扩编
			</view>
			<view class="navRig" @click='uploadCon' v-else>
				确定
			</view>
		</view>
		<popup ref='popup' :popList='popList' @reset='reset' @determine='determine'></popup>
		<view class="memberUl">
			<view class="memberLi flexCenter" v-for="(item,index) in list" :key='index' @click="selIndex=index">
				<view class="memberLiL">
					{{item.name}}
				</view>
				<view class="memberLiR" v-if="selIndex==index">
					<!-- {{item.type}} -->
					<image src="../../static/img/select.png" mode="" class="memRimg"></image>
				</view>
			</view>
		</view>
		<u-loadmore :status="status" />
		<!-- <u-button type="primary" class='addDeter' @click='expansion' v-if='type==0||type==1'>扩编</u-button> -->
		<!-- <u-button type="primary" class='addDeter' @click='expansion' v-if='!type'>扩编</u-button>
		<u-button type="primary" class='addDeter' @click='uploadCon' v-else>确定</u-button> -->
		<u-top-tips ref="uTips"></u-top-tips>
		<u-popup v-model="expShow" mode='bottom' border-radius='32' height='886'>
			<view class="expTopBox">
				<view class="expTop flexCenter">
					<text class="expTopimg"></text>
					扩编倍数
					<image src="../../static/img/cancel.png" mode="" class="expTopimg" @click="expShow=false"></image>
				</view>
				<picker-view :indicator-style="indicatorStyle" :value="value" @change="bindChange" class="picker-view">
					<picker-view-column>
						<view class="item" v-for="(item,index) in expaList" :key="index">{{item.name}}</view>
					</picker-view-column>
				</picker-view>
				<u-button type="primary" class='addDeterCop' @click='expDete'>确定</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import searchTop from '@/components/searchTop';
	import popup from '@/components/popup';
	export default {
		components: {
			searchTop,
			popup
		},
		data() {
			return {
				type: '',
				isCityUser: '',
				selIndex: 0,
				popList: [{
						title: '专业',
						ul: ['专业1', '专业2', '专业3', '专业4', ],
						ulInde: null
					},
					{
						title: '学历',
						ul: ['本科', '大专', '研究生', ],
						ulInde: null
					},
					{
						title: '年龄区间',
						minAge: '',
						maxAge: '',
					},
				],
				expShow: false,
				expaList: [{
					id: 1,
					name: '一倍'
				}, {
					id: 1,
					name: '二倍'
				}, {
					id: 1,
					name: '三倍'
				}, {
					id: 1,
					name: '四倍'
				}, {
					id: 1,
					name: '五倍'
				}, {
					id: 1,
					name: '六倍'
				}, {
					id: 1,
					name: '七倍'
				}],
				value: [0],
				indicatorStyle: `height: 80rpx;lineHeight:80rpx`,
				index: 0,
				form: {}, //上传数据占存


				list: [],
				page: {
					size: 10,
					total: 48,
					page: 1,
				},
				status: 'loadmore',
				name: '', //搜索框内的值



			}
		},
		onLaunch() {
			// var rout=this.$router.query
			// console.log(rout)
		},
		onLoad: function(val) {
			// console.log(val.type)
			let pagePath = this.$mp.page.route
			this.$myMD.userReporting(pagePath, '选择专业队')
			this.type = val.type
			this.isCityUser = val.isCityUser
			this.listApi()
		},
		onShow() {},
		onReachBottom() {
			if (this.status != 'nomore') {
				this.page.page++
				this.listApi()
			}
		},
		methods: {
			// 扩编
			expansion() {
				if (this.selIndex != null) {
					this.expShow = true
				} else {
					this.$refs.uTips.show({
						// title: this.type == 0 ? '请选择专业队' : '请选择医疗队',
						title: '请选择专业队',
						type: 'error',
						duration: '1300'
					})
				}
			},
			bindChange: function(e) {
				this.index = e.detail.value[0]
				// console.log(e.detail.value)
			},
			expDete() {
				this.expShow = false
				let val = this.expaList[this.index]
				uni.navigateTo({
					url: './expansion'
				})
				// console.log(val)
			},
			// 2资料上传选择专业队确定 3训练馆确定
			uploadCon() {
				var teamItem = this.list[this.selIndex]
				if (this.type == 2) {
					// this.$store.commit('uploadFormChang',this.form)
					this.$store.commit('teamItemChang', teamItem)
				} else if (this.type == 3) {
					// this.$store.commit('trainFormChang',this.form)
					this.$store.commit('teamItemChang', teamItem)
				}
				uni.navigateBack()
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
					name: this.name,
					// isCityUser:this.isCityUser
				}
				this.status = 'loading'
				this.$Api.teamList(params).then(res => {
					if (res.code == 200) {
						if (this.page.page == 1) {
							this.list = res.page.records
						} else {
							this.list = this.list.concat(res.page.records)
						}
						if (this.type == 2 || this.type == 3) {
							// this.form=this.$store.state.uploadForm
							// 回显
							var itemActiv = this.$store.state.teamItem

							this.list.map((item, index) => {
								// console.log(item.id,itemActiv.id)
								if (item.id == itemActiv.id) {
									this.selIndex = index
								}
							})
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
			}

		}
	}
</script>

<style lang="scss" scoped>
	.list {
		padding-bottom: 140rpx;

		.navTop {
			background-color: #FFFFFF;
		}

		.memberUl {
			background-color: #FFFFFF;

			// border-top: 2rpx solid #FBFBFB;
			.memberLi {
				width: 750rpx;
				height: 144rpx;
				// padding: 28rpx 30rpx 40rpx 48rpx;
				padding: 0 30rpx 0 48rpx;
				border-bottom: 2rpx solid #F8F8F8;

				.memberLiL {
					font-size: 32rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #333333;
				}

				.memberLiR {
					.memRimg {
						width: 28rpx;
						height: 24rpx;
					}
				}
			}
		}

		.addDeter {
			// position: fixed;
			// bottom: 140rpx;
		}

	}
</style>
