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
<style lang="scss">
  @import "assets/scss/global";
</style>
