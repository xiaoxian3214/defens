<template>
	<view class="popup">
		<u-popup v-model="show" mode='right' width='600'>
			<view class="popupBox">
				<view class="popupLi" v-for="(item,index) in popList" :key='index'>
					<view class="plTitle">
						{{item.title}}
					</view>
					<view class="pLiUl" v-if="item.title!='年龄区间'">
						<view :class="item.ulInde==index2?'pluLiAct':'pluLi'" class="pluLiBox" v-for="(item2,index2) in item.ul" :key='index2' @click="item.ulInde=index2">
							{{item2.name}}
						</view>
					</view>
					<view class="ageStyle flexCenter" v-else>
						<!-- <view class='minAge'> -->
						<u-input v-model="item.minAge" type="number" placeholder='最小年龄' class='minAge' maxlength='3' input-align='center'/>
						<!-- </view> -->
						<text class="ageText">-</text>
						 
						<!-- <view class='minAge'> -->
						 <!-- oninput ="value=value.replace(/[^\d]/g,'')" -->
						<u-input v-model="item.maxAge" type="number" placeholder='最大年龄' class='minAge' maxlength='3' input-align='center'/>
						<!-- </view> -->
					</view>
					
				</view>
			</view>
			<view class="flexCenter butBox">
            <!-- <button type="default" class='reset'>重置</button>
            <button type="primary" class='determine'>确定</button> -->
				<u-button class='reset' @click='reset'>重置</u-button>
				<u-button type="primary" class='determine' @click='determine'>确定</u-button>
			</view>
		</u-popup>
		
	</view>
</template>

<script>
	export default {
		props:['popList'],
		data() {
			return {
				show:false
			}
		},
		methods: {
			// 重置
			reset(){
				this.show=false
				this.$emit('reset')
			},
			// 查询
			determine(){
				let isPop=false
				this.popList.map(item=>{
					if(item.title=='年龄区间'){
						if(item.minAge<0||item.maxAge<0){
						this.$uToast.show('年龄不能为负数','error')
						isPop=true
							return
						}
						if(item.minAge>item.maxAge){
						this.$uToast.show('最大年龄不能小于最小年龄','error')
						isPop=true
							return
						}
					}
				})
				if(isPop){
					return
				}
				this.show=false
				this.$emit('determine')
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.popupBox{
		margin-top: 114rpx;
		padding-left: 32rpx;
		.popupLi{
			.plTitle{
				font-size: 28rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #333333;
				margin-bottom: 32rpx;
			}
			.pLiUl{
				flex-wrap: wrap;
				margin-bottom: 48rpx;
				display: flex;
				// justify-content: flex-start;
				.pluLiBox{
					min-width: 168rpx;
					height: 64rpx;
					border-radius: 8rpx;
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					// line-height: 32rpx;
					text-align: center;
					line-height: 64rpx;
					margin-bottom: 24rpx;
					margin-right: 16rpx;
				}
				.pluLi{
					background: #F2F1F1;
					color: #333333;
				}
				.pluLiAct{
					background: #007AFF;
					color: #FFFFFF;
					
				}
			}
			.ageStyle{
				padding-right: 16rpx;
				margin-bottom: 48rpx;
				.minAge{
					width: 244rpx;
					height: 64rpx;
					background: #F2F1F1;
					border-radius: 8rpx;
					// margin: 0 20rpx;
					// flex-shrink: 0;
					// text-align: center;
				}
				.ageText{
					margin: 0 16rpx;
				}
			}
		}
		
	}
	.butBox{
		padding: 0 32rpx;
		margin-top: 240rpx;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		.reset{
			width: 256rpx;
			height: 64rpx;
			border-radius: 8rpx;
			border: 2rpx solid #EEEEEE;
			color: #999999;
		}
		.determine{
			width: 256rpx;
			height: 64rpx;
			background: #007AFF;
			border-radius: 8rpx;
			color: #FFFFFF;
		}
	}

</style>
