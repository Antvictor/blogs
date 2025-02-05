<template>
  <el-menu
    :default-active="activePath"
    :router="true"
    unique-opened
    :collapse="isCollapse"
    @mouseenter="handleOpen"
    @mouseleave="handleClose"
  >
    <template v-for="menu in menuItems">
      <!-- 父菜单项 -->
      <el-sub-menu
        :key="menu.name"
        v-if="menu.children && menu.children.length > 0"
        :index="menu.path"
      >
        <template #title>
          <el-icon :size="20">
            <component :is="menu.icon" />
          </el-icon>
          <span>{{ menu.title }}</span>
        </template>
        <!-- 渲染子菜单项 -->
        <el-menu-item v-for="subMenu in menu.children" :key="subMenu.name" :index="subMenu.path">
          <el-icon :size="20">
            <component :is="subMenu.icon" />
          </el-icon>
          <span>{{ subMenu.title }}</span>
        </el-menu-item>
      </el-sub-menu>

      <!-- 如果没有子菜单，直接使用 el-menu-item -->
      <el-menu-item :key="'menu-' + menu.name" v-else :index="menu.path">
        <el-icon :size="20">
          <component :is="menu.icon" />
        </el-icon>
        <span>{{ menu.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>


<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

// 路由配置数据
const menuItems = computed(() => [
  {
    title: "文章",
    icon: "menu",
    name: "ManageHome",
    path: "/home",
    children: [{ title: "列表", icon: "list", name: "ManageHome", path: "/home/article" }],
  },
  { title: "Profile", icon: "el-icon-user", name: "Profile", path: "/profile" },
  {
    title: "Settings",
    icon: "el-icon-setting",
    name: "Settings",
    path: "/settings",
    children: [
      {
        title: "Sub Settings",
        icon: "el-icon-tips",
        name: "SubSettings",
        path: "/settings/sub-settings",
      },
    ],
  },
]);

// 获取当前活动路径
const route = useRoute();
const activePath = computed(() => route.path);

const isCollapse = ref(true);
// const handleOpen = (key: string, keyPath: string[]) => {
const handleOpen = () => {
  // console.log(key, keyPath);
  isCollapse.value = false;
};
const handleClose = () => {
  // console.log(key, keyPath);
  isCollapse.value = true;
};

const getIconComponent = (iconName) => {
  // 动态返回图标组件
  return iconMap[iconName] || null;
};
</script>

<style scoped>
.layout {
  height: 100vh;
}
</style>
