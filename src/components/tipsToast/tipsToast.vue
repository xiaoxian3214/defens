<!--
 * @Author: zxw
 * @Date: 2021-07-15 14:23:46
 * @LastEditTime: 2021-08-02 10:36:18
 * @LastEditors: Please set LastEditors
 * @Description: 提示框toast
 * @FilePath: \rescuestation\src\components\tipToast.vue
-->
<template>
  <div class="box">
		<u-toast ref="uToast" />
  </div>
</template>
<script>
export default {
  name: "tipsToast",
  data() {
    return {
      message: "",
      type: "success",
    };
  },
  methods: {
    show(message,type) {
		this.$refs.uToast.show({
			title: message,
			type: type,
		})
    },
  },
};
</script>
<style lang="scss" scoped>
</style>