import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from 'vue-textarea-autosize';

import firebase from './plugins/vuetify';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD5sHV14qKlPm7bJ5a7QdmMBqE-T_4COVs",
  authDomain: "fir-prueba-54a9c.firebaseapp.com",
  databaseURL: "https://fir-prueba-54a9c.firebaseio.com",
  projectId: "fir-prueba-54a9c",
  storageBucket: "fir-prueba-54a9c.appspot.com",
  messagingSenderId: "732660364609",
  appId: "1:732660364609:web:0e2606c1fc3cfae16d9dc0",
  measurementId: "G-VLZKE8F63P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
