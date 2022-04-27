<template>
	<view class="home">
		<!-- {{userInfor}} -->
		<!-- {{parmas}} -->
		<!-- <u-navbar :border-bottom='false'>
			<view class="navTop flexCenter">
				<view class="navTitle">
					登陆
				</view>
			</view>
		</u-navbar> -->
		<view class="top">
			<image src="../../static/img/loginImg.png" mode="" class="top-img"></image>
		</view>
		<!-- {{text}} -->
		<view class="addDeter1">
			<u-form :model="form" ref="uForm">
				<u-form-item label="" prop="account">
			<image src="../../static/img/loginName.png" mode="" class="img1"></image>
					<u-input v-model="form.account" placeholder="请输入手机号" />
				</u-form-item>
				<u-form-item label="" prop="passWord">
				<image src="../../static/img/zhanghao.png" mode="" class="img2"></image>
					<u-input v-model="form.code" placeholder="请输入验证码" type='text' />
					<u-button type="primary" size="mini" @click="submit" :disabled="butTitle != '获取验证码' ? true : false">
						{{ butTitle }}
					</u-button>
				</u-form-item>
				<!-- <u-form-item label="" prop="passWord">
					<u-input v-model="form.passWord" placeholder="请输入密码"  type='password'/>
				</u-form-item> -->
			</u-form>
		</view>
		<!-- <view class="btn">
			立即登录
		</view> -->
		<view>
			<u-toast ref="uToast" />
		</view>
		<u-button class="btn back1" :hair-line="false" @click="login">立即登录</u-button>
		<!-- <u-button class="btn back" :hair-line="false" :disabled="true" v-else>立即登录</u-button> -->
	</view>
</template>

