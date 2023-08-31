<template>
  <div id="home">首页, {{ user.fullName }}</div>
</template>
<script setup lang="ts">
import { userStore } from "@/store/user";
const user = userStore();
</script>
<style lang="less" scoped>
#home {
  width: 100px;
  height: 100px;
  background-color: @primaryColor;
  font-size: @fontSize;
}
</style>
