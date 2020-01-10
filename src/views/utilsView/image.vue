<template>
	<div class="request pageWrap">
		<div class='m_b_20'>
		</div>
		<div class="m_b_20">
			<van-row gutter="15">
				<van-col span="8">
					<van-button type="primary" @click='_handleAddClass("m_b_20")'>hasClass</van-button>
				</van-col>
				<van-col span="16">
					<van-button type="primary" @click='_handleAddClass("m_b_22")'>hasClass</van-button>
				</van-col>
			</van-row>
		</div>
	</div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator'
  import {DomUtils} from 'js-utils-m'

  @Component
  export default class Request extends Vue {
    private API: any;

    private created() {
      console.log('created')
    }

    private mounted() {
      console.log('mounted')
    }

    private _handleAddClass(className: string) {
      DomUtils.hasClass(document.body, className)
    }

  }
</script>

<style lang=scss scoped>
	.request {

	}

</style>
