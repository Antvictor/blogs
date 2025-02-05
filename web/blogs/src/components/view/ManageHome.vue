<template>
  <el-container style="height: 100vh;">
    <!-- Header 部分 -->
    <el-header class="header">
      <div class="header-content">
        <el-avatar :src="avatarUrl" size="small" />
        <span>{{ username }}</span>
      </div>
    </el-header>

    <!-- SideBar 和主体内容部分 -->
    <el-container>
      <!-- SideBar 部分 -->
      <el-aside width="500px" class="aside">
        <Menu2 />
      </el-aside>

      <!-- 主体内容部分 -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>

    <!-- Footer 部分 -->
    <el-footer class="footer">
      备案信息 © 2025
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MenuCollapse from '@/components/menu/MenuCollapse.vue';
import Menu2 from '@/components/menu/Menu2.vue';

const username = ref('John Doe');
const avatarUrl = ref('https://www.example.com/avatar.jpg');
</script>

<style scoped>
.header {
  background-color: #409eff;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
}

.header-content {
  display: flex;
  align-items: center;
}

.header-content span {
  margin-left: 10px;
  font-size: 16px;
}

.aside {
  background-color: #f4f4f4;
  border-right: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.footer {
  background-color: #f4f4f4;
  text-align: center;
  padding: 10px;
}
</style>
