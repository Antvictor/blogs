<template>
      <el-container style="height: 100vh;">
        <el-aside width="200px" style="background-color: #f0f2f5;">
          <!-- 可以加入 logo 或者侧边栏内容 -->
        </el-aside>
    
        <el-main style="display: flex; justify-content: center; align-items: center;">
          <el-card :body-style="{ padding: '20px' }" style="width: 400px;">
            <h2 style="text-align: center;">登录</h2>
    
            <el-form :model="form" ref="formRef" status-icon>
              <el-form-item label="用户名" :label-width="formLabelWidth" prop="username" :rules="usernameRules">
                <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
    
              <el-form-item label="密码" :label-width="formLabelWidth" prop="password" :rules="passwordRules">
                <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
              </el-form-item>
    
              <!-- 新增一个 div 来包裹按钮，居中显示 -->
              <div style="display: flex; justify-content: center;">
                <el-button type="primary" block @click="handleLogin">登录</el-button>
              </div>
            </el-form>
          </el-card>
        </el-main>
      </el-container>
    </template>
    
    <script lang="ts">
    import { defineComponent, ref } from 'vue';
    import axios from './axios';
    import { ElForm, ElFormItem, ElInput, ElButton, ElContainer, ElMain, ElAside, ElCard } from 'element-plus';
    
    interface FormData {
      username: string;
      password: string;
    }
    
    export default defineComponent({
      name: 'LoginIn',
      components: {
        ElForm,
        ElFormItem,
        ElInput,
        ElButton,
        ElContainer,
        ElMain,
        ElAside,
        ElCard
      },
      setup() {
        const form = ref<FormData>({
          username: '',
          password: ''
        });
    
        const formLabelWidth = '80px';
        const formRef = ref<InstanceType<typeof ElForm> | null>(null);
    
        const usernameRules = [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '用户名长度在 3 到 15 个字符之间', trigger: 'blur' }
        ];
    
        const passwordRules = [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '密码长度在 6 到 20 个字符之间', trigger: 'blur' }
        ];
    
        // 登录请求
        
        const handleLogin = (): void => {
          formRef.value?.validate((valid: boolean) => {
            if (valid) {
              // 发起 POST 请求
              axios.post('/login', {
                username: form.value.username,
                password: form.value.password
              })
              .then((response) => {
                console.log('登录成功', response.data);
                // 根据返回数据做相关操作，比如跳转页面
              })
              .catch((error) => {
                console.error('登录失败', error);
                // 处理错误，比如提示用户登录失败
              });
            } else {
              console.log('表单验证失败');
            }
          });
        };
    
        return {
          form,
          formRef,
          formLabelWidth,
          usernameRules,
          passwordRules,
          handleLogin
        };
      }
    });
    </script>
    
    <style scoped>
    .el-card {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .el-button {
      margin-top: 20px;
    }
    </style>
    