<template>
	<view class="add">
		<!-- <u-navbar :border-bottom='false'> -->
			<view class="navTop flexCenter">
				<view class="navTitle">
					<!-- 训练计划发布与管理 -->
				</view>
				<view class="navRig" @click='determine'>
					完成
				</view>
			</view>
		<!-- </u-navbar> -->
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="addInp">
			<input v-model="name" type="text" placeholder='请输入计划名称' class='addInput' />
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				name:'',
			}
		},
		onLoad:function(val){
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'训练计划发布与管理')
			this.id=val.id||''
			this.name=val.name||''
		},
		methods: {
			// 完成
			determine(){
				if(!this.name){
					this.$uToast.show('请输入训练名称','error')
					return
				}
				if(this.id){
					this.edit()
				}else{
					this.add()
				}
				// console.log(this.title)
			},
			add(){
				let params={
					name:this.name
				}
				this.$Api.traPlanAdd(params).then(res=>{
					if(res.code==200){
						this.$uToast.show('新增成功','success')
						uni.navigateBack()
					}else{
						this.$uToast.show(res.message,'error')
					}
				})
				
			},
			edit(){
				let params={
					name:this.name,
					id:this.id
				}
				this.$Api.traPlanUpdate(params).then(res=>{
					if(res.code==200){
						this.$uToast.show('编辑成功','success')
						uni.navigateBack()
					}else{
						this.$uToast.show(res.message,'error')
					}
				})
				
			},
			

		}
	}
</script>

<style lang="scss" scoped>
	.add {
		.addInp{
			// width: 375px;
			padding: 0 30rpx;
			height: 120rpx;
			border-bottom: 2rpx solid #EEEEEE;
			.addInput{
				height: 120rpx;
			}
		}
	}
</style>
