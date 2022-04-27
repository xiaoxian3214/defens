<template>
	<view>
		<task :idCop='id' ref='task'></task>
	</view>
</template>

<script>
	import task from '../task/task.vue'
	export default {
		components:{
			task
		},
		data() {
			return {
				id:''
			}
		},
		onLoad:function(option){
			this.id=option.id
			
		},
		onShow() {
			if(this.$refs.task){
			this.$refs.task.showBack()
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
