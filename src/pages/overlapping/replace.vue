<template>
	<view class="add">
		<!-- <u-navbar :border-bottom='false'> -->
			<view class="navTop flexCenter">
				<view class="navTitle">
					<!-- 替换队员信息 -->
				</view>
				<view class="navRig" @click='determine'>
					完成
				</view>
			</view>
		<!-- </u-navbar> -->
		<timePop ref='timePop' @timeDet='timeDet' :isTime='false' ></timePop>
		<popSelect ref='popSelect' :popList='polList' title='政治面貌'  @popDete='popDete' :listAct='form.politicalLandscape'></popSelect>
		<popSelect ref='popSelect1' :popList='eduList' title='文化程度'  @popDete='popDeteEdu' :listAct='form.education'></popSelect>
		<popSelect ref='popSelect2' :popList='sexList' title='性别'  @popDete='popDeteSex' :listAct='form.sex'></popSelect>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi">
				<view class="detailUlLiL">
				<text class="redTs">*</text>
					姓名
				</view>
				<view class="detailUlLiR">
					<!-- {{form.name}} -->
					<u-input v-model="form.name" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
			<view class="detailUlLi" @click="$refs.popSelect2.popShow=true">
				<view class="detailUlLiL">
				<text class="redTs">*</text>
					性别
				</view>
				<view class="detailUlLiR flexCenter">
					<view class="iulRtex" :class="form.sex&&form.sex.name?'iulRtexColAct':'iulRtexCol'">
						{{form.sex&&form.sex.name?form.sex&&form.sex.name:'请选择'}}
					</view>
				<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
					<!-- {{form.sex}} -->
					<!-- <u-input v-model="form.sex" type="text" placeholder='请输入' class='iulrInput' /> -->
				</view>
			</view>
			<view class="detailUlLi" >
				<view class="detailUlLiL">
					年龄
				</view>
				<view class="detailUlLiR">
					<!-- {{form.age}} -->
					<u-input v-model="form.age" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi"  @click="$refs.popSelect1.popShow=true">
				<view class="detailUlLiL">
					文化程度
				</view>
				<view class="detailUlLiR flexCenter">
					<view class="iulRtex" :class="form.education&&form.education.name?'iulRtexColAct':'iulRtexCol'">
						{{form.education&&form.education.name?form.education&&form.education.name:'请选择'}}
					</view>
				<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
					<!-- {{form.a}} -->
					<!-- <u-input v-model="form.education" type="text" placeholder='请输入' class='iulrInput' /> -->
				</view>
			</view>
			<view class="detailUlLi"  @click="$refs.popSelect.popShow=true">
				<view class="detailUlLiL">
					政治面貌
				</view>
				<view class="detailUlLiR flexCenter">
					<!-- {{form.b}} -->
					<!-- <u-input v-model="form.name" type="text" placeholder='请输入' class='iulrInput' /> -->
					<view class="iulRtex" :class="form.politicalLandscape&&form.politicalLandscape.name?'iulRtexColAct':'iulRtexCol'">
						{{form.politicalLandscape&&form.politicalLandscape.name?form.politicalLandscape&&form.politicalLandscape.name:'请选择'}}
					</view>
				<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					联系电话
				</view>
				<view class="detailUlLiR">
					<!-- {{form.c}} -->
					<u-input v-model="form.phone" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
				<text class="redTs">*</text>
					身份证号
				</view>
				<view class="detailUlLiR">
					<!-- {{form.d}} -->
					<u-input v-model="form.idCard" type="text" placeholder='请输入' class='iulrInput' maxlength='18'/>
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					户籍
				</view>
				<view class="detailUlLiR">
					<!-- {{form.e}} -->
					<u-input v-model="form.householdRegistration" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					现居住地址
				</view>
				<view class="detailUlLiR">
					<!-- {{form.f}} -->
					<u-input v-model="form.address" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi">
				<view class="detailUlLiL">
					专业
				</view>
				<view class="detailUlLiR flexCenter">
					<!-- {{form.g}} -->
					<u-input v-model="form.professional" type="text" placeholder='请输入' class='iulrInput' />
					<!-- <view class="iulRtex" :class="form.name?'iulRtexColAct':'iulRtexCol'">
						{{form.name?form.name:'请选择'}}
					</view>
				<image src="../../static/img/right.png" mode="" class="iulRrig"></image> -->
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					职务
				</view>
				<view class="detailUlLiR">
					<!-- {{form.h}} -->
					<u-input v-model="form.position" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
			<view class="detailUlLi" @click="$refs.timePop.timeShow=true">
				<view class="detailUlLiL">
					入队时间
				</view>
				<!-- <view class="detailUlLiR">
					<u-input v-model="form.name" type="text" placeholder='请输入' class='iulrInput' />
				</view> -->
					<view class="detailUlLiR flexCenter">
					<view class="iulRtex" :class="form.inTeamTime?'iulRtexColAct':'iulRtexCol'">
						{{form.inTeamTime?form.inTeamTime:'请选择'}}
					</view>
						<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
					</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					主管单位
				</view>
				<view class="detailUlLiR">
					<!-- {{form.j}} -->
					<u-input v-model="form.unit" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
			<view class="detailUlLi" @click="goExpan">
				<view class="detailUlLiL">
				<text class="redTs">*</text>
					所属专业队
				</view>
				<view class="detailUlLiR flexCenter">
					<!-- {{form.k}} -->
					<!-- <u-input v-model="form.name" type="text" placeholder='请输入' class='iulrInput' /> -->
					<view class="iulRtex" :class="form.team?'iulRtexColAct':'iulRtexCol'">
						{{form.team?form.team:'请选择'}}
					</view>
				<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
				<text class="redTs">*</text>
					专业队编号
				</view>
				<view class="detailUlLiR">
					<view :class="form.teamNumber?'iulRtexColAct':'iulRtexCol'" >
					{{form.teamNumber?form.teamNumber:'请选择'}}
					</view>
					<!-- <u-input v-model="form.name" type="text" placeholder='请输入' class='iulrInput' /> -->
				</view>
			</view>
			<!-- <view class="detailUlLi">
				<view class="detailUlLiL">
					队员来源
				</view>
				<view class="detailUlLiR">
					<u-input v-model="form.name" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view> -->
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>

		
		<!-- <u-button type="primary" class='addDeter' @click='determine'>确定</u-button> -->
		
		
	</view>
