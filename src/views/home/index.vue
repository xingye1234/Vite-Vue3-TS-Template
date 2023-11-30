<template>
  <div id="home" class="text-20">首页, {{ user.fullName }}</div>
</template>
<script setup lang="ts">
import { userStore } from "@/store/user";
const user = userStore();
</script>
<style lang="less" scoped>

</style>