<script>
	// import dd from "gdt-jsapi";
	// import axios from 'axios'
	import dd from "@/static/js/ddIndex.js";
	import {
		GetRequestParameters
	} from "@/utils/utils.js";
	export default {
		// props:['userInfor'],
		data() {
			return {
				text: 'text测试',
				parmas: '',
				userInfor: {},
				flag: false,
				arr: "",
				err: "",
				eyeShow: true,
				eyeFillShow: false,
				butTitle: '获取验证码',
				form: {
					account: '',
					passWord: '',
					code: '',
				},
				rules: {
					account: [{
						required: true,
						message: '请输入账号',
						trigger: ['blur', 'change']
					}],
					passWord: [{
						required: true,
						message: '请输入密码',
						trigger: ['blur', 'change']
					}]
				}
			}
		},
		onReady() {},
		onLoad() {
			// this.text='开始调接口0'
			// console.log(123)50196445{ corpId: "196729" }
			// console.log(1234)
			// alert(0)
			dd.getAuthCode().then(res => {
				// this.text='开始调接口0'+JSON.stringify(res)
				// console.log(res)
				// alert(1)
				this.authCode = res.code
				this.getUserInformation()
			})
			let pagePath = this.$mp.page.route
			this.$myMD.userReporting(pagePath, 'login')
		},
		mounted() {
			// alert(10)
			// console.log()

		},
		methods: { 
			// console.log(1234);
			submit() {
				if (!this.form.account) {
					this.$uToast.show("请输入手机号", 'error')
					return;
				}
				if (this.butTitle == "获取验证码") {
					this.sendCode();
				}
			},
			// 获取验证码
			sendCode() {
					// alert(0)
					// this.$uToast.show('获取验证码', 'error')
					let params={
					phone: this.form.account
				}
				this.$Api.sendCode(params).then(res => {
					// alert(1)
					if (res.code == 200) {
					// this.$uToast.show(this.butTitle, 'error')
						let index = 60;
						this.butTitle = index + "s";
						let setTime = setInterval(() => {
							index = --index;
							if (index >= 0) {
								this.butTitle = index + "s";
							} else {
								this.butTitle = "获取验证码";
								clearTimeout(setTime);
							}
						}, 1000);
					} else {
						this.$uToast.show(res.message, 'error')
					}
				});
			},
			// iconClick() {
			// 	this.eyeFillShow = true;
			// 	this.eyeShow = false;
			// },
			// iconClick1() {
			// 	this.eyeFillShow = false;
			// 	this.eyeShow = true;
			// },
			getUserInformation() {
				// alert(this.authCode,123)
				// alert(3)
				let parmas = {
					authCode: this.authCode
				}
				// this.text='开始调接口1+'+JSON.stringify(parmas)
				this.$Api.getUserInformation(parmas).then(res => {
					// this.text='开始调接口11'+JSON.stringify(res)
					// return
					if (res.code == 200) {
						// 首次登陆
						if (res.data.isFirstLogin == 1) {
							this.userInfor = res.data
							// uni.setStorageSync('token', res.data.token);
						} else {
							uni.setStorageSync('token', res.data.token);
							uni.setStorageSync('roleId', res.data.roleIds);
						    uni.setStorageSync('roleIdList',res.data.roleIdList);
							uni.setStorageSync('userInfor', JSON.stringify(res.data));
							// uni.redirectTo({
							// 	url: '../home/home'
							// })
							this.goUrl()
						}
					} else {
						this.$uToast.show(res.message, 'error')
					}
				})

			},
			login() {
				// this.text='login点击'
				if (!this.form.account) {
					this.$uToast.show('请输入账号', 'error')
					return
				}
				if (!this.form.code) {
					this.$uToast.show('请输入验证码', 'error')
					return
				}
				let parmas = {
					phone: this.form.account,
					code: this.form.code,
					// password:this.form.passWord,
					// openId:this.userInfor.openid||'0b9fb7ac2800907d2290c89ef96e52c2',
					// accountId:this.userInfor.accountId||792786,
					openId: this.userInfor.openid,
					accountId: this.userInfor.accountId,
				}
				// this.parmas=parmas
				// console.log(parmas,this.userInfor)
				// this.text='开始调接口'+JSON.stringify(parmas)
				this.$Api.login(parmas).then(res => {
					// this.text=res
					if (res.code == 200) {
						// this.text='接口调成功'
						this.parmas = res
						uni.setStorageSync('userInfor', JSON.stringify(res.data));
						uni.setStorageSync('token', res.data.token);
						uni.setStorageSync('roleId', res.data.roleIds);
						uni.setStorageSync('roleIdList',res.data.roleIdList);
						// uni.redirectTo({
						// 	url: '../home/home'
						// })
						this.goUrl()
					} else {
						this.$uToast.show(res.message, 'error')
					}
				})

			},
			// 判断跳转路径
			goUrl() {
				let type = GetRequestParameters('type')
				let id = GetRequestParameters('id')
				let url = ''
				if (type == 1) { //训练详情
					url = '/pages/trainingProgram/detail?type=0&id=' + id
					// console.log(type,id,url)
				} else if (type == 2) { //训练编辑人员
					let teamId = GetRequestParameters('teamId')
					let planId = GetRequestParameters('planId')
					url = '/pages/train/trainMember?teamId=' + teamId + '&planId=' +
						planId + '&id=' + id
					// console.log(type, id, url)
				} else if (type == 3) { //点验详情
					url = '/pages/taskAction/detail?type=0&id=' + id
				} else if (type == 4) { //点验编辑人员
					url = '/pages/taskAction/edit?id=' + id
				} else {
					url = '../home/home'
				}
				uni.redirectTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		// position: fixed;
		margin: 0 auto;
		padding-top: 144rpx;

		.top {
			// margin-top: 144rpx;
			// margin-left: 246rpx;
			margin: 0 auto ;
			text-align: center;

			.top-img {
				width: 260rpx;
				height: 80rpx;
				// margin: 0 auto;
			}
		}
		.u-form{
			// display: flex;
		}

		.addDeter1 {
			// width: 604rpx;
			width: 564rpx;
			// padding-left: 146rpx;
			// margin-top: 240rpx;
			margin: 240rpx auto;
			// position: relative;

			.img1 {
				// position: absolute;
				// left: 88rpx;
				// top: 40rpx;
				width: 38rpx;
				height: 36rpx;
				margin-right: 20rpx;
			}

			.img2 {
				// position: absolute;
				// left: 88rpx;
				// top: 144rpx;
				width: 38rpx;
				height: 36rpx;
				margin-right: 20rpx;
			}
		}

		.btn {
			width: 580rpx;
			height: 80rpx;
			border-radius: 44rpx;
			margin-top: 132rpx;
			margin-left: 86rpx;
			color: #ffffff;
			border: none;
		}

		.back {
			background: #D8D8D8;
		}

		.back1 {
			background: #1A76FD;
		}
	}
</style>
