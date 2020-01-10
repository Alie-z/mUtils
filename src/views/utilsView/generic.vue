<template>
	<div class="request pageWrap">
		<div class='m_b_20' v-for="(item,index) in dataName" :key='item'>
			<van-button
					:color='index ===0 ?randomColor:null'
					type="primary"
					@click='_handlegeneric(item)'>
				{{item}}
			</van-button>
		</div>
		<!--		<van-field v-model="requestthrottle" placeholder="会每隔一段时间调用一次" label="throttle"/>-->
		<!--		<van-field v-model="requestdebounce" placeholder="指定时间以后才能执行" label="debounce"/>-->
	</div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator'
  import {GenericUtils} from 'js-utils-m'

  @Component
  export default class Request extends Vue {
    private randomColor: string = ''
    private code: string = ''
    private requestdebounce: any = ''
    private dataName: object = ['randomColor',
      'layoutFramework',
      'formatDate',
      'copyCode',
      'base64Encode',
      'base64Decode',
      'throttle',
      'debounce'
    ]
    private API: any

    private created() {
      console.log('created')
    }

    private mounted() {
      console.log('mounted')
    }

    private _handlegeneric(name: string) {
      let value
      switch (name) {
        case 'randomColor':
          this.randomColor = GenericUtils.randomColor(1)
          break
        case 'layoutFramework':
          GenericUtils.layoutFramework()
          break
        case 'formatDate':
          value = '-' + GenericUtils.formatDate(`yyyy-MM-dd hh:mm:ss`, new Date())
          break
        case 'copyCode':
          GenericUtils.copyCode(GenericUtils.formatDate(`yyyy-MM-dd hh:mm:ss`, new Date()))
          value = '-粘贴试一试'
          break
        case 'base64Encode':
          this.code = GenericUtils.base64Encode('hello world!')
          value = '-' + this.code
          break
        case 'base64Decode':
          if (this.code.length === 0) {
            this.$toast('请先 ENcode!')
            return false
          }
          value = '-' + GenericUtils.base64Decode(this.code);
          break
        case 'debounce':
          value = '- 改变浏览器窗口大小查看效果'
          // 在鼠标resize的过程中，1秒以后可以被执行，如果在1秒内触发resize，则从新计算下一个一秒再允许执行
          window.onresize = GenericUtils.debounce(() => {
            // es5获取参数
            const arg = Array.prototype.slice.call(arguments)
            // es6获取参数
            const arg1 = Array.from(arguments)
            console.log('resize-debounce', arg)
            console.log('resize-debounce', arg1)
          }, 1000)
          break
        case 'throttle':
          value = '- 改变浏览器窗口大小查看效果'
          // 在鼠标resize的过程中，1秒触发一次，如果resize了10秒相当于console.log('resize')只执行了10次
          window.onresize = GenericUtils.throttle(() => {
            // es5获取参数
            const arg = Array.prototype.slice.call(arguments)
            // es6获取参数
            const arg1 = Array.from(arguments)
            console.log('resize-throttle', arg)
            console.log('resize-throttle', arg1)
          }, 1000)
          break
      }
      this.$toast(`${name}${value ? value : ''}`)
    }


    // watch
    // @Watch('requestdebounce')
    // private async requestdebounceChange(cur: any, old: any) {
    //   GenericUtils.debounce(()=> {
    //     console.log(cur)
    //   }, 1000)()
    //   // this._renderGet()
    //   // GenericUtils.debounce(GenericUtils.debounce(async () => {
    //     await this.API._getDetail({id: this.requestdebounce})
    //   }, 1500)
    // }

  }
</script>

<style lang=scss scoped>
	.request {

	}

</style>
