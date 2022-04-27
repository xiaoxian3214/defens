<template>
	<view class="searchTop flexCenter">
		<view class="searchBox flexCenter"  v-if='isInput'>
			<image src="../static/img/lookup.png" mode="" class="lookupImg" @click="determine"></image>
			<view class="gap"></view>
			<u-input v-model="search" type="text" :placeholder='isPlace' class='input'/>
		</view>
		<view class=""  v-else>
		</view>
		<view class="searchR flexCenter" @click="changShow(true)" v-if="isImg">
			<image src="../static/img/search.png" mode="" class="searchImg"></image>
			筛选
		</view>
		<view class="searchR flexCenter" @click="changShow(true)" v-if="isImgCop">
			类型
			<image src="../static/img/bot.png" mode="" class="searchBot"></image>
		</view>


	</view>
</template>

<script>
	export default {
		props:{
			isInput:{
			  type: Boolean,
			  default: true
			},
			isImg:{
			  type: Boolean,
			  default: true
			},
			isImgCop:{
			  type: Boolean,
			  default: false
			},
			isPlace:{
			  default: '请输入搜索信息'
			}
		},
		data() {
			return {
				search: '',

			}
		},
		methods: {
			// 筛选弹出框
			changShow(val){
				this.$emit('changShow',val)
			},
			determine(){
				this.$emit('determine',this.search)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.searchTop {
		padding: 0 30rpx 8rpx;
		background: #FFFFFF;

		.searchBox {
			// width: 572rpx;
			flex: 2;
			height: 60rpx;
			background: #F5F5F5;
			border-radius: 28rpx;
			padding: 14rpx 30rpx;
			flex-shrink: 0;

			// flex-wrap: wrap;
			.lookupImg {
				width: 32rpx;
				height: 32rpx;
			}

			.gap {
				// width: 2rpx;
				height: 32rpx;
				border: 2rpx solid rgba(151, 151, 151, 0.12);
				margin: 0 28rpx;
			}

			.input {
				// width: 572rpx;
				// height: 60rpx;
				// border: 2rpx solid #F5F5F5;
			}

		}

		.searchR {
			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #007AFF;
			margin-left: 34rpx;

			.searchImg {
				width: 32rpx;
				height: 32rpx;
				margin-right: 4rpx;
			}
			.searchBot{
				width: 16rpx;
				height: 16rpx;
				margin-left: 4rpx;
			}

		}
	}
</style>
