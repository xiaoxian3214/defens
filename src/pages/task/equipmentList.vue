<template>
	<view class="list backBox">
		<!-- <u-navbar :border-bottom='false'> -->
			<view class="navTop flexCenter">
				<view class="navTitle">
					<!-- 选择装备 -->
				</view>
				<view class="navRig" @click='allSel'>
					全选
				</view>
			</view>
		<!-- </u-navbar> -->
		<!-- <searchTop @determine='determine' :isImg='false'></searchTop> -->
		<view class="memberUl">
			<view class="memberLi flexCenter" v-for="(item,index) in list" :key='index' @click="seleChang(item)">
				<view class="memberLiL">
					<view class="meLiLname">
						{{item.name}}
						<text class="meLiLsex meLiLcont">
							{{item.sex}}
						</text>
					</view>
					<view class="meLiLcont">
						{{item.cont}}
					</view>
				</view>
				<view class="memberLiR" v-if="item.select">
					<!-- {{item.type}} -->
					<image src="@/static/img/select.png" mode="" class="memRimg"></image>
				</view>
			</view>
		</view>
		<u-button type="primary" class='addDeter' @click='goNumber'>下一步</u-button>
	</view>
</template>

<script>
	// import searchTop from '@/components/searchTop';
	export default {
		components: {
			// searchTop,
		},
		data() {
			return {
				type: '',
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
				list: [],
				expShow: false,
				expaList: ['一倍', '二倍', '三倍', '四倍', '五倍', '六倍', '七倍'],
				value: [3],
				indicatorStyle: `height: 80rpx;lineHeight:80rpx`,
				expaItem: [3],
				form: {}, //上传数据占存



			}
		},
		// onLoad: function(val) {
		// 	// 回显
		// 	var list=this.$store.state.memberList.map(item=>{return item.id})
		// 	// console.log(list,this.$store.state.memberList) 
		// 	// console.log(this.list) 
		// 	this.list.map(item=>{
		// 		if(list.indexOf(item.id)!=-1){
		// 			item.select=true
		// 		}
		// 	})
		// },
		mounted() {
			// console.log(12)

		},
		// onLoad: function(val) {
		// 	if (val.id) {
		// 		this.id = val.id
		// 		this.listApi()
		// 	}
		// },
		onLoad() {
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'选择装备')
				this.listApi()
		},
		methods: {
			// 全选
			allSel() {
				this.list.map(item => item.select = true)
				this.$forceUpdate()
			},
			seleChang(item) {
				item.select = !item.select
				this.$forceUpdate()
			},
			// 下一步
			goNumber() {
				let arr = []
				this.list.forEach(item => {
					if (item.select == true) {
						arr.push(item)
					}
				})
				if (arr.length > 0) {
					this.$store.commit('equipmentListChang', arr)
					uni.navigateTo({
						url:'./fillNumber'
					})
					// console.log(arr)
					// uni.navigateBack()
				} else {
					this.$uToast.show('请选择装备', 'error')
				}
			},
			// 查询
			determine(val) {
				// console.log(val)
				this.popList.map(item => {
					// console.log(item.ulInde)
				})
			},
			listApi() {
				// this.status = 'loading'
				this.$Api.equipmentList().then(res => {
					if (res.code == 200) {
						this.list = res.data
						var list = this.$store.state.equipmentList.map(item => {
							return item.id
						})
						this.list.map(item => {
							if (list.indexOf(item.id) != -1) {
								item.select = true
							} else {
								item.select = false

							}
						})
					}
				})
			},
			// 下拉框 
			// selectList(){
			// 	// 装备
			// 	this.$Api.equipmentList().then(res=>{
			// 		if(res.code==200){
			// 			this.equiList=res.data
			// 		}
			// 	})
			// },

		}
	}
</script>

<style lang="scss" scoped>
	.list {
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
					.memRimg {
						width: 28rpx;
						height: 24rpx;
					}
				}
			}
		}

	}
</style>
