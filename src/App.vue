<!-- <script src="https://g.alicdn.com/gdt/jsapi/1.9.18/index.js"></script> -->
<script>
	import alert from "@/static/js/ddIndex.js";
	import {wpkReporter} from "@/static/js/wpkReporter.js";
	export default {
		onLaunch: function() {
			 // dd.hideTitleBar()
				try{
				const config={
				bid:'WZ_RFB_zzdpro',
				signkey:'1234567890abcdef',
				gateway:'https://wpk-gate.zjzwfw.gov.cn'
				};
				const wpk=new wpkReporter(config);
				wpk.installAll();
				window._wpk=wpk;
				}catch(err){
				console.error('WpkReporterinitfail',err);
				}
			console.log('App Launch')
		},
		onShow: function() {
			// alert('app')
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	@import "./static/scss/index.scss";
</style>
