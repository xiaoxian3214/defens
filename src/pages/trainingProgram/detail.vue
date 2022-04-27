<template>
	<view class="detail">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					{{type==1?'资料上传':'训练计划'}}
				</view>
			</view>
		</u-navbar> -->
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi">
				<view class="detailUlLiL">
					训练时间
				</view>
				<view class="detailUlLiR">
					{{form.startTime}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					训练地点
				</view>
				<view class="detailUlLiR">
					{{form.address}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					训练科目
				</view>
				<view class="detailUlLiR">
					{{form.trainingSubject}}
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi">
				<view class="detailUlLiL">
					科目内容
				</view>
				<view class="detailUlLiR">
					{{form.trainingSubjectContent}}
				</view>
			</view>
			<!-- <view class="detailUlLi">
				<view class="detailUlLiL">
					训练内容
				</view>
				<view class="detailUlLiR">
					{{form.e}}
				</view>
			</view> -->
			<view class="detailUlLi">
				<view class="detailUlLiL">
					训练方式
				</view>
				<view class="detailUlLiR">
					{{form.way}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					训练时间
				</view>
				<view class="detailUlLiR">
					{{form.hours}} 分钟
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="detailUl">
			<view class="detailUlLi">
				<view class="detailUlLiL">
					教员
				</view>
				<view class="detailUlLiR">
					{{form.facultyName}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					考核方式
				</view>
				<view class="detailUlLiR">
					{{form.accessType}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					参训队伍
				</view>
				<view class="detailUlLiR">
					{{form.professionalTeam}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					参训人数
				</view>
				<view class="detailUlLiR">
					{{form.numberPerson}}
				</view>
			</view>
			<view class="detailUlLi">
				<view class="detailUlLiL">
					参训队员
				</view>
				<view class="detailUlLiR flexCenter" @click="goMember">
					<view class="iulRtex">
						<text v-for="(item,index) in form.list" :key='index' class="iulRtexItem">{{item.name}}</text>
						<!-- <text v-for="(item,index) in 5" :key='index' class="iulRtexItem">王小明</text> -->

					</view>
					<view class="flexCenter deUlLiRtex iulRrig">
						查看更多
						<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
					</view>
				</view>
			</view>
		</view>
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
			<!-- 信息 -->
			<view class="deUlLiLtex" v-if='type!=1'>
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
		<view class="uploadInp" v-if="type==1&&$store.state.roleId!=7">
			<u-input v-model="content" type="textarea" placeholder='请输入……' />
			 <!-- max-count='9' -->
			<u-upload class='' :action="action" :custom-btn='true' @on-success='uplSucc'
				@on-remove='uplRemo'>
				<view class="uploBox" slot="addBtn">
					<image src="../../static/img/upload.png" mode="" class="uploImg"></image>
				</view>
			</u-upload>
		</view>
		<u-button type="primary" class='addDeter' @click='upload' v-if="type==1&&$store.state.roleId!=7">上传</u-button>
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
	import {
		arrFilter
	} from '@/utils/utils.js'
	export default {
		data() {
			return {
				id: '',
				type: '',
				form: {},
				content: '',
				action: this.$Api.IMG_URL,
				fileList: [],
				sucShow: false,
				errShow: false,
			}
		},
		onLoad: function(val) {
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,this.type==1?'资料上传':'训练计划')
			// if(val.id){
			this.type = val.type
			this.id = val.id
			this.detail()
			// }
		},
		methods: {
			// 上传
			upload() {
				// console.log(JSON.stringify(JSON.parse(this.fileList)))
				if(!this.content){
				this.$uToast.show('请输入内容','error')
				return
				}
				if(this.fileList.length<=0){
				this.$uToast.show('请上传图片','error')
				return
				}
				let params={
					id: this.id,
					content:this.content,
					urlList:JSON.stringify(this.fileList)
				}
				this.$Api.trainingUpload(params).then(res => {
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
				// // this.sucShow=true
				// this.errShow = true
				// setTimeout(() => {
				// 	// this.sucShow=false
				// }, 1000)
			},
			// 上传图片
			uplSucc(data, index, lists, name) {
				this.fileList.push(data.data.fileList[0])
				// console.log(data.data.fileList[0],data.data.fileList[0].url)
				// console.log(this.fileList,JSON.stringify(this.fileList))
				// console.log(this.typeId!=''&&this.content!=''&&this.fileList.length>0)

			},
			uplRemo(index, lists, name) {
				this.fileList.splice(index, 1)
				// console.log(this.fileList)
			},
			// 查看更多队员
			goMember() {
				uni.navigateTo({
					// url: './member?id=' + this.form.professionalTeamId
					url: './member?id=' + this.id
				})
			},
			detail() {
				this.$Api.trainingDetail({
					id: this.id
				}).then(res => {
					if (res.code == 200) {
						this.form = res.data
					}
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.detail {
		padding-bottom: 120rpx;

		.uploadInp {
			padding: 64rpx 30rpx 20rpx;

			.uploBox {
				width: 200rpx;
				height: 192rpx;
				background: #F7F7F7;
				border-radius: 6rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 10rpx;
				margin-left: 8rpx;

				.uploImg {
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
