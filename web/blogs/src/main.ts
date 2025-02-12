import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './components/router';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
app.use(router).use(ElementPlus).mount('#app');

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
}