</template>

<script>
	import timePop from '@/components/timePop';
	import popSelect from '@/components/popSelect';
	import {arrFilter} from '@/utils/utils.js'
	export default {
		components:{
			timePop,
			popSelect,
		},
		data() {
			return {
					id:'',
					form: {},
					sexList:[],
					polList:[],
					eduList:[],
					}
		},
		onShow() {
			this.detail=this.$store.state.perForm
			// console.log(this.$store.state.teamItem,123)
			if(this.$store.state.teamItem.name){
			this.form.professionalTeamId=this.$store.state.teamItem.id
			this.form.team=this.$store.state.teamItem.name
			this.form.teamNumber=this.$store.state.teamItem.number
			}
			this.$forceUpdate()
		},
		onLoad:function(val){
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'替换队员信息')
			// if(val.id){
				this.id=val.id
				this.selectList()
				// this.detail()
			// }
		},
		methods: {
			// determine(){
				
			// 	uni.navigateBack()
			// },
			determine(){
				if(!this.form.idCard||(!(this.form.idCard.length==15||this.form.idCard.length==18))){
					this.$uToast.show('请输入正确的身份证号','error')
					return
				}
				let params={
					...this.form
				}
				if(this.form.sex&&this.form.sex.id){
				// 	console.log(this.form.sex.id)
				params.sex=this.form.sex.id
				}
				if(this.form.education&&this.form.education.id){
				params.education=this.form.education.id
				}
				if(this.form.politicalLandscape&&this.form.politicalLandscape.id){
				params.politicalLandscape=this.form.politicalLandscape.id
				}
				// console.log(params)
				// if(this.id){
					// 替换
					params.oldUserId=this.id
					this.edit(params)
				// }else{
				// 	this.add(params)
				// }
			},
			add(params){
				this.$Api.playersAdd(params).then(res=>{
					if(res.code==200){
					this.$uToast.show('新增成功','success')
					uni.navigateBack()
					}else{
						this.$uToast.show(res.message,'error')
					}
				})
			},
			edit(params){
				this.$Api.crossAuditRepl(params).then(res=>{
					if(res.code==200){
						this.$uToast.show('替换成功','success')
						uni.navigateBack({delta: 2})
					}else{
						this.$uToast.show(res.message,'error')
					}
				})
			},
			// 政治面貌确定
			popDete(val){
				this.form.politicalLandscape=val
				this.$forceUpdate()
				// console.log(this.form.xz,lable,0)
			},
			// 文化程度
			popDeteEdu(val){
				this.form.education=val
				this.$forceUpdate()
				// console.log(this.form.xz,lable,0)
			},
			// 性别
			popDeteSex(val){
				this.form.sex=val
				this.$forceUpdate()
				// console.log(this.form.xz,lable,0)
			},
			// 所属专业队
			goExpan(){
				this.$store.commit('perFormChang',this.detail)
				uni.navigateTo({
					url:'../expansion/list?type='+2
				})
			},
			// 确定时间
			timeDet(dat){
				// this.form.time=dat.y+'.'+dat.m+'.'+dat.d+' - '+dat.h+':'+dat.mi
				this.form.inTeamTime=dat.y+'.'+dat.m+'.'+dat.d
				this.$forceUpdate()
			},
			
			detail(){
				this.$Api.playersDetail({id:this.id}).then(res=>{
					if(res.code==200){
						this.form=res.data
						this.form.sex=arrFilter(this.sexList,this.form.sex)
						this.form.education=arrFilter(this.eduList,this.form.education)
						this.form.politicalLandscape=arrFilter(this.polList,this.form.politicalLandscape)
						// this.$forceUpdate()
						// console.log(this.form.area,this.form.abilityType)
					}
				})
			},
			// 字典
			selectList(){
				// 性别
				this.$Api.ZD_ZZZH_XB().then(res=>{
					if(res.code==200){
						this.sexList=res.data
					}
				})
				// 文化程度 
				this.$Api.ZD_XLDJ().then(res=>{
					if(res.code==200){
						this.eduList=res.data
					}
				})
				// 政治面貌
				this.$Api.ZD_ZZZH_ZZMM().then(res=>{
					if(res.code==200){
						this.polList=res.data
					}
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
.add{
	padding-bottom: 80rpx;
}
</style>
