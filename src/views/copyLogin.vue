
<template>
  <el-card class="v-login">
    <template #header>后台管理系统</template>
    <el-form class="b-form" ref="form" label-position="right" label-width="90px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="cForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="cForm.password" @keyup.enter="submit" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
const cForm = reactive({
  username: '',
  password: ''
})
const submit = () => { }
</script>