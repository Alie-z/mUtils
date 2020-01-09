<template>
  <div class="request pageWrap">
    <div class='m_b_20'>
      <van-button type="info" @click='_renderVideoInfo'>get 请求</van-button>
    </div>
    <van-button type="info" @click='_handlePostLogin'>post 请求</van-button>
  </div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator'

  @Component
  export default class Request extends Vue {
    private API: any;

    private created() {
      console.log('created')
    }

    private mounted() {
      console.log('mounted')
    }

    private async _renderVideoInfo() {
      await this.API._getDetail({id: '999'})
    }

    private async _handlePostLogin() {
      const param = {
        username: 'test',
        password: '12345'
      }
      await this.API._postLogin(param)
    }

  }
</script>

<style lang=scss scoped>
  .request {

  }

</style>
