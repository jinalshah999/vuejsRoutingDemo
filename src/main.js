import Vue from 'vue'
import App from './App.vue'
import vuerouter from 'vue-router';
import { routes } from './routes';


Vue.use(vuerouter);

const router=new vuerouter({
  routes:routes
  //,
  //use mode property for normal routing bydefault type is hash
 // mode:'history'
});

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
