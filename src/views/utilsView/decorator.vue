<template>
	<div class="request pageWrap">
		<div class='m_b_20'>
			<van-button type="primary" @click='_handleLog'>DecoratorUtils 通用的装饰器</van-button>
		</div>
	</div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator'
  import {DecoratorUtils, FeedbackUtils, LogUtils} from 'js-utils-m'

  class LogDemo {
    @DecoratorUtils.log
    public static calcStringLength(str: string, isStrict?: boolean): number {
      if (typeof str !== 'string') {
        LogUtils.logError(`str must be string but found ${typeof str}`)
        return 0
      }
      if (!isStrict) {
        return str.length
      }
      let a = 0
      for (let i = 0; i < str.length; i++) {
        const count = str.charCodeAt(i) > 255 ? 2 : 1
        a += count
      }
      return a
    }
  }

  @Component
  export default class Request extends Vue {
    private API: any;

    private created() {
      console.log('created')
    }

    private mounted() {
      console.log('mounted')
    }

    @DecoratorUtils.fnTime
    private _handleLog() {
      LogDemo.calcStringLength('hello')
      setTimeout(() => {
        console.log('setTimeout')
      }, 1000)
      FeedbackUtils.Toast('执行成功，请在控制台查看！')
    }
  }
</script>

<style lang=scss scoped>
	.request {

	}

</style>
