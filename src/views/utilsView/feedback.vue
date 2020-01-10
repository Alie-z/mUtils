<template>
	<div class="request pageWrap">
		<div class='m_b_20'>
			<van-button type="primary" @click='_handleNotification'>notification</van-button>
		</div>
		<div class="m_b_20">
			<van-row gutter="15">
				<van-col span="8">
					<van-button type="info" @click='_handleToast'>Toast</van-button>
				</van-col>
				<van-col span="8">
					<van-button type="danger" @click='_handleToast(6)'>6s</van-button>
				</van-col>
			</van-row>
		</div>
		<div class="m_b_20">
			<van-row gutter="15">
				<van-col span="8">
					<van-button type="primary" @click='_handleLoading'>Loading start</van-button>
				</van-col>
				<van-col span="16">
					<van-button type="primary" plain @click='_handleLoadingLine("line")'>Loading line</van-button>
				</van-col>
			</van-row>
		</div>
		<div class="m_b_20">
			<van-button type="warning" @click='_handleLoadingClose'>Loading clear</van-button>
		</div>
	</div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator'
  import {FeedbackUtils} from 'js-utils-m'

  @Component
  export default class Request extends Vue {
    private API: any;

    private created() {
      console.log('created')
    }

    private mounted() {
      console.log('mounted')
    }

    private _handleNotification() {
      // Chrome上对http协议默认Notification.permission = 'denied'，想要推送消息就要使用https协议！ 调试的时候使用http://localhost/XXXX
      const notificationData = {
        title: '疏影横斜水清浅',
        body: '暗香浮动月黄昏',
        icon: 'http://static.huadong.uniqorn.com.cn/js/utils/5deb72135a682e007c405d87.png',
        show: () => {
          FeedbackUtils.Toast('notification show')
        },
        click: () => {
          window.open('https://alie-z.github.io/mUtils/')
        }
      }
      FeedbackUtils.notification(notificationData)
    }

    private _handleToast(dra?: number) {
      dra ? FeedbackUtils.Toast('toast 6s', dra * 1000) : FeedbackUtils.Toast('toast demo')
    }

    private _handleLoading() {
      FeedbackUtils.Loading.show({
        message: 'hello,world',
        messageColor: '#f09',
        spinner: {
          name: 'point',
          color: '#e72',
          bColor: 'red',
          duration: '.5'
        }
      })
    }

    private _handleLoadingLine(line?: string) {
      FeedbackUtils.Loading.show({
        message: 'this is line',
        messageColor: '#fe8',
        spinner: {
          name: line,
          color: '#ccc',
          bColor: 'red',
          duration: '.3'
        }
      })
    }

    private _handleLoadingClose() {
      FeedbackUtils.Loading.clear()
    }

  }
</script>

<style lang=scss scoped>
	.request {

	}

</style>
