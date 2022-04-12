import { createApp } from 'vue';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(BootstrapVue3)
  .mount('#app');
