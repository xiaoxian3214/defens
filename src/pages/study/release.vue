<template>
	<view class="release">
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					发布内容
				</view>
			</view>
		</u-navbar> -->
		<popSelect ref='popSelect' :popList='typeList' title='类型' @popDete='popDete' :listAct='form.type'></popSelect>

		<view class="detailUl">
			<view class="detailUlLi">
				<view class="detailUlLiL">
					<text class="redTs">*</text>
					标题
				</view>
				<view class="detailUlLiR flexCenter">
					<u-input v-model="form.title" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
			<view class="detailUlLi" @click="$refs.popSelect.popShow=true">
				<view class="detailUlLiL">
					<text class="redTs">*</text>
					类型
				</view>
				<view class="detailUlLiR flexCenter">
					<!-- <u-input v-model="form.c" type="text" placeholder='请输入' class='iulrInput' /> -->
					<view class="iulRtex" :class="form.typeId?'iulRtexColAct':'iulRtexCol'">
						{{form.typeId?typeItem.name:'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
			</view>
		</view>

		<!-- <view class="infUl">
			<view class="infUlLi">
				<view class="iulL">
					标题
				</view>
				<view class="iulR">
					<u-input v-model="form.a" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
			<view class="infUlLi" >
				<view class="iulL flexCenter">
					<view class="iulRtex" :class="form.professionalTeamName?'iulRtexColAct':'iulRtexCol'">
						{{form.professionalTeamName?form.professionalTeamName:'请选择'}}
					</view>
					<image src="../../static/img/right.png" mode="" class="iulRrig"></image>
				</view>
				<view class="iulR">
					<u-input v-model="form.a" type="text" placeholder='请输入' class='iulrInput' />
				</view>
			</view>
		</view> -->
		<u-gap height="16" bg-color="#FAFAFA"></u-gap>
		<view class="uploadInp">
			<view class="uploadLab">
				<text class="redTs">*</text>
				内容简介
			</view>
			<view class="textInp">
				<u-input v-model="form.introduction" type="textarea" placeholder='请输入……' class='' />
			</view>
			<!-- :custom-btn='true' -->
			<!-- <u-upload :action="action" max-count='1' :custom-btn='true'>
				<view class="uploBox" slot="addBtn">
					<image src="../../static/img/upload.png" mode="" class="uploImg"></image>
				</view>
			</u-upload> -->
			<view class="uploadLab">
				<text class="redTs">*</text>
				封面图片
			</view>
			<view class="textInp">
				<u-upload class='' :action="action" max-count='1' :custom-btn='true' @on-success='uplSucc'
					@on-remove='uplRemo'>
					<view class="uploBox" slot="addBtn">
						<image src="../../static/img/upload.png" mode="" class="uploImg"></image>
					</view>
				</u-upload>

			</view>
			<view class="uploadLab">
				<text class="redTs">*</text>
				内容
			</view>
			<!-- <view class="" id="editor">
				
			</view> -->
			<editor id="editor" class="ql-container" placeholder="请输入..." @ready="onEditorReady"
				@input="getEditorContent" :show-img-resize="true" :show-img-size="true" :show-img-toolbar="true">
			</editor>
		</view>
		<u-button type="primary" class='addDeter' @click='release'>发布</u-button>
	</view>
</template>

<script>
	import popSelect from '@/components/popSelect';
	export default {
		components: {
			popSelect,
		},
		data() {
			return {
				form: {},
				action: this.$Api.IMG_URL,
				fileList: [],
				typeList: [],
				typeItem: {},
				editorCtx: '',
				content: '',
				contentText: '',
			}
		},
		onLoad() {
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'发布内容')
			this.selectList()
			// this.onEditorReady()
			// console.log(this.typeList)
		},
		methods: {
			// 发布
			release() {
				let params={
					...this.form,
					url:this.fileList.length>0?this.fileList[0].url:'',
				}
				// console.log(params)
				if(!params.typeId){
					this.$uToast.show('请选择类型','error')
					return
				}else if(!params.title){
					this.$uToast.show('请输入标题','error')
					return
				}else if(!params.content||params.content=='<p><br></p>'){
					this.$uToast.show('请输入内容','error')
					return
				}else if(!params.url){
					this.$uToast.show('请选择封面图片','error')
					return
				}else if(!params.introduction){
					this.$uToast.show('请输入内容简介','error')
					return
				}

				this.$Api.knowledgeAdd(params).then(res => {
					if(res.code==200){
					this.$uToast.show('新增成功','success')
					uni.navigateBack()
					}else{
						this.$uToast.show(res.message,'error')
					}
				})

				// uni.navigateBack()
			},
			// 富文本框
			// 初始化
			onEditorReady() {
				uni.createSelectorQuery().select('#editor').context((res) => {
					// this.editorCtx = res.context
					// let EContent = {
					// 	html: contentVal_1
					// }
					// this.editorCtx.setContents(EContent);
					// console.log(res.context)
				}).exec()
			},
			getEditorContent(e) {
				this.form.content = e.detail.html;
				// this.contentText = e.detail.text;
				// console.log(this.content,this.contentText,2131)
			},
			// 类型确定
			popDete(val) {
				// console.log(val)
				this.typeItem = val
				this.form.typeId = val.id
				this.$forceUpdate()
			},
			// 上传图片
			uplSucc(data, index, lists, name) {
				// this.fileList.push({
				// 	url: data.data.fileList[0]
				// })
				this.fileList.push(data.data.fileList[0])
				console.log(this.fileList)

			},
			uplRemo(index, lists, name) {
				this.fileList.splice(index, 1)
				console.log(this.fileList)
			},
			// 字典
			selectList() {
				this.$Api.ZD_JSLX().then(res => {
					if (res.code == 200) {
						this.typeList = res.data
					}
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.release {
		.redTs {
			color: #FC011A;
		}

		.uploadInp {
			padding: 44rpx 30rpx 20rpx;

			.uploadLab {
				// color: #333333;
				color: #999999;
				margin-bottom: 24rpx;
			}

			.textInp {
				padding-left: 40rpx;
				margin-bottom: 40rpx;
			}

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
	}
</style>
