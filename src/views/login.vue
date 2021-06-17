<template>
  <el-form ref="form" label-width="80px" :model="Cform">
    <el-form-item label="账号" prop="userName">
      <el-input v-model="Cform.userName"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="Cform.password"></el-input>
    </el-form-item>
    <el-button @click="Submit">创建</el-button>
  </el-form>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { login } from '@/api'
import { ElMessage } from 'element-plus'
import router from '../router'
const Cform = reactive({
  userName: 'admin',
  password: 'admin123',
})
const Submit = () => {
  login(Cform).then((res) => {
    const { data } = res
    if (res.data.code === 200) {
      const { token } = res.data
      ElMessage('登录成功')
      localStorage.setItem('token', token)
      router.push('/')
    } else {
      ElMessage(data.msg)
    }
  }).catch((err) => {
    ElMessage(err.msg)
  })
}
</script>