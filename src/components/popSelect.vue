<template>
	<view class="popSelect">
		<u-popup v-model="popShow" mode='bottom' border-radius='32' height='886'>
			<view class="expTopBox">
				<view class="expTop flexCenter">
					<text class="expTopimg"></text>
					{{title}}
					<image src="@/static/img/cancel.png" mode="" class="expTopimg" @click="popShow=false"></image>
				</view>
				<picker-view  :indicator-style="indicatorStyle" :value="value"  @change="bindChange" 
					class="picker-view">
					<picker-view-column>
						<view class="item" v-for="(item,index) in popList" :key="index">{{item[lable]}}</view>
					</picker-view-column>
				</picker-view>
		<u-button type="primary" class='addDeterCop' @click='popDete'>确定</u-button>
			</view>
		</u-popup>
		
	</view>
</template>

<script>
	import {arrFilter} from '@/utils/utils.js'
	export default {
		props:{
			title:{
			  default: '请选择'
			},
			popList:{
			  default: []
			},
			lable:{
			  default: 'name'
			},
			// listAct:{
			//   default: {}
			//   // default: {id:0}
			// },
		},
		data() {
			return {
				id:'',
				popShow: false,
				value:[0],
                indicatorStyle: `height: 80rpx;lineHeight:80rpx`,
				popItem:'',
				index:0,
			}
		},
		watch:{
			// 编辑回显
			popShow(val){
				// if(val){
				// 	if(val&&this.popList.length>0&&this.listAct.id){
				// 	let cont=arrFilter(this.popList,this.listAct.id)||0
				// 	// console.log(cont)
				// 	this.index=cont.index
				// 	this.value=[cont.index]
				// 	}
				// }
			}
		},
		methods: {
            bindChange: function (e) {
				this.index=e.detail.value[0]
				this.popItem=this.popList[this.index]
				// console.log(this.value,this.popItem)
            },
			// 确定
			popDete(){
				// console.log(this.popItem)
				// console.log(a,123)
				this.value=[this.index]
				let val='';
				this.popItem?val=this.popItem:val=this.popList[0]
				this.$emit('popDete',val)
				this.popShow=false
			},
		}
	}
</script>

<style lang="scss" scoped>
.popSelect{
	
}
</style>
