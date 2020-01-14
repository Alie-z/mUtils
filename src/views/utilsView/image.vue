<template>
	<div class="request pageWrap">
		<div class='m_b_20' v-for="(item) in dataName" :key='item'>
			<van-button type="primary" @click='_handleImage(item)'>{{item}}</van-button>
		</div>
	</div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator'
  import {ImageUtils} from 'js-utils-m'

  const logo = require('../../assets/logo.png')

  const imageCanvas = new ImageUtils(logo, 300)
  @Component
  export default class Request extends Vue {
    private dataName: object = ['addSourse', 'compose', 'convertCanvasToImage']

    private created() {
      console.log('created')
    }

    private mounted() {
      const img = imageCanvas.addSourse({
        content: '...',
        width: 0.1,
        height: 0.1,
        left: 0.1,
        top: 0.1,
        type: 'image',
        needRound: false
      }).compose().then((image) => {
        document.body.appendChild(image)
      })
      console.log('mounted', img)
    }

    private _handleImage(name: string) {
      // let value
      // switch (name) {
      //   case 'addSourse':
      //     break
      //   case 'compose':
      //     break
      //   case 'convertCanvasToImage':
      //     break
      //     this.$toast.success(`${name}${value ? value : ''}`)
      // }
    }
  }
</script>

<style lang=scss scoped>
	.request {

	}

</style>
