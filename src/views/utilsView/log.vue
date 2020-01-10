<template>
	<div class="request pageWrap">
		<div class='m_b_20' v-for="(item) in dataName" :key='item'>
			<van-button type="primary" @click='_handleLog(item)'>{{item}}</van-button>
		</div>
	</div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator'
  import {LogUtils} from 'js-utils-m'

  @Component
  export default class Request extends Vue {
    private dataName: object = ['console',
      'logDefault',
      'logInfo',
      'logSuccess',
      'logError',
      'logWarning',
      'logBeauty',
      'group',
      'groupCollapsed',
      'groupEnd',
      'table'
    ]

    private created() {
      console.log('created')
    }

    private mounted() {
      console.log('mounted')
    }

    private _handleLog(name: string) {
      // let value
      switch (name) {
        case 'console':
          LogUtils.console(window.location.host, 'window.location.host:', 'red')
          break
        case 'logDefault':
          LogUtils.logDefault(new Date().toLocaleString(), 'logDefault')
          break
        case 'logInfo':
          LogUtils.logInfo(new Date().toLocaleString(), 'logInfo')
          break
        case 'logSuccess':
          LogUtils.logSuccess(new Date().toLocaleString(), 'logSuccess')
          break
        case 'logError':
          LogUtils.logError(new Date().toLocaleString(), 'logError')
          break
        case 'logWarning':
          LogUtils.logWarning(new Date().toLocaleString(), 'logWarning')
          break
        case 'logBeauty':
          LogUtils.logBeauty(new Date().toLocaleString(), {
            isMax: false,
            colors: ['#fa709a', '#fee140', '#ad2']
          })
          break
        case 'group':
          LogUtils.group('date group', '#fa709a')
          LogUtils.logDefault(new Date().toLocaleString(), 'logDefault')
          LogUtils.logInfo(new Date().toLocaleDateString(), 'logInfo')
          LogUtils.logSuccess(new Date().toLocaleTimeString(), 'logSuccess')
          break
        case 'groupCollapsed':
          LogUtils.groupCollapsed('date groupCollapsed', '#fa709a')
          LogUtils.logDefault(new Date().toLocaleString(), 'logDefault')
          LogUtils.logInfo(new Date().toLocaleDateString(), 'logInfo')
          LogUtils.logSuccess(new Date().toLocaleTimeString(), 'logSuccess')
          break
        case 'groupEnd':
          LogUtils.groupEnd()
          break
        case 'table':
          LogUtils.table([new Date().toLocaleString(), new Date().toLocaleDateString(), new Date().toLocaleTimeString()])
          break
      }
      this.$toast.success(`${name}`)
    }
  }
</script>

<style lang=scss scoped>
	.request {

	}

</style>
