<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a class="button" v-on:click="signOut">Sign-out</a>
    <activity-list></activity-list>
  </div>
</template>

<script>
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';
import { mapGetters, mapActions } from 'vuex';

import ActivityList from './activity/ActivityList';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  created() {
    console.log('HelloWorld created');
  },
  mounted() {
    console.log('HelloWorld mounted');
    firebase.auth().currentUser.getIdToken().then((idToken) => {
      axios.defaults.headers.common.Authorization = `Bearer ${idToken}`;
      this.getAllActivities();
    });
  },
  components: {
    ActivityList,
  },
  methods: {
    signOut() {
      firebase.auth().signOut().then(() => {
        this.$router.push('login');
      }).catch((error) => {
        console.log(error.message);
      });
    },
    ...mapActions([
      'getAllActivities',
    ]),
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'activities',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
