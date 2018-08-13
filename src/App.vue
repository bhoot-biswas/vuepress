<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  created() {
    this.setCurrentUser();
    firebase.auth().currentUser.getIdToken().then((idToken) => {
      axios.defaults.headers.common.Authorization = `Bearer ${idToken}`;
      this.setReady();
      this.getAllActivities();
    });
  },
  methods: {
    ...mapActions([
      'setCurrentUser',
      'setReady',
      'getAllActivities',
    ]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
