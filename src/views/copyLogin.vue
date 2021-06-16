<template>
  <el-card class="v-login">
    <template #header>后台管理系统</template>
    <el-form
      class="b-form"
      ref="form"
      label-position="right"
      label-width="90px"
      :model="cForm.model"
      :rules="cForm.rules"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="cForm.model.username" @keyup.enter="submit" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="cForm.model.password" @keyup.enter="submit" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    const form = ref(null);

    const cForm = reactive({
      model: {},
      rules: {},
    });

    const submit = () => { };

    return {
      form,
      cForm,
      submit,
    };
  },
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