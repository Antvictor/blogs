import { createRouter, createWebHistory } from 'vue-router';
import LoginIn from '../LoginIn.vue';
import ManageBlog from '../view/ManageHome.vue'
import ArticleTest from '../view/article/ArticleTest.vue'

const routes = [
      {
            path: '/',
            name: 'LoginIn',
            component: LoginIn,
      },

      {
            path: "/home",
            name: 'ManageBlog',
            component: ManageBlog,
            children: [
                  {
                        path: "article",
                        component: ArticleTest,
                  }
            ]
      }
];

const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes,
});

export default router;