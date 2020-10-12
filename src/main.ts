import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router'

// app.config.productionTip = false;
// app.use(Antd);

const app = createApp(App).use(router)
app.use(Antd)
app.mount('#app')
