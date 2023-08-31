<template>
  <div ref="qrwrap" id="qrwrap"></div>
</template>
<script setup lang="ts">
import QRCode from "qrcode";

const content = ref("www.baidu.com");
const qrwrap = ref<null | HTMLElement>(null);

onMounted(() => {
  QRCode.toCanvas(content.value).then((result: any) => {
    qrwrap.value?.appendChild(result);
  });
});
</script>
<style lang="less" scoped></style>
