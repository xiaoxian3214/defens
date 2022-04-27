<template>
	<view class="detail">
		<!-- 该页面占时不用了 -->
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					历史任务详情
				</view>
			</view>
		</u-navbar> -->
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi">
				<view class="detailUlLiL">
					任务名称
				</view>
				<view class="detailUlLiR">
					{{detail.name}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					集结时间
				</view>
				<view class="detailUlLiR">
					{{detail.time}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					集结地点
				</view>
				<view class="detailUlLiR">
					{{detail.dre}}
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi">
				<view class="detailUlLiL">
					专业队
				</view>
				<view class="detailUlLiR">
					{{detail.team}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					专业队队员
				</view>
				<view class="detailUlLiR">
					{{detail.member}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					携带装备情况
				</view>
				<view class="detailUlLiR">
					{{detail.equ}}
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi flexCenter">
				<view class="detailUlLiL">
					行动结果
				</view>
				<view class="" :class="detail.end==0?'textCol':'textCol1'">
					{{detail.end==0?'未完成任务':'完成任务'}}
				</view>
			</view>
			<view class="deUlLiLtex">
				<view class="deUlLiLcon">
					哈比师傅有噶师傅的有害u有的话我i蒜蓉会发嗲u凯撒春节后丢服啊的时间福利啊
				</view>
				<view class="deUlLiLimgBox">
					<image src='../../static/img/home/topBack1.png' mode="" class="deUlLiLimg" v-for="(item,index) in 5" :key='index'></image>
					<view class="deUlLiLimg" v-if="5%3==2">
					</view>
				</view>
				<!-- <u-input v-model="detail.d" type="textarea"  placeholder='请输入……'/> -->
				<!-- :custom-btn='true' -->
				<!-- <u-upload :action="action" :file-list="fileList" max-count='9' :custom-btn='true'>
					<view class="uploBox" slot="addBtn">
						<image src="../../static/img/upload.png" mode="" class="uploImg"></image>
					</view>
				</u-upload> -->
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail:{
					name:'狙击枪射击练习',
					time:'2021.06.01-12:00',
					dre:'操场',
					team:'狙击专业队',
					member:'王小明、李大陆、张思',
					equ:'狙击枪',
					end:1,
				}
			}
		},
		onLoad() {
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'历史任务详情')
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.detail{
	.textCol {
		color: #FF6E6E;
	}
	
	.textCol1 {
		color: #007AFF;
	}
}
</style>
