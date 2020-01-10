<template>
	<div class="request pageWrap">
		<div class='m_b_20' v-for="(item) in dataName" :key='item'>
			<van-button type="primary" @click='_handleStore(item)'>{{item}}</van-button>
		</div>
	</div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator'
  import {StoreUtils} from 'js-utils-m'

  @Component
  export default class Request extends Vue {
    private dataName: object = ['setCookie', 'getCookie', 'removeCookie', 'randomDataFromArr', 'deepClone', 'checkType', 'uniqueArray', 'union', 'intersection', 'diffset', 'calcQuantity']

    private created() {
      console.log('created')
    }

    private mounted() {
      console.log('mounted')
    }

    private _handleStore(name: string) {
      let value
      switch (name) {
        case 'setCookie':
          StoreUtils.setCookie('mUtils', '1234567', 60 * 60 * 1000)
          break
        case 'getCookie':
          value = '-' + StoreUtils.getCookie('mUtils')
          break
        case 'removeCookie':
          StoreUtils.removeCookie('mUtils')
          break
        case 'randomDataFromArr':
          value = '-' + StoreUtils.randomDataFromArr([9, 12, 3, 33, 8, 44, 3, 2, 1, 9, 376, 45, 678], 5)
          break
        case 'deepClone':
          const a = {
            a: 1,
            b: 2,
            c: 3,
            d: [1, 2]
          }
          const b = StoreUtils.deepClone(a)
          a.d[0] = 3
          console.log(a)
          console.log(b)
          break
        case 'checkType':
          console.log('StoreUtils.checkType("1")', StoreUtils.checkType('1'))
          console.log('StoreUtils.checkType(1)', StoreUtils.checkType(1))
          console.log('StoreUtils.checkType({})', StoreUtils.checkType({}))
          console.log('StoreUtils.checkType([])', StoreUtils.checkType([]))
          console.log('StoreUtils.checkType(localStorage)', StoreUtils.checkType(localStorage))
          console.log('StoreUtils.checkType(data)', StoreUtils.checkType({a: 1}) !== 'array')
          break
        case 'uniqueArray':
          console.log(StoreUtils.uniqueArray([1, 2, 3, 3, , 3, 3, '4', '4', '4']))
          break
        case 'union':
          console.log(StoreUtils.union([1, 2, 3], [2, 3, 4], 4, '3', '3', ['3']))
          break
        case 'intersection':
          console.log(StoreUtils.intersection([1, 2, 3], [2, 3, 4]))
          break
        case 'diffset':
          console.log(StoreUtils.diffset([1, 2, 3], [2, 3, 4]))
          break
        case 'calcQuantity':
          console.log('StoreUtils.calcQuantity(\'abcadefg\', \'a\') ', StoreUtils.calcQuantity('abcadefg', 'a'))
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
