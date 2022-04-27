<template>
	<view class="home">
		<!-- {{roleId}} -->
		<!-- {{token}} -->
		<view class="homeTop">
			<!-- <image src="../../static/img/home/toptitle.png" mode="" class="htTextImg"></image> -->
			<view class="htText">
				战时防空 平时服务 应急支援
			</view>
			<view class="htImgBox">
				<view class="htImgBoxL">
					<!-- <image src="../../static/img/home/popx.png" mode="" class="htImg"></image> -->
					<view class="htNameBox">
						<view class="htName">
							您好!
						</view>
						<view class="htName">
							{{userInfor.name}}
						</view>
						<view class="htName">
							{{userInfor.position}}
						</view>
					</view>
				</view>
				<!-- <image src="../../static/img/home/topBack2.png" mode="" class="htImgBoxR"></image> -->
			</view>

		</view>
		<!-- 队伍整组 -->
		<view class="hometUlBox">
			<view class="hulTitle">
				队伍整组
			</view>
			<view class="hometUl">
				<view class="huLi" @click="goRout(0)" v-permission="[1,2,7]">
					<image src="../../static/img/home/tuLi1.png" mode="" class="huLiImg"></image>
					<view class="huLiText">
						专业队管理
					</view>
				</view>
				<view class="huLi" @click="goRout(1)">
					<image src="../../static/img/home/tuLi2.png" mode="" class="huLiImg"></image>
					<view class="huLiText">
						队员信息
					</view>
				</view>
				<view class="huLi" @click="goRout(2)" v-permission="[1,2,3,4]" >
					<image src="../../static/img/home/tuLi3.png" mode="" class="huLiImg"></image>
					<view class="huLiText">
						人员调整
					</view>
				</view>
				<view class="huLi" @click="goRout(3)">
					<image src="../../static/img/home/tuLi4.png" mode="" class="huLiImg"></image>
					<view class="huLiText">
						交叉编兵审核
					</view>
				</view>
				<view class="huLi" @click="goRout(4)">
					<image src="../../static/img/home/tuLi5.png" mode="" class="huLiImg"></image>
					<view class="huLiText">
						兵源查询
					</view>
				</view>
				<view class="huLi" @click="goRout(5)" v-permission="[1,2,3]">
					<image src="../../static/img/home/tuLi6.png" mode="" class="huLiImg"></image>
					<view class="huLiText">
						战时扩编
					</view>
				</view>
				<!-- <view class="huLi" v-for="(item,index) in team" :key='index' @click="goRout(index)">
					<image :src="item.img" mode="" class="huLiImg"></image>
					<view class="huLiText">
						{{item.title}}
					</view>
				</view> -->
			</view>

		</view>
		<!-- <u-gap height="16" bg-color="#F5F5F5" margin-bottom='40'></u-gap> -->
		<!-- 队伍训练 -->
		<view class="hometUlBox">
			<view class="hulTitle">
				队伍训练
			</view>
			<view class="hometUl">
				<!-- v-if="roleId==3||roleId==4" -->
				<!-- 				<view class="huLi" @click="goRout(13)" v-if="roleId==3||roleId==4">
					<image src="../../static/img/home/tuLi14.png" mode="" class="huLiImg"></image>
					<view class="huLiText">
						训练计划
					</view>
				</view> -->
				<view class="huLi" @click="goRout(8)" v-permission="[1,2,3,4,7]" >
					<view class="huLiImg">
						<image src="../../static/img/home/tuLi9.png" mode="" class="huLiImg"></image>
						<!-- <view class="badge">
							1
						</view> -->
					</view>
					<view class="huLiText">
						<view class="">
							训练计划
						</view>
						<view class="" v-permission="[1,2,3,7]">
							发布与管理
						</view>
					</view>
				</view>
				<view class="huLi" @click="goRout(6)">
					<image src="../../static/img/home/tuLi7.png" mode="" class="huLiImg"></image>
					<view class="huLiText">
						资料上传
					</view>
				</view>
				<view class="huLi" @click="goRout(7)">
					<image src="../../static/img/home/tuLi8.png" mode="" class="huLiImg"></image>
					<view class="huLiText">
						实时查看
					</view>
				</view>


			</view>
		</view>
		<!-- <u-gap height="16" bg-color="#F5F5F5" margin-bottom='40'></u-gap> -->
		<!-- 拉动点验 -->
		<view class="hometUlBox">
			<view class="hulTitle">
				拉动点验
			</view>
			<view class="hometUl">
				<!-- v-if="roleId==3||roleId==4" -->
				<view class="huLi" @click="goRout(14)">
					<image src="../../static/img/home/tuLi15.png" mode="" class="huLiImg"></image>
					<view class="huLiText">
						行动任务
					</view>
				</view>
				<view class="huLi" @click="goRout(15)" v-permission="[3,4]">
					<image src="../../static/img/home/tuLi16.png" mode="" class="huLiImg"></image>
					<view class="huLiText">
						<view class="">
							行动任务
						</view>
						<view class="">
							结果上传
						</view>
					</view>
				</view>
				<!-- {{roleId}} -->
				<view class="huLi" @click="goRout(9)" v-permission="[1,2]">
					<view class="huLiImg">
						<image src="../../static/img/home/tuLi10.png" mode="" class="huLiImg"></image>
						<!-- <view class="badge">
							1
						</view> -->
					</view>
					<view class="huLiText">
						任务发布
					</view>
				</view>
				<view class="huLi" @click="goRout(10)">
					<image src="../../static/img/home/tuLi11.png" mode="" class="huLiImg"></image>
					<view class="huLiText">
						5G点验
					</view>
				</view>
				<view class="huLi" @click="goRout(11)">
					<image src="../../static/img/home/tuLi12.png" mode="" class="huLiImg"></image>
					<view class="huLiText">
						历史点验记录
					</view>
				</view>
			</view>
		</view>
		<!-- <u-gap height="16" bg-color="#F5F5F5" margin-bottom='40'></u-gap> -->
		<!-- 组织架构 -->
		<view class="hometUlBox" v-permission="[1,2,7]">
			<view class="hulTitle">
				组织架构
			</view>
			<view class="hometUl">
				<view class="huLi" @click="goRout(12)">
					<image src="../../static/img/home/tuLi13.png" mode="" class="huLiImg"></image>
					<view class="huLiText">
						组织架构管理
					</view>
				</view>
			</view>
		</view>
		<!-- <u-gap height="16" bg-color="#F5F5F5" margin-bottom='64' v-if="roleId==1||roleId==2||roleId==7"></u-gap> -->
		<!-- 学习平台管理 -->
		<view class="hometUlBox">
			<view class="hulTitle flexCenter">
				学习平台管理
				<view class="hulTitleRig" @click="goSty">
					查看更多 <image src="../../static/img/home/right.png" mode="" class="img"></image>
				</view>
			</view>
			<view class="homeQiLi" v-for="(item,index) in list" :key='index' @click="goStyDetail(item)">
				<image :src="item.url" mode="" class="hquLiL"></image>
				<view class="hquLiR">
					<view class="hquLiTitle flexCenter">
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
		<!-- <view class="homeBotm homeBackF">
			本服务由浙江政务服务网、温州市人民防空办公室提供。<br>服务咨询热线：<span class="homePhone" @click='cliPhone'>
				0577 - 88018739
			</span>
		</view> -->
	</view>
