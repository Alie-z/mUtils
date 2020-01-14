<template>
	<div id="app">
		<van-nav-bar
				v-show='!$route.meta.isNoBar'
				:title="$route.name"
				left-arrow
				@click-left="$router.go(-1)"
		/>
		<router-view/>
		<!--加上该属性可适配ipx    safe-area-inset-bottom-->
	</div>
</template>
<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator'
  import {PerformanceUtils} from 'js-utils-m'

  @Component
  export default class HelloWorld extends Vue {

    private mounted() {
      console.log('logger', PerformanceUtils.logger())
    }
  }
</script>

<style lang="scss">
	@import "assets/scss/global";
</style>
