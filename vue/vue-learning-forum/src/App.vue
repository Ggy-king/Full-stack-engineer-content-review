<template>
  <div id="app">
    <div class="show">
      <router-view></router-view>
    </div>
    <AppFooter></AppFooter>
    <ShowFooter v-show="showFooter()"></ShowFooter>
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
import ShowFooter from '@/components/ShowFooter.vue'

export default {
  name: 'App',
  components: {
    AppFooter,
    ShowFooter
  },
  methods: {
    showFooter() {
      const currentShow = this.$router.currentRoute.name
      return currentShow ? currentShow.includes('show') : false
    }
  }


}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #181818;
  color: #fff;
}
</style>
