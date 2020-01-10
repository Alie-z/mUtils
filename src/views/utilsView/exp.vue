<template>
	<div class="request pageWrap">
		<div class='m_b_20' v-for="(item) in dataName" :key='item'>
			<van-button type="primary" @click='_handleExp(item)'>{{item}}</van-button>
		</div>
	</div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator'
  import {ExpUtils} from 'js-utils-m'

  @Component
  export default class Request extends Vue {
    private dataName: object = ['isMobile',
      'isIOS',
      'isAndroid',
      'isPhoneNum',
      'isEmail',
      'isWeiXin',
      'isChinese',
      'isObject',
      'isEmptyObject',
      'isEmptyStr']

    private created() {
      console.log('created')
    }

    private mounted() {
      console.log('mounted')
    }

    private _handleExp(name: string) {
      let value
      switch (name) {
        case 'isMobile':
          value = '-' + ExpUtils.isMobile()
          break
        case 'isIOS':
          value = '-' + ExpUtils.isIOS()
          break
        case 'isAndroid':
          value = '-' + ExpUtils.isAndroid()
          break
        case 'isPhoneNum':
          value = '-' + ExpUtils.isPhoneNum('12345678900')
          break
        case 'isEmail':
          value = '-' + ExpUtils.isEmail('17512018620@163.com')
          break
        case 'isWeiXin':
          value = '-' + ExpUtils.isWeiXin()
          break
        case 'isChinese':
          value = '-' + ExpUtils.isChinese('123asdf啊啊啊')
          break
        case 'isObject':
          value = '-' + ExpUtils.isChinese('123asdf啊啊啊')
          break
        case 'isEmptyObject':
          const obj = {
            a: 1,
            b: 2
          }
          const obj1 = {}
          console.log(ExpUtils.isEmptyObject(obj))
          console.log(ExpUtils.isEmptyObject(obj1))
          break
        case 'isEmptyStr':
          console.log(ExpUtils.isEmptyStr(''))
          console.log(ExpUtils.isEmptyStr('    '))
          console.log(ExpUtils.isEmptyStr('  isEmptyStr  '))
          break
      }
      this.$toast.success(`${name}${value ? value : ''}`)
    }
  }
</script>

<style lang=scss scoped>
	.request {

	}

</style>
