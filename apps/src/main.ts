import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vant/lib/index.css";
import arr from './assets/vant'
const app = createApp(App);
arr.forEach(item=>{
    app.use(item)
})
app.use(store).use(router).mount("#app");
