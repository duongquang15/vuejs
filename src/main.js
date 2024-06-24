import { createApp } from 'vue'
import { Input,InputPassword,Select,Avatar,Table,Card,Menu,List, Drawer, Button, message } from 'ant-design-vue';
import { createPinia } from 'pinia'
import router from './router/index.js'
import axios from 'axios';


window.axios=axios;
// import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';

import './static/fontawesome-free-6.5.2-web/fontawesome-free-6.5.2-web/css/all.min.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'


const app= createApp(App);
app.use(router);
app.use(createPinia);
app.use(Card);
app.use(Input);
app.use(InputPassword);
app.use(Select);
app.use(Table);
app.use(Avatar);
app.use(List);
app.use(Menu);
app.use(Button);
app.use(Drawer);
app.mount('#app');
const pinia = createPinia()
app.use(pinia)

app.config.globalProperties.$message = message;
