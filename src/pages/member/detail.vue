<template>
	<view class="detail">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					队员信息
				</view>
			</view>
		</u-navbar> -->
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi">
				<view class="detailUlLiL">
					姓名
				</view>
				<view class="detailUlLiR">
					{{form.name}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					性别
				</view>
				<view class="detailUlLiR">
					{{form.sex}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					年龄
				</view>
				<view class="detailUlLiR">
					{{form.age}}
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi">
				<view class="detailUlLiL">
					文化程度
				</view>
				<view class="detailUlLiR">
					{{form.education}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					政治面貌
				</view>
				<view class="detailUlLiR">
					{{form.politicalLandscape}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					联系电话
				</view>
				<view class="detailUlLiR">
					{{form.phone}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					身份证
				</view>
				<view class="detailUlLiR">
					{{form.idCard}}
				</view>
			</view>
			<!-- 			<view class="detailUlLi">
				<view class="detailUlLiL">
					户籍
				</view>
				<view class="detailUlLiR">
					{{form.householdRegistration}}
				</view>
			</view> -->
			<!-- 		<view class="detailUlLi">
				<view class="detailUlLiL">
					现居住地址
				</view>
				<view class="detailUlLiR">
					{{form.address}}
				</view>
			</view> -->
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi">
				<view class="detailUlLiL">
					专业
				</view>
				<view class="detailUlLiR">
					{{form.professional}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					职务
				</view>
				<view class="detailUlLiR">
					{{form.position}}
				</view>
			</view>
			<!-- 		<view class="detailUlLi">
				<view class="detailUlLiL">
					入队时间
				</view>
				<view class="detailUlLiR">
					{{form.inTeamTime}}
				</view>
			</view> -->
			<!-- <view class="detailUlLi">
				<view class="detailUlLiL">
					主管单位
				</view>
				<view class="detailUlLiR">
					{{form.unit}}
				</view>
			</view> -->
			<view class="detailUlLi">
				<view class="detailUlLiL">
					所属专业队
				</view>
				<view class="detailUlLiR">
					{{form.team}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					专业队编号
				</view>
				<view class="detailUlLiR">
					{{form.teamNumber}}
				</view>
			</view>
			<!-- 	<view class="detailUlLi">
				<view class="detailUlLiL">
					队员来源
				</view>
				<view class="detailUlLiR">
					{{form.source==1?'正式队员':form.source==2?'扩编队员':''}}
				</view>
			</view> -->
			<view class="detailUlLi">
				<view class="detailUlLiL">
					主管单位
				</view>
				<view class="detailUlLiR">
					{{form.directorUnit}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					工作单位
				</view>
				<view class="detailUlLiR">
					{{form.workUnit}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					是否退役
				</view>
				<view class="detailUlLiR">
					{{form.isRetired== 1 ? "是" : "否"}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					行政区域
				</view>
				<view class="detailUlLiR">
					{{form.administrativeName}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					是否拓编人员
				</view>
				<view class="detailUlLiR">
					{{form.sign == 0 ? "否" : "是"}}
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>

	</view>
</template>

<script>
	import {
		arrFilter
	} from '@/utils/utils.js'
	export default {
		data() {
			return {
				form: {},
				sexList: [],
				polList: [],
				eduList: [],
			}
		},
		onLoad: function(val) {
			let pagePath = this.$mp.page.route
			this.$myMD.userReporting(pagePath, '队员信息')
			// if(val.id){
			this.id = val.id
			this.selectList()
			this.detail()
			// }
		},
		methods: {

			detail() {
				this.$Api.playersDetail({
					id: this.id
				}).then(res => {
					if (res.code == 200) {
						this.form = res.data
						this.form.sex = arrFilter(this.sexList, this.form.sex).name
						this.form.education = arrFilter(this.eduList, this.form.education).name
						this.form.politicalLandscape = arrFilter(this.polList, this.form.politicalLandscape).name
						// this.$forceUpdate()
						// console.log(this.form.area,this.form.abilityType)
					}
				})
			},
			// 字典
			selectList() {
				// 性别
				this.$Api.ZD_ZZZH_XB().then(res => {
					if (res.code == 200) {
						this.sexList = res.data
					}
				})
				// 文化程度 
				this.$Api.ZD_XLDJ().then(res => {
					if (res.code == 200) {
						this.eduList = res.data
					}
				})
				// 政治面貌
				this.$Api.ZD_ZZZH_ZZMM().then(res => {
					if (res.code == 200) {
						this.polList = res.data
					}
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.detail {
		padding-bottom: 120rpx;
	}
</style>
