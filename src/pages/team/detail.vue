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
					专业队名称
				</view>
				<view class="detailUlLiR">
					{{form.name}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					主管单位
				</view>
				<view class="detailUlLiR">
					{{form.uint}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					行政区域
				</view>
				<view class="detailUlLiR">
					{{form.areaNmae}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					能力类型
				</view>
				<view class="detailUlLiR">
					{{form.abilityTypeName}}
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi">
				<view class="detailUlLiL">
					专业队编号
				</view>
				<view class="detailUlLiR">
					{{form.number}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					值班电话
				</view>
				<view class="detailUlLiR">
					{{form.dutyPhone}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					地址
				</view>
				<view class="detailUlLiR">
					{{form.address}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					经度
				</view>
				<view class="detailUlLiR">
					{{form.longitude}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					纬度
				</view>
				<view class="detailUlLiR">
					{{form.latitude}}
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi">
				<view class="detailUlLiL">
					人数
				</view>
				<view class="detailUlLiR">
					{{form.personNum}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					组建单位
				</view>
				<view class="detailUlLiR">
					{{form.buildUnit}}
				</view>
			</view>
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
					队伍描述
				</view>
				<view class="detailUlLiR">
					{{form.teamDescribe}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					联络员
				</view>
				<view class="detailUlLiR">
					{{form.headPerson}}
				</view>
			</view>
			
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>

	</view>
</template>

<script>
	import {arrFilter} from '@/utils/utils.js'
	export default {
		data() {
			return {
				form: {},
				areaList:[],
				abilityTypeList:[],
				accountByRoleList:[],
			}
		},
		onLoad:function(val){
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'专业队信息')
			// if(val.id){
				this.id=val.id
				this.selectList()
				this.detail()
			// }
		},
		methods: {
			
			detail(){
				this.$Api.teamDetail({id:this.id}).then(res=>{
					if(res.code==200){
						this.form=res.data
						this.form.areaNmae=arrFilter(this.areaList,this.form.area).name
						this.form.abilityTypeName=arrFilter(this.abilityTypeList,this.form.abilityType).name
						// console.log(this.form.areaNmae,this.form.abilityTypeName,123)
						// this.form.politicalLandscape=arrFilter(this.accountByRoleList,this.form.politicalLandscape).name
						// this.$forceUpdate()
						// console.log(this.form.area,this.form.abilityType)
					}
				})
			},
			// 字典
			selectList(){
				// 行政区域
				// this.$Api.ZD_XZQDM().then(res=>{
				this.$Api.ZD_WZ_XZQDM().then(res=>{
					if(res.code==200){
						this.areaList=res.data
						// this.areaList=res.page.records
						// console.log(this.areaList)
					}
				})
				// 能力类型
				this.$Api.ZD_ZZZH_ZYDNLLX().then(res=>{
					if(res.code==200){
						this.abilityTypeList=res.data
						// console.log(this.abilityTypeList)
						// this.abilityTypeList=res.page.records
					}
				})
				// 联络员
				this.$Api.getAccountByRoleList({id:4}).then(res=>{
					if(res.code==200){
						this.accountByRoleList=res.data
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
