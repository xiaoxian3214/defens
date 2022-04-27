<template>
	<view class="upload">
			<!-- <u-navbar :border-bottom='false'>
				<view class="navTop flexCenter">
					<view class="navTitle">
						资料上传
					</view>
				</view>
			</u-navbar> -->
			<timePop ref='timePop' @timeDet='timeDet'></timePop>
		<popSelect ref='popSelect' :popList='kmList' title='训练科目' lable='km' @popDete='popDete'></popSelect>
			<!-- <view class="detailUl">
				<view class="detailUlLi" @click="goExpan">
					<view class="detailUlLiL">
						参训队伍
					</view>
					<view class="detailUlLiR flexCenter">
					<view class="iulRtex" :class="form.teamItem.name?'iulRtexColAct':'iulRtexCol'">
						{{form.teamItem.name?form.teamItem.name:'请选择'}}
					</view>
				<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
					</view>
				</view>
				<view class="detailUlLi" @click="$refs.timePop.timeShow=true">
					<view class="detailUlLiL">
						训练时间
					</view>
					<view class="detailUlLiR flexCenter">
					<view class="iulRtex" :class="form.time?'iulRtexColAct':'iulRtexCol'">
						{{form.time?form.time:'请选择'}}
					</view>
				<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
					</view>
				</view>
				<view class="detailUlLi"  @click="$refs.popSelect.popShow=true">
					<view class="detailUlLiL">
						训练科目
					</view>
					<view class="detailUlLiR flexCenter">
					<view class="iulRtex" :class="form.km&&form.km.km?'iulRtexColAct':'iulRtexCol'">
						{{form.km&&form.km.km?form.km&&form.km.km:'请选择'}}
					</view>
				<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
					</view>
				</view>
			</view> -->
			<u-gap height="16" bg-color="#FAFAFA"></u-gap>
			<view class="uploadInp">
				<u-input v-model="content" type="textarea"  placeholder='请输入……'/>
				<!-- :custom-btn='true' :file-list="fileList"-->
				<u-upload   class='' :action="action"  max-count='9' :custom-btn='true' @on-success='uplSucc' @on-remove='uplRemo'>
					<view class="uploBox" slot="addBtn">
						<image src="../../static/img/upload.png" mode="" class="uploImg"></image>
					</view>
					<!-- <view class=""  slot="addBtn" v-if="fileList.length%3==1">
					</view> -->
				</u-upload>
			</view>
		<u-button type="primary" class='addDeter' @click='upload'>上传</u-button>
		<!-- 上传成功 -->
		<u-popup v-model="sucShow" width='600' height='256' border-radius='16' mode='center'>
			<image src="../../static/img/uploadSuc.png" mode="" class="uploadSuc"></image>
			<view class="uploadSucText">
				上传成功
			</view>
		</u-popup>
		<!-- 上传失败 -->
		<u-popup v-model="errShow"  mode='center' width='600' height='338' border-radius='16'>
			<view class="uploadErrText">
				上传失败，请重新上传？
			</view>
			<image src="../../static/img/uploadErr.png" mode="" class="uploadErr"></image>
			<view class="flexCenter">
				<view class='uploadErrBut' @click="errShow=false">取消</view>
				<view class='uploadErrBut uploadErrButCon' @click="errShow=false">确定</view>
			</view>
		</u-popup>
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
				kmList:[
						{
							id:1,
							km:'科目1'
						},
						{
							id:2,
							km:'科目2'
						},
						{
							id:3,
							km:'科目3'
						},
						{
							id:4,
							km:'科目4'
						},
				],
				form:{
					km:{}
				},
				content:'',
				action: this.$Api.IMG_URL,
				fileList: [],
				sucShow:false,
				errShow:false,
			}
		},
		onLoad() {
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'资料上传')
		},
		onShow() {
			// console.log(this.$store.state.uploadForm)
			this.form=this.$store.state.uploadForm
			this.form.teamItem=this.$store.state.teamItem
			this.$forceUpdate()
		},
		methods: {
			uplSucc(data,index, lists, name){
				this.fileList.push({url:data.data})
				// console.log(this.fileList)
				// console.log(this.typeId!=''&&this.content!=''&&this.fileList.length>0)
				
			},
			uplRemo( index, lists, name){
				this.fileList.splice(index,1)
				// console.log(this.fileList)
			},
			// 参训队伍
			goExpan(){
				this.$store.commit('uploadFormChang',this.form)
				uni.navigateTo({
					url:'../expansion/list?type='+2
				})
			},
			// 确定时间
			timeDet(dat){
				this.form.time=dat.y+'.'+dat.m+'.'+dat.d+' - '+dat.h+':'+dat.mi
				this.$forceUpdate()
			},
			// 科目确定
			popDete(val){
				this.form.km=val
				this.$forceUpdate()
				// console.log(this.form.xz,lable,0)
			},
			upload(){
				// this.sucShow=true
				this.errShow=true
				setTimeout(()=>{
				// this.sucShow=false
				},1000)
			},
		}
	}
</script>

<style lang="scss" scoped>
.upload{
		width: 100vw;
	.uploadInp{
		padding: 64rpx 30rpx 20rpx;
	.uploBox{
		width: 200rpx;
		height: 192rpx;
		background: #F7F7F7;
		border-radius: 6rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 10rpx;
		margin-left: 8rpx;
		.uploImg{
			width: 48rpx;
			height: 48rpx;
		}
	}
	}
	.uploadSuc{
		width: 96rpx;
		height: 96rpx;
		display: block;
		margin: 44rpx auto 0;
	}
	.uploadSucText{
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		margin-top: 18rpx;
		text-align: center;
	}
	.uploadErrText{
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		margin-top: 62rpx;
		text-align: center;
	}
	.uploadErr{
		width: 84rpx;
		height: 84rpx;
		display: block;
		margin: 20rpx auto 44rpx;
	}
	.uploadErrBut{
		flex: 0 0 50%;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		border-top: 2rpx solid #EEEEEE;
	}
	.uploadErrButCon{
		color: #FFFFFF;
		background-color: #007AFF;
	}
}
</style>
