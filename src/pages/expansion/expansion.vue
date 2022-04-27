<template>
	<view class="expansion">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					战时扩编
				</view>
			</view>
		</u-navbar> -->
		<view class="detailUl">
			<view class="detailUlLi" @click="goTeamSel(0)">
				<view class="detailUlLiL">
					<text class="redTs">*</text>
					专业队
				</view>
				<view class="detailUlLiR flexCenter">
					<view class="iulRtex" :class="form.professionalTeamName?'iulRtexColAct':'iulRtexCol'">
						{{form.professionalTeamName?form.professionalTeamName:'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					<text class="redTs">*</text>
					主管单位
				</view>
				<view class="detailUlLiR flexCenter">
					<u-input v-model="form.directorUnit" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
			<!-- 			<view class="detailUlLi">
				<view class="detailUlLiL">
				<text class="redTs">*</text>
					专业
				</view>
				<view class="detailUlLiR flexCenter">
					<u-input v-model="form.professional" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view> -->
			<view class="detailUlLi">
				<view class="detailUlLiL">
					<text class="redTs">*</text>
					倍数
				</view>
				<view class="detailUlLiR flexCenter">
					<u-input v-model="form.multiple" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
		</view>
		<!-- <u-gap height="16" bg-color="#FAFAFA"></u-gap> -->
		<!-- <u-gap height="16" bg-color="#FAFAFA"></u-gap> -->
		<u-button type="primary" class='addDeter' @click='trainCon'>扩编</u-button>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	// import timePop from '@/components/timePop';
	export default {
		components: {
			// timePop,
		},
		data() {
			return {
				form: {
					teamId: "",
					directorUnit: "",
					professional: "",
					multiple: "",
				},

			}
		},
		onShow() {
			// console.log(this.$store.state.uploadForm)
			this.form = this.$store.state.taskForm
			// this.form.memberList = this.$store.state.memberList
			if (this.$store.state.teamItem.id) {
				console.log(this.$store.state.teamItem)
				this.form.professionalTeamId = this.$store.state.teamItem.id
				this.form.professionalTeamName = this.$store.state.teamItem.name
				this.form.directorUnit = this.$store.state.teamItem.directorUnit
			}
			this.form.equipmentList = this.$store.state.equipmentList
			// this.form.teamItem = this.$store.state.teamItem
			// this.form.equipment = this.$store.state.equipment
			// this.form.equipmentNum=this.$store.state.equipment.number
			// console.log(this.$store.state.equipment)
			this.$forceUpdate()
		},
		onLoad() {
			let pagePath = this.$mp.page.route
			this.$myMD.userReporting(pagePath, '战时扩编')
			// this.selectList()
		},
		methods: {
			// 发布
			trainCon() {
				if (!this.form.professionalTeamId) {
					this.$uToast.show('请选择专业队', 'error')
					return
				}
				if (!this.form.directorUnit) {
					this.$uToast.show('请输入主管单位', 'error')
					return
				}
				// if (!this.form.professional) {
				// 	this.$uToast.show('请输入专业', 'error')
				// 	return
				// }
				if (!this.form.multiple) {
					this.$uToast.show('请输入倍数', 'error')
					return
				}
				let params = {
					teamId: this.form.professionalTeamId,
					directorUnit: this.form.directorUnit,
					professional: this.form.professional,
					multiple: this.form.multiple,
				}
				// console.log(params)
				this.$Api.playersSourceExpansion(params).then(res => {
					if (res.code == 200) {
						this.$uToast.show('扩编成功', 'success')
						uni.navigateBack()
					} else {
						this.$uToast.show(res.message, 'error')
					}
				})

			},

			goTeamSel(type) {
				this.$store.commit('taskFormChang', this.form)
				// 专业队
				uni.navigateTo({
					url: '../expansion/list?type=' + 3
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.expansion {}
</style>
