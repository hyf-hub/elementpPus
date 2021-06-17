<template>
  <el-button @click="GetMessage">获取信息</el-button>
</template>
<script setup lang="ts">
import { getMessage } from '@/api'
const GetMessage = () => {
  getMessage().finally((res: any) => {
    console.log('请求结果', res);
  })
}
</script>