// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/auth';

import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

import App from './App';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyBI8RyA_pwtF1Qh-SzBmvrbtnfsEVsPrmM',
  authDomain: 'buddies-75da9.firebaseapp.com',
  databaseURL: 'https://buddies-75da9.firebaseio.com',
  projectId: 'buddies-75da9',
  storageBucket: 'buddies-75da9.appspot.com',
  messagingSenderId: '957607983564',
};

console.log('init firebase');
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
  /* eslint-disable no-new */
  new Vue({
    store,
    router,
    el: '#app',
    components: { App },
    template: '<App/>',
    created() {
      console.log('vue created');
    },
    mounted() {
      console.log('vue mounted');
    },
  });
});
