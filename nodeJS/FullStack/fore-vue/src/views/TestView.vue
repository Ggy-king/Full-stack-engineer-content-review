<script setup>
</script>

<template>
  <header>
    测试页面
    <hr>
    <router-link :to="{name:'tForm'}">表单页面</router-link>
  </header>
  <main>
    <router-view></router-view>
  </main>

</template>
