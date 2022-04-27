<template>
	<view class="fillNumber">
		<!-- <u-navbar :border-bottom='false'> -->
			<view class="navTop flexCenter">
				<view class="navTitle">
					<!-- 填写数量 -->
				</view>
				<view class="navRig" @click='determine'>
					完成
				</view>
			</view>
		<!-- </u-navbar> -->
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="addInp flexCenter" v-for="(item,index) in equipmentList" :key='index'>
			<view class="filLab">
				{{item.name}}
			</view>
			<input v-model="item.num" type="number" placeholder='请输入' class='addInput' />
		</view>
		<u-toast ref="uToast" />

	</view>
</template>

<script>
	export default {
		data() {
			return {
				equipmentList:{},
			}
		},
		// onLoad() {
		// 	this.lable=this.$store.state.taskForm.equipment
		// 	// this.lable=this.$store.state.taskForm
		// 	// console.log(this.$store.state.taskForm)
		// },
		onLoad:function(val){
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'填写数量')
			if(this.$store.state.equipmentList.length>0){
			this.equipmentList = this.$store.state.equipmentList
			}
		},
		methods: {
			// 完成
			determine(){
				// console.log(this.title)
				let isTap=false
				this.equipmentList.map(item=>{
					if(!item.num){
						this.$uToast.show('请填写数量','error')
						isTap=true
					}
				})
				if(isTap){
					return
				}
				this.$store.commit('equipmentListChang',this.equipmentList)
				uni.navigateBack({delta:2})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.fillNumber {
		.addInp{
			// width: 375px;
			padding: 0 30rpx;
			height: 120rpx;
			border-bottom: 2rpx solid #EEEEEE;
			.filLab{
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #999999;
				line-height: 120rpx;
			}
			.addInput{
				height: 120rpx;
				text-align: right;
			}
		}
	}
</style>
