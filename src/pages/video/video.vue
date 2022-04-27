<template>
	<view class="video">
		<!-- {{token}} -->
		<view id="remotetracks" style="width: 640px;"></view>
	</view>
</template>

<script>
	import * as QNRTC from "pili-rtc-web";
	export default {
		data() {
			return {
				roomName: '',
				userId: '',
				token: '',
			}
		},
		onLoad: function(val) {
			let pagePath=this.$mp.page.route
			this.$myMD.userReporting(pagePath,'video')
			this.roomName = val.roomName
			this.userId = val.userId
		},
		mounted() {
			// console.log("current version is", QNRTC.version);
			this.createRoomToken()
		},
		methods: {
			createRoomToken() {
				let params = {
					roomName: this.roomName,
					userId: this.userId
				}
				this.$Api.createRoomToken(params).then(res => {
					if (res.code == 200) {
						this.token = res.data.roomToken
						this.joinRoom()
					}
				})
			},
			async joinRoom() {
				// 初始化一个房间 Session 对象, 这里使用 Track 模式
				const myRoom = new QNRTC.TrackModeSession();
				// 这里替换成刚刚生成的 RoomToken
				// alert(myRoom.joinRoomWithToken,"joinRoom success!1") 
				
				// alert(myRoom.joinRoomWithToken,"myRoom");
				await myRoom.joinRoomWithToken(this.token); 
				// alert("joinRoom success!");
				console.log("joinRoom success!");
				
			  this.autoSubscribe(myRoom);
			  await this.publish(myRoom);
			},
			// 加入房间并发布不发布的话就不需要
			async publish(myRoom) {  
				const localTracks = await QNRTC.deviceManager.getLocalTracks({
					audio: {
						enabled: false,
						source: "http://pkeamo5ex.bkt.clouddn.com/alice.mp3",
					},
					video: {
						enabled: false,
						tag: "video"
					},
					screen: {
						enabled: false,
						tag: "screen"
					},
				});

				this.localTracks = localTracks;
				await myRoom.publish(localTracks);
				// 将刚刚的 Track 列表发布到房间中
				// console.log(localTracks);
				// 在这里添加
				// 获取页面上的一个元素作为播放画面的父元素
				// const localElement = document.getElementById("localtracks");
				// // 遍历本地采集的 Track 对象
				// for (const localTrack of localTracks) {
				//   // 如果这是麦克风采集的音频 Track，我们就不播放它。
				//   if (localTrack.info.tag === "audio") continue;
				//   // 调用 Track 对象的 play 方法在这个元素下播放视频轨
				//   localTrack.play(localElement, true);
				// }
			},
			autoSubscribe(myRoom) {
				const trackInfoList = myRoom.trackInfoList;
				console.log("room current trackInfo list", trackInfoList);

				// 调用我们刚刚编写的 subscribe 方法
				// 注意这里我们没有使用 async/await，而是使用了 Promise，大家可以思考一下为什么
				this.subscribe(myRoom, trackInfoList)
					.then(() => console.log("subscribe success!"))
					.catch((e) => console.error("subscribe error", e));

				// 添加事件监听，当房间中出现新的 Track 时就会触发，参数是 trackInfo 列表（大白话：放发布之后就自动调用）
				myRoom.on("track-add", (trackInfoList) => {
					console.log("get track-add event!", trackInfoList);
					this.subscribe(myRoom, trackInfoList)
						.then(() => console.log("subscribe success!"))
						.catch((e) => console.error("subscribe error", e));
				});
				// 就是这样，就像监听 DOM 事件一样通过 on 方法监听相应的事件并给出处理函数即可
			},
			//
			async subscribe(myRoom, trackInfoList) {
				// 通过传入 trackId 调用订阅方法发起订阅，成功会返回相应的 Track 对象，也就是远端的 Track 列表了
				const remoteTracks = await myRoom.subscribe(
					trackInfoList.map((info) => info.trackId)
				);

				// 选择页面上的一个元素作为父元素，播放远端的音视频轨
				const remoteElement = document.getElementById("remotetracks");
				// 遍历返回的远端 Track，调用 play 方法完成在页面上的播放
				for (const remoteTrack of remoteTracks) {
					remoteTrack.play(remoteElement);
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.video {}
</style>
