import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'virtual:svg-icons-register';
import VueGtag from "vue-gtag";
import { createRouter, createWebHashHistory } from 'vue-router';

const app = createApp(App)
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      { name: 'Home', path: '/', component: App },
      { name: 'FAQ', path: '/faq', component: App },
      { name: 'features', path: '/features', component: App },
      { name: 'team', path: '/team', component: App },
    ]
  });
  

app.use(router)

app.use(VueGtag, {
    enabled: true,
    bootstrap: true,
    appName: "Cursiv.io",
    pageTrackerEnabled: true,
    pageTrackerScreenviewEnabled: true,
    config: {
      id: "UA-171338794-2" ,
      params: {
        send_page_view: true,
        anonymize_ip: true,
        client_storage: 'none',
      },
    },
  }, router);

app.mount('#app')