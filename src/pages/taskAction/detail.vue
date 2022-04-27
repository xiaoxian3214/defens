<template>
	<view class="detail">
					<!-- 0 行动任务信息 1  行动任务结果上传 2 历史任务详情 -->
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					{{type==0?'行动任务信息':type==1?'行动任务结果上传':type==2?'历史任务详情':''}}
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
					{{form.taskName}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					集结时间
				</view>
				<view class="detailUlLiR">
					{{form.assemblyDate}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					集结地点
				</view>
				<view class="detailUlLiR">
					{{form.assemblyArea}}
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
					{{form.professionalTeamName}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					专业队队员
				</view>
				<view class="detailUlLiR">
					{{form.personStrList}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					携带装备情况
				</view>
				<view class="detailUlLiR">
					<view class="iulRtex" :class="form.equipmentList&&form.equipmentList.length>0?'iulRtexColAct':'iulRtexCol'">
						<!-- <view class="" v-if="form.equipmentList.length>0"> -->
							<text v-for="(item,index) in form.equipmentList" class="iulRtexItem">{{item.name}} x{{item.num}}</text>
						<!-- </view> -->
					</view>
				</view>
			</view>
			<!-- <view class="detailUlLi">
				<view class="detailUlLiL">
					行动结果
				</view>
				<view class="detailUlLiR">
				</view>
			</view> -->
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi">
				<view class="detailUlLiL">
					队长（视频采集人员）
				</view>
				<view class="detailUlLiR">
					{{form.gatherPersonName}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					训练人数
				</view>
				<view class="detailUlLiR">
					{{form.numberPerson}}
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<!-- <view class="detailUlLi flexCenter">
				<view class="detailUlLiL">
					行动结果
				</view>
				<view class="detailUlLiR">
					{{form.result}}
				</view>
			</view> -->
			<view class="detailUlLi flexCenter">
				<view class="detailUlLiL">
					任务状态
				</view>
				<view :class="form.taskStatus==0?'textCol':form.taskStatus==1?'textCol1':''">
					<!-- 0：未完成 1：已完成-->
					{{form.taskStatus==0?'未完成':form.taskStatus==1?'已完成':''}}
					<!-- 完成任务 -->
				</view>
			</view>
			<!-- 信息 -->
			<view class="deUlLiLtex" v-if='type==0||type==2'>
				<view class="deUlLiLcon">
					{{form.result}}
					<!-- 哈比师傅有噶师傅的有害u有的话我i蒜蓉会发嗲u凯撒春节后丢服啊的时间福利啊 -->
				</view>
				<!-- {{form.urlList}} -->
				<view class="deUlLiLimgBox">
					<image :src='item.url' mode="" class="deUlLiLimg" v-for="(item,index) in form.urlList"
						:key='index'></image>
					<view class="deUlLiLimg" v-if="5%3==2">
					</view>
				</view>
			</view>
			<!-- 上传 -->
			<view class="uploadInp" v-if='type==1'>
				<u-input v-model="content" type="textarea"  placeholder='请输入……'/>
				<!-- :custom-btn='true' -->
				<u-upload class='' :action="action" :custom-btn='true' @on-success='uplSucc'
					@on-remove='uplRemo'>
					<view class="uploBox" slot="addBtn">
						<image src="../../static/img/upload.png" mode="" class="uploImg"></image>
					</view>
				</u-upload>
			</view>
		</view>
		<u-button type="primary" class='addDeter' @click='upload' v-if='type==1'>上传</u-button>
		<!-- 上传成功 -->
		<u-popup v-model="sucShow" width='600' height='256' border-radius='16' mode='center'>
			<image src="../../static/img/uploadSuc.png" mode="" class="uploadSuc"></image>
			<view class="uploadSucText">
				上传成功
			</view>
		</u-popup>
		<!-- 上传失败 -->
		<u-popup v-model="errShow" mode='center' width='600' height='338' border-radius='16'>
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
	import {arrFilter} from '@/utils/utils.js'
	export default {
		data() {
			return {
				type:'',
				id:'',
				form: {},
				action: 'http://www.example.com/upload',
				fileList: [],
				teamList:[],
				content: '',
				action: this.$Api.IMG_URL,
				sucShow: false,
				errShow: false,
				equiList:[],
				
			}
		},
		onLoad:function(val){
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'专业队')
			this.type=val.type
			this.id=val.id
			this.detail()
			// console.log(this.type)
		},
		methods: {
			goMember() {
				uni.navigateTo({
					url: './member'
				})
			},
			// 上传
			upload(){
				if(!this.content){
				this.$uToast.show('请输入内容','error')
				return
				}
				if(this.fileList.length<=0){
				this.$uToast.show('请上传图片','error')
				return
				}
				let params={
					id:this.id,
					content:this.content,
					urlList:JSON.stringify(this.fileList),
				}
				this.$Api.kpullInspectionResultUpload(params).then(res=>{
						if (res.code == 200) {
							this.sucShow=true
							setTimeout(() => {
								this.sucShow=false
								uni.navigateBack()
							}, 1000)
						}else{
							// this.errShow = true
							this.$uToast.show(res.message,'error')
						}
				})
				// uni.navigateBack()
			},
			// 上传图片
			uplSucc(data, index, lists, name) {
				this.fileList.push(data.data.fileList[0])

			},
			uplRemo(index, lists, name) {
				this.fileList.splice(index, 1)
			},
			detail(){
				// 装备
				this.$Api.equipmentList().then(res=>{
					if(res.code==200){
						this.equiList=res.data
						// this.form.equipmentList.name=arrFilter(this.eduList,this.form.equipmentList.id).name
					}
				})
				// 专业队
				this.$Api.teamAllList().then(res=>{
					if(res.code==200){
						this.teamList=res.data
					}
				})
				this.$Api.kpullInspectionDetail({id:this.id}).then(res=>{
					if(res.code==200){
						this.form=res.data
						// this.form.professionalTeamName=arrFilter(this.teamList,this.form.professionalTeamId).name
						this.form.equipmentList.name=arrFilter(this.equiList,this.form.equipmentList.id).name
					}
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.detail {
		padding-bottom: 120rpx;
		.textCol {
			color: #FF6E6E;
		}
		
		.textCol1 {
			color: #007AFF;
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
