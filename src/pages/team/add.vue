<template>
	<view class="add">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					专业队信息
				</view>
				<view class="navRig" @click='determine'>
					完成
				</view>
			</view>
		</u-navbar> -->
		<view class="navTop flexCenter">
			<view class="navTitle">
				<!-- 专业队信息 -->
			</view>
			<view class="navRig" @click='determine'>
				完成
			</view>
		</view>
		<popSelect ref='popSelect' :popList='areaList' title='行政区域' lable='name' @popDete='popDete'
			:listAct='form.area'></popSelect>
		<popSelect ref='popSelect1' :popList='abilityTypeList' title='能力类型' lable='name' @popDete='popDeteOne'
			:listAct='form.abilityType'></popSelect>
		<popSelect ref='popSelect2' :popList='accountByRoleList' title='联络员' @popDete='popDeteTwo'></popSelect>
		<popSelect ref='popSelect3' :popList='newteamOption' title='新型专业队' @popDete='popDete3'></popSelect>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="infUl">
			<view class="infUlLi">
				<view class="iulL">
					<text class="redTs">*</text>
					专业队名称
				</view>
				<view class="iulR">
					<u-input v-model="form.name" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
			<view class="infUlLi">
				<view class="iulL">
					主管单位
				</view>
				<view class="iulR flexCenter">
					<u-input v-model="form.uint" type="text" placeholder='请输入' class='iulrInput' />
					<!-- <view class="iulRtex" :class="form.a?'iulRtexColAct':'iulRtexCol'">
						{{form.a?form.a:'请输入'}}
					</view>
				<image src="../../static/img/right.png" mode="" class="iulRrig"></image> -->
				</view>
			</view>
			<view class="infUlLi" @click="roleId != 2?$refs.popSelect.popShow=true:''">
				<view class="iulL">
					<text class="redTs">*</text>
					行政区域
				</view>
				<view class="iulR flexCenter">
					<!-- <u-input v-model="form.a" type="text" placeholder='请输入' class='iulrInput' /> -->
					<!-- <view class="iulRtex" :class="form.xz.xz?'iulRtexColAct':'iulRtexCol'">
						{{form.xz.xz?form.xz.xz:'请选择'}}
					</view> -->
					<view class="iulRtex" :class="form.area&&form.area.name?'iulRtexColAct':'iulRtexCol'">
						{{form.area&&form.area.name?form.area&&form.area.name:'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<view class="infUlLi" @click="$refs.popSelect1.popShow=true">
				<view class="iulL">
					能力类型
				</view>
				<view class="iulR flexCenter">
					<!-- <u-input v-model="form.a" type="text" placeholder='请输入' class='iulrInput' /> -->
					<!-- <view class="iulRtex" :class="form.nl.nl?'iulRtexColAct':'iulRtexCol'">
						{{form.nl.nl?form.nl.nl:'请选择'}}
					</view> -->
					<view class="iulRtex" :class="form.abilityType&&form.abilityType.name?'iulRtexColAct':'iulRtexCol'">
						{{form.abilityType&&form.abilityType.name?form.abilityType&&form.abilityType.name:'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="infUl">
			<!-- 			<view class="infUlLi">
				<view class="iulL">
				<text class="redTs">*</text>
					专业队编号
				</view>
				<view class="iulR">
					<u-input v-model="form.number" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view> -->
			<!-- 		<view class="infUlLi">
				<view class="iulL">
					值班电话
				</view>
				<view class="iulR">
					<u-input v-model="form.dutyPhone" type="number" placeholder='请输入' class='iulrInput'
						maxlength='11' />
				</view>
			</view> -->
			<view class="infUlLi">
				<view class="iulL">
					分队名称
				</view>
				<view class="iulR">
					<u-input v-model="form.branchTeam" type="number" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
			<view class="infUlLi">
				<view class="iulL">
					地址
				</view>
				<view class="iulR">
					<u-input v-model="form.address" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
			<view class="infUlLi">
				<view class="iulL">
					经度
				</view>
				<view class="iulR">
					<u-input v-model="form.longitude" type="number" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
			<view class="infUlLi">
				<view class="iulL">
					纬度
				</view>
				<view class="iulR">
					<u-input v-model="form.latitude" type="number" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="infUl">
			<!-- 			<view class="infUlLi">
				<view class="iulL">
					人数
				</view>
				<view class="iulR">
					<u-input v-model="form.personNum" type="number" placeholder='请输入' class='iulrInput' />
				</view>
			</view> -->
			<view class="infUlLi">
				<view class="iulL">
					组建单位
				</view>
				<view class="iulR">
					<u-input v-model="form.buildUnit" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
			<view class="infUlLi">
				<view class="iulL">
					队伍描述
				</view>
				<view class="iulR">
					<u-input v-model="form.teamDescribe" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="infUl">
			<view class="infUlLi" @click="$refs.popSelect2.popShow=true">
				<view class="iulL">
					<text class="redTs">*</text>
					联络员:
				</view>
				<view class="iulR flexCenter">
					<!-- <u-input v-model="form.liaison" type="text" placeholder='请输入' class='iulrInput' /> -->
					<view class="iulRtex" :class="form.headPersonName?'iulRtexColAct':'iulRtexCol'">
						{{form.headPersonName?form.headPersonName:'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<view class="infUlLi" @click="$refs.popSelect3.popShow=true">
				<view class="iulL">
					<!-- <text class="redTs">*</text> -->
					是否为新型专业队:
				</view>
				<view class="iulR flexCenter">
					<!-- <u-input v-model="form.liaison" type="text" placeholder='请输入' class='iulrInput' /> -->
					<view class="iulRtex" :class="isNewTeam?'iulRtexColAct':'iulRtexCol'">
						{{isNewTeam?isNewTeam:'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<!-- isNewTeam -->
			<!-- <view class="infUlLi">
				<view class="iulL">
					负责人
				</view>
				<view class="iulR">
					<u-input v-model="form.headPerson" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
			<view class="infUlLi">
				<view class="iulL">
					负责人电话
				</view>
				<view class="iulR">
					<u-input v-model="form.headPersonPhone" type="number" placeholder='请输入' class='iulrInput'  maxlength='11'/>
				</view>
			</view>
			<view class="infUlLi">
				<view class="iulL">
					应急联系人
				</view>
				<view class="iulR">
					<u-input v-model="form.emergencyPerson" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
			<view class="infUlLi">
				<view class="iulL">
					应急联系人电话
				</view>
				<view class="iulR">
					<u-input v-model="form.emergencyPersonPhone" type="number" placeholder='请输入' class='iulrInput' maxlength='11'/>
				</view>
			</view> -->
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>


		<!-- <u-button type="primary" class='addDeter' @click='determine'>确定</u-button> -->


	</view>
</template>

<script>
	import popSelect from '@/components/popSelect'
	// import {arrFilter} from '@/utils/utils.js'
	import {
		arrFilter
	} from '@/utils/utils.js'
	export default {
		components: {
			popSelect,
		},
		data() {
			return {
				// 1 市人防办 2 县人防办 3 教员 4 联络员
				roleId: uni.getStorageSync('roleId'),
				userInfor: JSON.parse(uni.getStorageSync('userInfor')),
				id: '',
				isNewTeam: "",
				form: {
					area: {
						id: '',
						name: ''
					}
				},
				newteamOption: [{
						id: 1,
						name: "是",
					},
					{
						id: 0,
						name: "否",
					},
				],
				areaList: [],
				abilityTypeList: [],
				accountByRoleList: [],

			}
		},
		onLoad: function(val) {
			let pagePath = this.$mp.page.route
			this.$myMD.userReporting(pagePath, '专业队信息')
			this.selectList()
			if (val.id) {
				this.id = val.id
				this.detail()
			} else {
				// console.log(this.userInfor,123)
				this.form.area.id = this.userInfor.administrativeCode
				this.form.area.name = this.userInfor.administrativeName
			}
		},
		methods: {
			determine() {
				if (!this.form.name) {
					this.$uToast.show('请输入专业队名称', 'error')
					return
				}
				if (!this.form.number) {
					this.$uToast.show('请输入专业队编号', 'error')
					return
				}
				if (!this.form.headPersonId) {
					this.$uToast.show('请选择联络员', 'error')
					return
				}
				let params = {
					...this.form
				}
				if (this.form.area && this.form.area.id) {
					// 	console.log(this.form.area.id)
					params.area = this.form.area.id || ''
				}
				if (this.form.abilityType && this.form.abilityType.id) {
					params.abilityType = this.form.abilityType.id || ''
				}
				// console.log(params)
				// return
				if (this.id) {
					params.id = this.id
					this.teamEdit(params)
				} else {
					this.teamAdd(params)
				}
			},
			teamAdd(params) {
				this.$Api.teamAdd(params).then(res => {
					if (res.code == 200) {
						this.$uToast.show('新增成功', 'success')
						uni.navigateBack()
					} else {
						this.$uToast.show(res.message, 'error')
					}
				})
			},
			teamEdit(params) {
				this.$Api.teamEdit(params).then(res => {
					if (res.code == 200) {
						this.$uToast.show('编辑成功', 'success')
						uni.navigateBack()
					} else {
						this.$uToast.show(res.message, 'error')
					}
				})
			},
			// 行政确定
			popDete(val) {
				this.form.area = val
				this.$forceUpdate()
				// console.log(this.form.xz,lable,0)
			},
			// 能力确定
			popDeteOne(val) {
				this.form.abilityType = val
				this.$forceUpdate()
				// console.log(this.form.nl,1)
			},
			// 联络员确定
			popDeteTwo(val) {
				this.form.headPersonId = val.id
				this.form.headPersonName = val.name
				this.$forceUpdate()
				// console.log(this.form.headPersonIdName,0)
			},
			popDete3(val) {
				this.form.isNewTeam = val.id
				this.isNewTeam = val.isNewTeam
				this.$forceUpdate()
				// console.log(this.form.headPersonIdName,0)
			},
			detail() {
				this.$Api.teamDetail({
					id: this.id
				}).then(res => {
					if (res.code == 200) {
						this.form = res.data
						// if(this.form.area){
						// 回显
						this.form.area = arrFilter(this.areaList, this.form.area)
						// }
						// if(this.form.abilityType){
						this.form.abilityType = arrFilter(this.abilityTypeList, this.form.abilityType)
						if (this.form.headPersonId) {
							this.accountByRoleList.map(item => {
								if (item.id == this.form.headPersonId) {
									this.form.headPersonName = item.name
								}
							})
						}
						// }
						// this.$forceUpdate()
						// console.log(this.form.area,this.form.abilityType)
					}
				})
			},
			// 字典
			selectList() {
				// 行政区域
				// this.$Api.ZD_XZQDM().then(res=>{
				this.$Api.ZD_WZ_XZQDM().then(res => {
					if (res.code == 200) {
						this.areaList = res.data
						// this.areaList=res.page.records
						// console.log(this.areaList)
					}
				})
				// 能力类型
				this.$Api.ZD_ZZZH_ZYDNLLX().then(res => {
					if (res.code == 200) {
						this.abilityTypeList = res.data
						// console.log(this.abilityTypeList)
						// this.abilityTypeList=res.page.records
					}
				})
				// 联络员
				this.$Api.getAccountByRoleList({
					id: 4
				}).then(res => {
					if (res.code == 200) {
						this.accountByRoleList = res.data
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.add {
		padding-bottom: 80rpx;
	}
</style>
