<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>父组件的input :{{value}}</div>
    <div>demo1 + demo2 :{{demoAll}}</div>
    <div>demo1:<input type="text" v-model='demo1'></div>
    <div>demo2:<input type="text" v-model='demo2'></div>
    <div>
      <button @click='_handleNum'>num *2</button>
      {{num}}
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator'

  @Component
  export default class HelloWorld extends Vue {
    private demo1: string = ''
    private demo2: string = ''
    private num: number = 1
    @Prop() private msg!: string;

    @Model('setvalue', {type: String}) private readonly value!: string

    // computed
    get demoAll() {
      return this.demo1 + this.demo2
    }

    private created() {
      console.log('created')
      this.demo1 = this.value || ''
    }

    private mounted() {
      console.log('mounted')
    }

    private _handleNum() {
      this.num *= 2
    }

    // watch
    @Watch('demoAll')
    private demoAllChange(cur: any, old: any) {
      // console.log('cur', cur)
      // console.log('old', old)
      // console.log('demoAll', this.demoAll)
    }

    // watch
    @Watch('demo1')
    @Emit()
    private setvalue() {
      return this.demo1
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  div {
    margin: 10px 0;
  }
</style>
