<template>
	<view class="detail">
		<!-- <u-navbar :border-bottom='false'>
		</u-navbar> -->
		
		<view class="top-list">
			<view class="list-title">
				{{form.title}}
			</view>
			<view class="title2">
				<view class="title3" v-if="form.type">
					{{form.type}}
				</view>
				<view class="titleTime">
					{{form.createTime}}
				</view>
			</view>
			<view class="u-content">
				<view class="" v-html='form.content'>
					
				</view>
				<!-- <u-parse :html="content" :tag-style="style"></u-parse> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				form:{},
								content: `
											<p>人民防空工程亦叫人防工程，是指为保障战时人员与物资掩蔽、人民防空指挥、医疗救护而单独修。
				人防工程在建筑、结构、通风、给排水、电气等各方面都有特殊的防护要求，对工程的整体性要求很高，必须做到防护可靠。为了达到防护要求，设计部门严格按照国家有关规范、规程、规定精心设计。</p>
											<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
											<p>施工部门要严格按照施工及验收规范、规程和设计图纸的要求精心组织、精心施工，使人防工程建设真正做到质量第一。此外，应保证工程整体的密闭性，人防墙体在建设和使用过程中不随意开洞，以满足对生化武器的防护要求。</p>
										`,
							style: {
												// 字符串的形式
												p: 'color: #565656;font-size:32rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;margin-bottom:24rpx',
												span: 'font-size: 30rpx'
											}
			}
		},
		onLoad:function(val){
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'学习管理')
			this.id=val.id,
			this.detail()
		},
		methods: {
			detail(){
				this.$Api.knowledgeDetail({id:this.id}).then(res=>{
					if(res.code==200){
						this.form=res.data
						this.form.content=this.form.content.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ')
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
.detail{
	
	
	.top-list {
		background: #FFFFFF;
		padding: 32rpx 34rpx 32rpx 34rpx;
	
		.list-title {
			font-size: 40rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #333333;
		}
	
		.title2 {
			display: flex;
			margin-top: 8rpx;
	
			.title3 {
				min-width: 120rpx;
				padding: 0 10rpx;
				margin-right: 16rpx;
				background: rgba(0, 122, 255, 0.1);
				border-radius: 4rpx;
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #007AFF;
				text-align: center;
				height: 38rpx;
				line-height: 38rpx;
			}
	
			.titleTime {
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #999999;
			}
		}
	.u-content{
		margin-top: 24rpx;
	}
	}
}
</style>
