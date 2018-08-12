import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyBI8RyA_pwtF1Qh-SzBmvrbtnfsEVsPrmM',
  authDomain: 'buddies-75da9.firebaseapp.com',
  databaseURL: 'https://buddies-75da9.firebaseio.com',
  projectId: 'buddies-75da9',
  storageBucket: 'buddies-75da9.appspot.com',
  messagingSenderId: '957607983564',
};

firebase.initializeApp(config);

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    const user = firebase.auth().currentUser;
    if (!user) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
});
