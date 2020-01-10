<template>
	<div class="request pageWrap">
		<div class="m_b_20">
			<van-row gutter="15">
				<van-col span="12">
					<van-button type="primary" @click='_handleHasClass("mUtils")'>hasClass true</van-button>
				</van-col>
				<van-col span="12">
					<van-button type="info" @click='_handleHasClass("m_b_22")'>hasClass false</van-button>
				</van-col>
			</van-row>
		</div>
		<div class="m_b_20">
			<van-row gutter="15">
				<van-col span="12">
					<van-button type="primary" @click='_handleAddClass'>AddClass</van-button>
				</van-col>
				<van-col span="12">
					<van-button type="info" @click='_handleRemClass'>RemoveClass</van-button>
				</van-col>
			</van-row>
		</div>
		<div class="m_b_20">
			<van-button type="danger" @click='_handleClassInfo'>获取body宽度</van-button>
		</div>
		<div class="m_b_20">
			<van-row gutter="15">
				<van-col span="12">
					<van-button type="primary" @click='_handlecssFilter(true)'>cssFilter 单个设置</van-button>
				</van-col>
				<van-col span="12">
					<van-button type="info" @click='_handlecssFilter(false)'>cssFilter 批量设置</van-button>
				</van-col>
			</van-row>
		</div>
	</div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator'
  import {DomUtils, DecoratorUtils} from 'js-utils-m'

  @Component
  export default class Request extends Vue {
    private API: any;

    private created() {
      console.log('created')
    }

    private mounted() {
      console.log('mounted')
    }

    @DecoratorUtils.log
    private _handleHasClass(className: string) {
      console.log(DomUtils.hasClass(document.body, className))
    }

    @DecoratorUtils.log
    private _handleClassInfo() {
      return DomUtils.computedStyle(document.body, 'width')
    }

    private _handleAddClass() {
      DomUtils.addClass(document.body, 'mUtils')
    }

    private _handleRemClass() {
      DomUtils.removeClass(document.body, 'mUtils')
    }

    private _handlecssFilter(flag: boolean) {
      // @ts-ignore
      flag ? DomUtils.cssFilter(document.body, 'grayscale', 1) :
        DomUtils.cssFilter(document.body, {
          'grayscale': 0.5,
          'opacity': 0.7,
          'hue-rotate': '90deg'
        })
    }

  }
</script>

<style lang=scss scoped>
	.request {

	}

</style>
