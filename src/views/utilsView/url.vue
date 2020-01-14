<template>
	<div class="request pageWrap">
		<div class='m_b_20' v-for="(item) in dataName" :key='item'>
			<van-button type="primary" @click='_handleUrl(item)'>{{item}}</van-button>
		</div>
	</div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator'
  import {UrlUtils} from 'js-utils-m'

  @Component
  export default class Request extends Vue {
    private dataName: object = ['parseUrl', 'stringifyUrl', 'deleteUrlParam']

    private created() {
      console.log('created')
    }

    private mounted() {
      console.log('mounted')
    }

    private _handleUrl(name: string) {
      let value
      switch (name) {
        case 'parseUrl':
          value = '-' + JSON.stringify(UrlUtils.parseUrl(window.location.href))
          console.log('value', UrlUtils.parseUrl(window.location.href))
          break
        case 'stringifyUrl':
          value = '-' + UrlUtils.stringifyUrl({a: 1, b: 2})
          break
        case 'deleteUrlParam':
          window.location.href = UrlUtils.deleteUrlParam(['code'], window.location.href)
          break
      }
      this.$toast(`${name}${value ? value : ''}`)
    }
  }
</script>

<style lang=scss scoped>
	.request {

	}

</style>
