<template>
	<div class="request pageWrap">
		<div class='m_b_20'>
			<van-button type="primary" >现在是竖屏！</van-button>
		</div>
	</div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator'
  import {DeviceUtils} from 'js-utils-m'

  @Component
  export default class Request extends Vue {

    private created() {
      console.log('created')
    }

    private mounted() {
      console.log('mounted')
      DeviceUtils.checkLayoutOrientation('请旋转屏幕,或竖直使用手机') // 横屏时候提示 请竖直使用手机
    }
  }
</script>

<style lang=scss scoped>
	.request {

	}

</style>
