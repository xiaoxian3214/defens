<template>
	<view class="deleModal">
		<u-modal v-model="delShow" content="确定删除？" :show-title='false' :show-cancel-button='true'
			:confirm-style='confirmStyle' :cancel-style='cancelStyle' :content-style='contentStyle' @confirm="delConfirm"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				delShow: false,
				confirmStyle: {
					width: '300rpx',
					height: '92rpx',
					background: '#007AFF',
					fontSize: '32rpx',
					fontFamily: 'PingFangSC-Regular, PingFang SC',
					fontWeight: '400',
					color: '#FFFFFF',
				},
				cancelStyle:{
					width: '300rpx',
					height: '92rpx',
					fontSize: '32rpx',
					fontFamily: 'PingFangSC-Regular, PingFang SC',
					fontWeight: '400',
				},
				contentStyle:{
					width: '600rpx',
					height: '166rpx',
					fontSize: '32rpx',
					fontFamily: 'PingFangSC-Regular, PingFang SC',
					fontWeight: '400',	
					color: '#333333',
				},
			}
		},
		methods: {
			delConfirm(){
				this.$emit('delConfirm')
			}

		}
	}
</script>

<style lang="scss" scoped>
	.deleModal {}
</style>
