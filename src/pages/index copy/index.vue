<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<!-- <view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
		<!-- {{userInfor}} -->
		<home v-if='userInfor.isFirstLogin=0'></home>
		<login v-if='userInfor.isFirstLogin=1' :userInfor='userInfor'></login>

	</view>
</template>

<script>
	import home from '@/pages/home/home';
	import login from '@/pages/login/login';
	import alert from "@/static/js/ddIndex.js";
	export default {
		components: {
			home,
			login,
		},
		data() {
			return {
				accessToken:'',
				authCode:'',
				userInfor:{},

			}
		},
		onShow() {
			// console.log(123)
			this.$store.commit('taskFormChang', {})
			this.$store.commit('uploadFormChang', {})
			this.$store.commit('trainFormChang', {})
			this.$store.commit('teamItemChang', {})
			this.$store.commit('memberListChang', [])
			this.$store.commit('equipmentListChang', [])
		},
		onLoad() {
			// console.log(123)
			 dd.getAuthCode({ corpId: "50196445" }).then(res=>{
				 // console.log(res)
				 this.authCode=res.code
				this.getUserInformation()
			 })
			// this.getAccessToken()

		},
		methods: {
			// getAccessToken() {
			// 	this.$Api.getAccessToken().then(res=>{
			// 		if(res.code==200){
			// 			this.accessToken=res.data.accessToken
			// 		}else{
			// 			// this.$uToast.show(res.message,'error')
			// 		}
			// 	})

			// },
			getUserInformation() {
				let parmas={
					authCode:this.authCode
				}
				this.$Api.getUserInformation(parmas).then(res=>{
					if(res.code==200){
						this.userInfor=res.data
						uni.setStorageSync('token', res.data.token);
						uni.setStorageSync('roleId', res.data.roleId);
						uni.setStorageSync('userInfor',JSON.stringify(res.data));
					}else{
						// this.$uToast.show(res.message,'error')
					}
				})

			},
			// login() {
			// 	let parmas={
			// 		account:
			// 		password
			// 		openId
			// 		accountId
			// 	}
			// 	this.$Api.login(parmas).then(res=>{
			// 		if(res.code==200){
			// 		}else{
			// 			// this.$uToast.show(res.message,'error')
			// 		}
			// 	})

			// },
		}
	}
</script>

<style lang="scss">
	// @import './index.scss';
	.content {
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
	}
</style>
