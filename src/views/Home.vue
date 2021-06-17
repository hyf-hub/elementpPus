<template>
  <span>Home文件</span>
  <el-button @click="GetMessage">获取信息</el-button>
</template>
<script setup>
import { getMessage } from '@/api'
const GetMessage = () => {
  getMessage().finally(res => {
    console.log('请求结果', res);
  })
}
</script>