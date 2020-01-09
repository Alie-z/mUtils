<template>
  <div class="home">
    <div class="m_home">
      <h1 class="m_home_title">
        <div class='m_icon'></div>
        <span>mUtils</span>
      </h1>
      <div class="m_info">JavaScript 通用代码的收集(使用示例)</div>
      <div class="m_cart_box" v-for="(item,index) in utils" :key='item.title'>
        <div class="m_cart_title">{{item.title}}</div>
        <div class="m_cart_list">
          <div class="m_list_item"
               v-for="(i,index) in item.list"
               @click="$router.push({name:i.path})"
               :key='i.name'>
            <span>{{i.name}}</span>
            <van-icon name="arrow"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator'

  const utils = require('../global/utils.json')

  @Component
  export default class HelloWorld extends Vue {
    private utils: string = utils

    private created() {
      console.log('created')
    }

    private mounted() {
      console.log('mounted')
    }
  }
</script>

<style lang=scss scoped>
  .home {
    width: 100%;
    padding: 20px;

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
          color: rgba(69, 90, 100, 0.6);
          font-size: 13px;
          line-height: 30px;
          padding-left: 20px;
        }

        .m_cart_list {

          .m_list_item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 0 12px;
            padding: 0 20px;
            color: #323233;
            font-weight: 500;
            font-size: 14px;
            line-height: 40px;
            background: #fff;
            border-radius: 99px;
            transition: background 0.3s;
          }
        }
      }
    }
  }

</style>
