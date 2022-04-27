<template>
	<view class="add">
		<!-- <u-navbar :border-bottom='false'> -->
			<view class="navTop flexCenter">
				<view class="navTitle">
					<!-- 组织架构信息 -->
				</view>
				<view class="navRig" @click='determine'>
					完成
				</view>
			</view>
		<!-- </u-navbar> -->
		<popSelect ref='popSelect' :popList='accountByRoleList' title='联络员'  @popDete='popDete'></popSelect>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<!-- {{params}} -->
		<view class="detailUl">
			<view class="detailUlLi" >
				<view class="detailUlLiL">
				<text class="redTs">*</text>
					组织名称({{level==1?'二级':level==2?'三级':level==3?'四级':'一级'}})
				</view>
				<view class="detailUlLiR">
					<u-input v-model="form.name" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
			<!-- <view class="detailUlLi">
				<view class="detailUlLiL">
					组织名称(二级)
				</view>
				<view class="detailUlLiR">
					<u-input v-model="form.name" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view> -->
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi"  @click="$refs.popSelect.popShow=true">
				<view class="detailUlLiL">
				<!-- <text class="redTs">*</text> -->
					联络员:
				</view>
				<view class="detailUlLiR flexCenter">
					<!-- <u-input v-model="form.liaison" type="text" placeholder='请输入' class='iulrInput' /> -->
					<view class="iulRtex" :class="form.liaisonName?'iulRtexColAct':'iulRtexCol'">
						{{form.liaisonName?form.liaisonName:'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
				<!-- <text class="redTs">*</text> -->
					联系电话
				</view>
				<view class="detailUlLiR">
					<u-input v-model="form.phone" placeholder='请输入' class='iulrInput' type='number' maxLength='11'/>
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>

		
		<!-- <u-button type="primary" class='addDeter' @click='determine'>确定</u-button> -->
		
		
	</view>
</template>

<script>
	import popSelect from '@/components/popSelect';
	export default {
		components:{
			popSelect,
		},
		data() {
			return {
				accountByRoleList:[],
				params:{},
				id:'',
				level:'',
				type:'',
					form: {
						// name: '王小明',
						// sex: '男',
						// age: '23',
						// a: '本科',
						// b: '团员',
						// c: '1822***1029',
						// d: '837283****72849282',
						// e: '**省**市（县）**区',
						// f: '**省**市（县）**区',
						// g: '人防专业',
						// h: '人防',
						// i: '2020-01-22',
						// j: '主管单位',
						// k: '鹿城区人防办指通处长',
						// l: '00000011',
						// m: '扩编人员',
					}
			}
		},
		onLoad:function(val){
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'组织架构信息')
			this.selectList()
			if(val.type==1){
			this.id=val.id
			this.type=val.type
			this.level=val.level
			}else{
			this.id=val.id
			this.detail()
			}
		},
		methods: {
			determine(){
				let params={
					...this.form
				}
				params.liaison=params.liaison||''
				params.phone=params.phone||''
				// console.log(params)
				// this.params=params
				if(this.id &&this.type!=1){
					// if(this.type==1){//当前级新增
					// params.parentId=this.id
					// params.level=Number(this.level)+1
					// }else{
					params.id=this.id
					// }
				// console.log(params)
				// 	return
					this.edit(params)
				}else if(this.id&&this.type==1){//当前级新增
					params.parentId=this.id
					params.level=Number(this.level)+1
					this.add(params)
					
				}else{
					params.level=1
					this.add(params)
				}
			},
			add(params){
				this.$Api.organizAdd(params).then(res=>{
					if(res.code==200){
					this.$uToast.show('新增成功','success')
					uni.navigateBack()
					}else{
						this.$uToast.show(res.message,'error')
					}
				})
			},
			edit(params){
				this.$Api.organizUpdata(params).then(res=>{
					if(res.code==200){
						this.$uToast.show('编辑成功','success')
						uni.navigateBack()
					}else{
						this.$uToast.show(res.message,'error')
					}
				})
			},
			// 联络员确定
			popDete(val){
				this.form.liaison=val.id
				this.form.liaisonName=val.name
				this.$forceUpdate()
				// console.log(this.form.liaisonName,0)
			},
			detail(){
					// console.log('确认删除')
					let params = {
						id: this.id
					}
					// console.log(params)
					this.$Api.organizDetail(params).then(res => {
						if (res.code == 200) {
							this.form=res.data
						} 
					})
			},
			// 字典
			selectList(){
				// 所有角色
				this.$Api.getRoleList().then(res=>{
					if(res.code==200){
						res.data.map(item=>{
							if(item.name=='联络员'){
								this.getAccountByRoleList(item.id)
							}
						})
					}
				})
			},
			getAccountByRoleList(id){
				// 联络员
				this.$Api.getAccountByRoleList({id}).then(res=>{
					if(res.code==200){
						this.accountByRoleList=res.data
						if(this.form.liaison){
						this.accountByRoleList.map(item=>{
							if(item.id==this.form.liaison){
								this.form.liaisonName=item.name
							}
						})
						}
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
