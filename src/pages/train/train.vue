<template>
	<view class="train">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					训练计划发布与管理
				</view>
			</view>
		</u-navbar> -->
		<timePop ref='timePop' @timeDet='timeDet'></timePop>
		<popSelect ref='popSelect' :popList='trainingSubjects' title='训练科目'  @popDete='popDete'></popSelect>
		<popSelect ref='popSelect1' :popList='accountByRoleList' title='教员'  @popDete='popDeteOne'></popSelect>
		<view class="detailUl">
			<view class="detailUlLi" @click="$refs.timePop.timeShow=true">
				<view class="detailUlLiL">
				<text class="redTs">*</text>
					训练时间
				</view>
				<view class="detailUlLiR flexCenter">
					<view class="iulRtex" :class="form.startTime?'iulRtexColAct':'iulRtexCol'">
						{{form.startTime?form.startTime:'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
				<text class="redTs">*</text>
					训练地点
				</view>
				<view class="detailUlLiR flexCenter">
					<u-input v-model="form.address" type="text" placeholder='请输入' class='iulrInput' />
					<!-- <view class="iulRtex" :class="form.c?'iulRtexColAct':'iulRtexCol'">
							{{form.c?form.c:'请选择'}}
						</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image> -->
				</view>
			</view>
			<view class="detailUlLi"  @click="$refs.popSelect.popShow=true">
				<view class="detailUlLiL">
				<text class="redTs">*</text>
					训练科目
				</view>
				<view class="detailUlLiR flexCenter">
					<view class="iulRtex" :class="form.trainingSubject?'iulRtexColAct':'iulRtexCol'">
						{{form.trainingSubject?form.trainingSubject:'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<!-- <view class="detailUlLi" @click="goExpan">
						<view class="detailUlLiL">
							参训队伍
						</view>
						<view class="detailUlLiR flexCenter">
						<view class="iulRtex" :class="form.a?'iulRtexColAct':'iulRtexCol'">
							{{form.a?form.a.name:'请选择'}}
						</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
						</view>
					</view> -->

		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi">
				<view class="detailUlLiL">
				<text class="redTs">*</text>
					科目内容
				</view>
				<view class="detailUlLiR flexCenter">
					<view class="iulRtex" :class="form.trainingSubjectContent?'iulRtexColAct':'iulRtexCol'">
						{{form.trainingSubjectContent?form.trainingSubjectContent:'请选择'}}
					</view>
				</view>
			</view>
			<!-- <view class="detailUlLi">
				<view class="detailUlLiL">
					训练内容
				</view>
				<view class="detailUlLiR flexCenter">
					<view class="iulRtex" :class="form.c?'iulRtexColAct':'iulRtexCol'">
						{{form.c?form.c:'请选择'}}
					</view>
				</view>
			</view> -->
			<view class="detailUlLi">
				<view class="detailUlLiL">
				<!-- <text class="redTs">*</text> -->
					训练方式
				</view>
				<view class="detailUlLiR flexCenter">
					<u-input v-model="form.way" type="text" placeholder='请输入' class='iulrInput' />
					<!-- <view class="iulRtex" :class="form.c?'iulRtexColAct':'iulRtexCol'">
							{{form.c?form.c:'请选择'}}
						</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image> -->
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
				<text class="redTs">*</text>
					训练时长
				</view>
				<view class="detailUlLiR flexCenter">
					<u-input v-model="form.hours" type="number" placeholder='请输入' class='iulrInput' /> 小时
					<!-- <view class="iulRtex" :class="form.c?'iulRtexColAct':'iulRtexCol'">
							{{form.c?form.c:'请选择'}}
						</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image> -->
				</view>
			</view>

		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi"  @click="$refs.popSelect1.popShow=true">
				<view class="detailUlLiL">
				<text class="redTs">*</text>
					教员
				</view>
				<view class="detailUlLiR flexCenter">
					<!-- <u-input v-model="form.c" type="text" placeholder='请输入' class='iulrInput' /> -->
					<view class="iulRtex" :class="form.facultyName?'iulRtexColAct':'iulRtexCol'">
						{{form.facultyName?form.facultyName:'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
				<!-- <text class="redTs">*</text> -->
					考核方式
				</view>
				<view class="detailUlLiR flexCenter">
					<u-input v-model="form.accessType" type="text" placeholder='请输入' class='iulrInput' />
				<!-- 	<view class="iulRtex" :class="form.c?'iulRtexColAct':'iulRtexCol'">
						{{form.c?form.c:'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image> -->
				</view>
			</view>
			<view class="detailUlLi" @click="goExpan">
				<view class="detailUlLiL">
				<text class="redTs">*</text>
					参训队伍
				</view>
				<view class="detailUlLiR flexCenter">
					<view class="iulRtex" :class="form.professionalTeam?'iulRtexColAct':'iulRtexCol'">
						{{form.professionalTeam?form.professionalTeam:'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
				<text class="redTs">*</text>
					参训人数
				</view>
				<view class="detailUlLiR flexCenter">
					<u-input v-model="form.numberPerson" type="number" placeholder='请输入' class='iulrInput' />
					<!-- <view class="iulRtex" :class="form.c?'iulRtexColAct':'iulRtexCol'">
							{{form.c?form.c:'请选择'}}
						</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image> -->
				</view>
			</view>
			<!-- <view class="detailUlLi" style="border-bottom:none" @click="goMemberSelect">
				<view class="detailUlLiL">
				<text class="redTs">*</text>
					参训队员
				</view>
				<view class="detailUlLiR flexCenter">
					<view class="iulRtex"></view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<view class="deUlLimember flexCenter">
				<text class="deUlLimeText" v-for="(item,index) in form.list" :key='index'>{{item.name}}</text>
			</view> -->

		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>

		<!-- <view  class='addList' @click='addList'>
					<image src="../../static/img/addList.png" mode="" class="addListImg"></image>
					新增列表
					</view> -->
		<!-- <u-button type="primary" class='addDeter' @click='trainCon'>发布</u-button> -->
		<u-button type="primary" class='addDeter' @click='trainCon'>确定</u-button>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import timePop from '@/components/timePop';
	import popSelect from '@/components/popSelect';
	export default {
		components:{
			timePop,
			popSelect,
		},
		data() {
			return {
				// 1 市人防办 2 县人防办 3 教员 4 联络员
				roleId: uni.getStorageSync('roleId'),
				id:'',
				createUserId:'',
				planId:'',
				trainingSubjects:[],
				accountByRoleList:[],
				form: {},
			}
		},
		onLoad:function(val){
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'训练计划发布与管理')
			// this.createUserId=uni.getStorageSync('roleId')
			this.selectList()
			this.planId=val.planId||''
			if(val.id){
				this.id=val.id||''
			this.detail()
			}
		},
		onShow() {
			// console.log(this.$store.state.trainForm)
			// if(this.id){
			// this.detail()
			// }
			this.form = this.$store.state.trainForm
			// if(this.$store.state.memberList){
			// this.form.list = this.$store.state.memberList
			// }
			if(this.$store.state.teamItem.id){
			this.form.professionalTeamId = this.$store.state.teamItem.id
			this.form.professionalTeam = this.$store.state.teamItem.name
			this.trainingPersonNum()
			}
				// console.log(this.form.professionalTeam,this.$store.state.teamItem.name,this.$store.state.teamItem,123)
			this.$forceUpdate()
		},
		methods: {
			// 发布 确定
			trainCon() {
				let params={
					...this.form
				}
				params.planId=this.planId
				if(this.form.list&&this.form.list.length>0){
				// 	console.log(this.form.sex.id)
				let arr=this.form.list.map(item=>{return item.id})
				let arrVal=arr.join()
				params.professionalTeamPersonInformationId=arrVal
				// params.professionalTeamPersonInformationId=JSON.stringify(arrVal)
				}
				// if(this.form.education&&this.form.education.id){
				// params.education=this.form.education.id
				// }
				// if(this.form.politicalLandscape&&this.form.politicalLandscape.id){
				// params.politicalLandscape=this.form.politicalLandscape.id
				// }
				// console.log(params)
				// return
				if(this.id){
					params.id=this.id
					this.edit(params)
				}else{
					// params.createUserId=this.createUserId
					this.add(params)
				}
				// uni.navigateBack()
			},
			add(params){
				this.$Api.trainingAdd(params).then(res=>{
					if(res.code==200){
					this.$uToast.show('新增成功','success')
					uni.navigateBack()
					}else{
						this.$uToast.show(res.message,'error')
					}
				})
			},
			edit(params){
				this.$Api.trainingEdit(params).then(res=>{
					if(res.code==200){
						this.$uToast.show('编辑成功','success')
						uni.navigateBack()
					}else{
						this.$uToast.show(res.message,'error')
					}
				})
			},
			// 新增列表
			addList() {
				uni.navigateTo({
					url: './add'
				})
			},
			// 确定时间
			timeDet(dat){
				// this.form.startTime=dat.y+'.'+dat.m+'.'+dat.d+' - '+dat.h+':'+dat.mi
				this.form.startTime=dat.y+'-'+dat.m+'-'+dat.d+' '+dat.h+':'+dat.mi
				this.$forceUpdate()
			},
			// 科目确定
			popDete(val){
				this.form.trainingSubjectId=val.id
				this.form.trainingSubject=val.name
				this.form.trainingSubjectContent=val.content
				this.$forceUpdate()
				// console.log(this.form.xz,lable,0)
			},
			// 教员确定
			popDeteOne(val){
				this.form.faculty=val.id
				this.form.facultyName=val.name
				this.$forceUpdate()
				// console.log(this.form.xz,lable,0)
			},
			// 参训队伍
			goExpan() {
				// return
				this.$store.commit('trainFormChang', this.form)
					let isCityUser = this.roleId == 1 ? 1 : 0
				uni.navigateTo({
					url: '../expansion/list?type=' + 3+ '&isCityUser=' + isCityUser
				})
			},
			// 参训人数回显
			trainingPersonNum() {
				this.$Api.trainingPersonNum({
					teamId: this.form.professionalTeamId,
					planId: this.planId
				}).then(res => {
					if (res.code == 200) {
						this.form.numberPerson = res.data.numberPerson
						// // console.log(this.form)
						this.$forceUpdate()
					}
				})
			},
			// 队员
			goMemberSelect() {
				// console.log(31)
				// this.$store.commit('memberListChang',this.form.memberList)
				if(!this.form.professionalTeamId){
						this.$refs.uToast.show({
							title: '请先选择参训队伍',
							type: 'error',
						})
						return
				}
				this.$store.commit('trainFormChang', this.form)
				uni.navigateTo({
					url: '../../components/memberSelect?id='+this.form.professionalTeamId
				})
			},
			detail(){
				this.$Api.trainingDetail({id:this.id}).then(res=>{
					if(res.code==200){
						this.form=res.data
						let teamItem={
							id:this.form.professionalTeamId,
							name:this.form.professionalTeam,
						}
						this.$store.commit('teamItemChang',teamItem)
						this.$store.commit('memberListChang',this.form.list)
						// this.$forceUpdate()
					}
				})
			},
			// 字典
			selectList(){
				// 训练科目
				this.$Api.trainingSubjects().then(res=>{
					if(res.code==200){
						this.trainingSubjects=res.data
					}
				})
				// 所有角色
				this.$Api.getRoleList().then(res=>{
					if(res.code==200){
						res.data.map(item=>{
							if(item.name=='教员'){
								this.getAccountByRoleList(item.id)
							}
						})
					}
				})
			},
			getAccountByRoleList(id){
				// 教员
				this.$Api.getAccountByRoleList({id}).then(res=>{
					if(res.code==200){
						this.accountByRoleList=res.data
					}
				})
			},
		}
	}
</script>
<style lang="scss" scoped>
	.train {
		padding-bottom: 120rpx;

		.addList {
			width: 276rpx;
			height: 72rpx;
			border-radius: 8rpx;
			border: 2rpx solid #007AFF;
			font-size: 28rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #007AFF;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 34rpx auto 0;

			.addListImg {
				width: 32rpx;
				height: 32rpx;
				margin-right: 20rpx;
			}
		}
	}
</style>