</template>

<script>
	// import home from '@/pages/home/home';
	import alert from "@/static/js/ddIndex.js";
	export default {
		components: {
			// home,
		},
		data() {
			return {
				list: [],
				// 1 市人防办 2 县人防办 3 教员 4 联络员 7市人防办
				roleId: uni.getStorageSync('roleId'),
				roleIdList:uni.getStorageSync('roleIdList'),
				userInfor: uni.getStorageSync('userInfor'),
				phone: '057788018739',
			}
		},
		onLoad() {
			// dd.hideTitleBar()
			let pagePath = this.$mp.page.route
			this.$myMD.userReporting(pagePath, 'home')
			this.userInfor = JSON.parse(uni.getStorageSync('userInfor'))
		},
		onShow() {
			// console.log(123)

			// dd.hideTitleBar()
			this.$store.commit('taskFormChang', {})
			this.$store.commit('uploadFormChang', {})
			this.$store.commit('trainFormChang', {})
			this.$store.commit('teamItemChang', {})
			this.$store.commit('memberListChang', [])
			this.$store.commit('equipmentListChang', [])
			this.listApi()
		},
		mounted() {},
		methods: {
			// 拨打电话
			cliPhone() {
				uni.makePhoneCall({
					phoneNumber: this.phone
				});
			},
			listApi() {
				this.$Api.knowledgeList({
					page: 1
				}).then(res => {
					if (res.code == 200) {
						this.list = res.page.records
					} else {
						this.$uToast.show(res.message, 'error')
					}
				})
			},
			// 学习平台管理
			goSty() {
				uni.navigateTo({
					url: '../study/study'
				})
			},
			goStyDetail(val) {
				uni.navigateTo({
					url: '../study/detail?id=' + val.id
				})
			},
			goRout(val) {
				// console.log(val)
				switch (val) {
					// 专业队管理
					case 0:
						uni.navigateTo({
							url: '../team/team'
						})
						break;
						// 队员信息
					case 1:
						uni.navigateTo({
							url: '../member/member'
						})
						break;
						// 人员调整
					case 2:
						uni.navigateTo({
							url: '../personnel/personnel'
						})
						break;
						// 交叉编兵审核
					case 3:
						uni.navigateTo({
							url: '../overlapping/overlapping'
						})
						break;
						// 兵源查询
					case 4:
						uni.navigateTo({
							url: '../militarySource/militarySource'
						})
						break;
						// 战时扩编
					case 5:
						// uni.navigateTo({
						// 	url: '../expansion/list'
						// })
						uni.navigateTo({
							url: '../expansion/expansion'
						})
						break;
						// 资料上传
					case 6:
						uni.navigateTo({
							url: '../trainingProgram/trainingProgram?type=' + 1
						})
						// uni.navigateTo({
						// 	url:'../upload/upload'
						// })
						break;
						// 实时查看
					case 7:
						uni.navigateTo({
							url: '../video/list?type=' + 1
						})
						break;
						// 训练计划发布与管理
					case 8:
						uni.navigateTo({
							url: '../train/trainingProgram'
						})
						break;
						// 任务发布
					case 9:
						uni.navigateTo({
							url: '../task/task'
						})
						break;
						// 5G点验
					case 10:
						uni.navigateTo({
							url: '../video/list?type=' + 2
						})
						// uni.navigateTo({
						// 	url:'../militarySource/militarySource'
						// })
						break;
						// 历史点验记录
					case 11:
						// console.log(val)
						uni.navigateTo({
							url: '../history/history'
						})
						break;
						// 组织架构管理
					case 12:
						uni.navigateTo({
							url: '../organization/organization'
						})
						break;
						// 训练计划
					case 13:
						// console.log('训练计划')
						uni.navigateTo({
							url: '../trainingProgram/trainingProgram'
						})
						break;
						// 行动任务
					case 14:
						uni.navigateTo({
							url: '../taskAction/taskAction?type=' + 0
						})
						// console.log('行动任务')
						break;
						// 行动任务 结果上传
					case 15:
						uni.navigateTo({
							url: '../taskAction/taskAction?type=' + 1
						})
						// console.log('行动任务 结果上传')
						break;
					default:
						break;
				}
			}

		}
	}
