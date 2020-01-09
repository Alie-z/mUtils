<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="input">{{test}}</div>
    <HelloWorld msg="Welcome to Your Vue.js App" v-model='test'/>
<!--    <input type="text" v-model='input'>-->
  </div>
</template>

<script>
  // @ is an alias to /srcasdf
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    data () {
      return (
        {
          test: ''
        }
      )
    },
    methods: {}
  }
</script>
