<template>
	<div class="home">
		<div class="m_home">
			<h1 class="m_home_title">
				<div class='m_icon'></div>
				<span @click='_handleGoPath'>mUtils</span>
			</h1>
			<div class="m_info">JavaScript 通用代码的收集(使用示例)</div>
			<div class="collapseBox">
				<van-collapse v-model="activeCur" accordion>
					<van-collapse-item
							v-for="(item,index) in utils"
							:key='item.title'
							:title="item.title"
							:name="index">
						<div class="m_cart_list">
							<div class="m_list_item"
									 v-for="(i,index) in item.list"
									 @click="_handleGoPath(i.path)"
									 :key='i.name'>
								<span>{{i.name}} <span class='m_state'>-{{i.state}}</span></span>
								<van-icon name="arrow"/>
							</div>
						</div>
					</van-collapse-item>
				</van-collapse>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator'
  import {State, Action, Getter, Mutation} from 'vuex-class';

  const utils = require('../global/utils.json')

  @Component
  export default class HelloWorld extends Vue {
    private utils: string = utils
    private activeCur: number = 99
    @State private active!: number
    @Mutation private SETACTIVE!: (arg0: number) => void

    private created() {
      this.activeCur = this.active
    }

    @Watch('activeCur')
    private activeCurChange(cur: any, old: any) {
      if (cur) {
        this.SETACTIVE(cur)
      }
    }

    private _handleGoPath(path: string) {
      const query = path === 'url' ? {code: '200', hello: 'world'} : {}
      this.$router.push({name: path, query})
    }
  }
</script>

<style lang=scss scoped>
	.home {
		width: 100%;
		padding: 10px;

		.collapseBox {
			width: 100%;
			margin-top: 15px;

			.m_cart_list {
				.m_list_item {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 5px;
					margin-bottom: 10px;
					color: #323233;
					font-weight: 500;
					font-size: 14px;
					line-height: 40px;
					background: #f2f5f7;
					border-radius: 99px;
					transition: background 0.3s;

					.m_state {
						font-size: 12px;
						color: rgba(69, 90, 100, 0.5);
					}
				}
			}
		}

		.m_home {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;

			.m_home_title {
				width: 100%;
				display: flex;
				justify-content: center;

				.m_icon {
					width: 40px;
					height: 40px;
					background: url("http://qiniu.xzlogo.com/logos/5deb72135a682e007c405d87.png?1575711251") no-repeat center/200%;
				}
			}

			.m_info {
				color: rgba(69, 90, 100, 0.6);
				font-size: 14px;
			}

			.m_cart_box {
				width: 100%;
				display: flex;
				flex-direction: column;
				padding-top: 10px;

				.m_cart_title {
					color: rgba(69, 90, 100, 0.8);
					font-size: 13px;
					line-height: 30px;
					padding-left: 20px;
				}
			}
		}
	}

</style>