</script>

<style lang="scss" scoped>
	.home {
		padding-top: 50rpx;
		// background-color: #FFFFFF;
		background-color: #F5F5F5;
		padding-bottom: 60rpx;

		.homeTop {
			// width: 733rpx;
			height: 316rpx;
			margin: 20rpx 32rpx 30rpx;
			background-image: url(../../static/img/home/topBack1.png);
			background-size: 100% 100%;
			// padding: 40rpx 32rpx 0;
			// padding: 106rpx 32rpx 0;
			padding: 32rpx 26rpx 0;
			box-sizing: border-box;

			.htText {
				font-size: 50rpx;
				font-family: SourceHanSansCN-Heavy, SourceHanSansCN;
				font-weight: 800;
				color: #FFFFFF;
				line-height: 38px;
				text-shadow: 0px 2px 2px #0150A6;
				margin-bottom: 30rpx;
			}

			.htTextImg {
				width: 576rpx;
				height: 44rpx;
				margin: 0 auto 16rpx;
				display: block;
			}

			.htImgBox {
				display: flex;

				.htImgBoxL {
					display: flex;
					margin-left: 20rpx;
					// padding-top: 40rpx;

					.htImg {
						width: 96rpx;
						height: 96rpx;
						margin-right: 18rpx;
						flex-shrink: 0;
					}

					.htNameBox {
						.htName {
							font-size: 32rpx;
							font-family: PingFangSC-Semibold, PingFang SC;
							font-weight: 600;
							color: #FFFFFF;
							margin-bottom: 8rpx;
						}

						.htZhiw {
							font-size: 14rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #FFFFFF;
						}
					}
				}

				.htImgBoxR {
					width: 262rpx;
					height: 208rpx;
					flex-shrink: 0;
				}
			}
		}

		.hometUlBox {
			margin: 0 32rpx 30rpx;
			background-color: #FFFFFF;
			border-radius: 16rpx;
			padding: 20rpx;

			.hulTitle {
				font-size: 32rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #565656;
				margin-bottom: 32rpx;

				.hulTitleRig {
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #999999;

					.img {
						margin-left: 16rpx;
						width: 24rpx;
						height: 24rpx;
					}

				}
			}

			.hometUl {
				display: flex;
				flex-wrap: wrap;

				.huLi {
					flex: 0 0 25%;
					margin-bottom: 32rpx;

					.huLiImg {
						// width: 40rpx;
						// height: 40rpx;
						width: 96rpx;
						height: 96rpx;
						// margin-bottom: 6px;
						margin: 0 auto 12rpx;
						display: block;
						position: relative;

						.badge {
							width: 24rpx;
							height: 24rpx;
							border-radius: 12rpx;
							background-color: #FF5C5C;
							position: absolute;
							right: -16rpx;
							top: -16rpx;
							font-size: 20rpx;
							font-family: PingFangSC-Medium, PingFang SC;
							font-weight: 500;
							color: #FFFFFF;
							text-align: center;
							line-height: 24rpx;
						}
					}

					.huLiText {
						width: 100rpx;
						margin: 0 auto;
						text-align: center;
						font-size: 24rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #565656;
						flex-shrink: 0;
					}

				}
			}

			.homeQiLi {
				// width: 690rpx;
				height: 212rpx;
				background: #F9F9F9;
				border-radius: 8rpx;
				padding: 18rpx 22rpx 18rpx 12rpx;
				display: flex;
				margin-bottom: 30rpx;

				.hquLiL {
					width: 196rpx;
					height: 176rpx;
					margin-right: 16rpx;
					flex-shrink: 0;
				}

				.hquLiR {
					// width: 598rpx;
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


		.homeBotm {
			margin-top: 20rpx;
			background: #F7F7F7;
			padding: 68rpx 0;
			color: #C1C1C2;
			text-align: center;
			line-height: 34rpx;
			font-size: 24rpx;

			.homePhone {
				color: #8199DD;
			}
		}

		.homeBackF {
			// background-color: #ffffff;
		}





	}
</style>
