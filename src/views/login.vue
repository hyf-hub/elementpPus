
<template>
  <el-card class="v-login">
    <template #header>后台管理系统</template>
    <el-form class="b-form" ref="form" label-position="right" label-width="90px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="cForm.username" @keyup.enter="submit" />
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
<script setup>
import { reactive, ref } from "vue";
const cForm = reactive({
  username: '',
  password: ''
})
const submit = () => { };
// export default {
//   setup() {
//     const form = ref(null);

//     const cForm = reactive({
//       username: '',
//       password: ''
//     });

//     const submit = () => { };

//     return {
//       form,
//       cForm,
//       submit,
//     };
//   },
};
</script>
<!-- <script setup lang="ts" >
import { reactive, ref } from "vue";
const test = ref('0')
const form = reactive({s
  userName: '',
  password: '',
})
const Submit = () => {

}
</script> -->
<!-- <script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const form = {
      userName: '',
      password: '',
    }
    let Test = ''
    const Submit = () => { }
    return { form, Submit, Test }
  }
})

</script> -->
<!-- <template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名称 444" prop="userName">
      <el-input v-model="form.userName"></el-input>
    </el-form-item>
    <el-form-item label="用户密码">
      <el-input v-model="form.password" show-password></el-input>
    </el-form-item>
    <el-button type="primary" @click="Submit">提交</el-button>
    <el-input v-model="Test" placeholder="请输入内容"></el-input>
  </el-form>
</template>
<script setup lang="ts" >
import { reactive, ref } from "vue";
const test = ref('0')
const form = reactive({
  userName: '',
  password: '',
})
const Submit = () => {

}
</script>
 <script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const form = {
      userName: '',
      password: '',
    }
    let Test = ''
    const Submit = () => { }
    return { form, Submit, Test }
  }
})

</script> --> -->