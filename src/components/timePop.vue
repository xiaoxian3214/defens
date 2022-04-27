<template>
	<view class="timePop">
		<u-popup v-model="timeShow" mode='bottom' border-radius='32' height='692'>
			<view class="flexCenter tabBox">
				<view class="uTabs">
					<u-tabs :list="isTime?list:list1" :is-scroll="false" :current="current" @change="change" class='uTabs'></u-tabs>
				</view>
				<u-button type="primary" class='tabBut' @click='timeDet'>确定</u-button>
			</view>
			<view class="dataBox">
				<!-- 日期 -->
				<picker-view v-if="current==0" :indicator-style="indicatorStyle" :value="value" @change="bindChange"
					class="picker-view">
					<picker-view-column>
						<view class="item" v-for="(item,index) in years" :key="index">{{item}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in months" :key="index">{{item}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in days" :key="index">{{item}}</view>
					</picker-view-column>
				</picker-view>
				<!-- 时间 -->
				<picker-view v-if="current==1" :indicator-style="indicatorStyle" :value="valueTo" @change="bindChangeTo"
					class="picker-view">
					<picker-view-column>
						<view class="item" v-for="(item,index) in hours" :key="index">{{item}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in minutes" :key="index">{{item}}</view>
					</picker-view-column>
				</picker-view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		props:{
			isTime:{
			  type: Boolean,
			  default: true
			},
			isOld:{
				type:Boolean,
				default: false
			}
		},
		data() {
			const date = new Date()
			const years = []
			const year = date.getFullYear()
			const months = []
			const month = date.getMonth() + 1
			const days = []
			const day = date.getDate()
			const hours = []
			const hour = date.getHours()
			const minutes = []
			const minute = date.getMinutes()
			let minYear=date.getFullYear()
			let maxYear=date.getFullYear()
			if(this.isOld){
				minYear=minYear-4
			}else{
				maxYear=maxYear+4
			}
			for (let i = minYear; i <= maxYear; i++) {
				years.push(i)
			}
			for (let i = 1; i <= 12; i++) {
				let val = i > 9 ? i : '0' + i
				months.push(val)
			}
			for (let i = 1; i <= 31; i++) {
				days.push(i)
			}
			for (let i = 0; i <= 23; i++) {
				let val = i > 9 ? i : '0' + i
				hours.push(val)
			}
			for (let i = 0; i <= 59; i++) {
				let val = i > 9 ? i : '0' + i
				minutes.push(val)
			}
			return {
				timeShow: false,
				list: [{
					name: '日期'
				}, {
					name: '时间'
				}, ],
				list1: [{
					name: '日期'
				},  ],
				current: 0,
				title: 'picker-view',
				years,
				year,
				months,
				month: month < 10 ? '0' + month : month,
				// days,
				day: day < 10 ? '0' + day : day,
				hour: hour < 10 ? '0' + hour : hour,
				hours,
				minute: minute < 10 ? '0' + minute : minute,
				minutes,
				// value: [year, month - 1, day - 1],
				value: [year, month-1, day-1],
				valueTo: [hour, minute],
				indicatorStyle: `height: 80rpx;lineHeight:80rpx`
			}
		},
		computed: {
			days: function() {
				let length;
				let arr = [];
				let month;
				let year
				month = this.month
				year = this.year
				if (month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || this.month ==
					'10' || month == '12') {
					length = 31
				} else if (month == 2) {
					if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
						length = 29
					} else {
						length = 28
					}
				} else {
					length = 30
				}
				for (let i = 1; i <= length; i++) {
					if (i < 10) {
						i = '0' + i.toString()
						// i = '0' + i.string()
					}
					arr.push(i)
				}
				return arr
			}
		},
		mounted() {
			if(this.isOld){
				this.value[0]=4
			}else{
				this.value[0]=0
			}
		},
		methods: {
			change(index) {
				this.current = index
			},
			bindChange: function(e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
			},
			bindChangeTo: function(e) {
				const val = e.detail.value
				// console.log(val)
				this.hour = this.hours[val[0]]
				this.minute = this.minutes[val[1]]
				// this.day = this.days[val[2]]
			},
			timeDet() {
				// console.log(this.year,this.month,this.day,this.hour,this.minute)
				// var data=this.year+'.'+this.month+'.'+this.day+' - '+this.hour+':'+this.minute
				let data = {
					y: this.year,
					m: this.month,
					d: this.day,
					h: this.hour,
					mi: this.minute
				}
				let isTime=data.y+'-'+data.m+'-'+data.d+'T'+data.h+':'+data.mi
				isTime=new Date(isTime)
				let time=new Date()
				if(this.isOld){
					// console.log(isTime,time,isTime>time)
					if(isTime>time){
						this.$uToast.show('选择的时间不能大于当前时间','error')
						return
					}
				}else{
				// 	isTime=data.y+'-'+data.m+'-'+data.d+''+data.h+":"+data.mi
				// isTime=new Date(isTime)
					// console.log(isTime,time,isTime>time)
					if(isTime<time){
						this.$uToast.show('选择的时间必须大于当前时间','error')
						return
					}
				}
				this.$emit('timeDet', data)
				this.timeShow = false
				// console.log(data)

			},
		}
	}
</script>

<style lang="scss" scoped>
	.timePop {
		.tabBox {
			padding: 26rpx 32rpx 0;
			border-bottom: 2rpx solid #EEEEEE;

			.uTabs {
				width: 200rpx;
			}

			.tabBut {
				width: 168rpx;
				height: 64rpx;
				background-color: #007AFF;
				margin: 0;
			}
		}

		.dataBox {
			padding: 14rpx 32rpx;
		}

		.picker-view {
			// width: 750rpx;
			height: 544rpx;
			margin-bottom: 20rpx;
		}

		.item {
			height: 80rpx;
			align-items: center;
			justify-content: center;
			text-align: center;
			line-height: 80rpx;
		}
	}
</style>
