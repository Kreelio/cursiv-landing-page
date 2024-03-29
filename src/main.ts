import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'virtual:svg-icons-register';

const app = createApp(App)

// app.use(VueGtag, {
//     enabled: true,
//     bootstrap: true,
//     appName: "Cursiv.io",
//     pageTrackerEnabled: true,
//     pageTrackerScreenviewEnabled: true,
//     config: {
//       id: "UA-171338794-2" ,
//       params: {
//         send_page_view: true,
//         anonymize_ip: true,
//         client_storage: 'none',
//       },
//     },
//   }, router);

app.mount('#app')
