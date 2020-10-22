import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/css/main.css';

Vue.config.productionTip = false;

import {auth} from './firebase'

auth.onAuthStateChanged(user => {
  if(user){
    console.log(user)
    store.dispatch('detectUser', {email: user.email, uid: user.uid})
  }else{
    console.log(user)
    store.dispatch('detectUser', user)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
