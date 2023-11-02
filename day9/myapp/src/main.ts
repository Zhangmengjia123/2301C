import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../src/assets/style/_themes.css'

import  vant  from 'vant';
import 'vant/lib/index.css';
createApp(App).use(store).use(vant).use(router).mount('#app')
