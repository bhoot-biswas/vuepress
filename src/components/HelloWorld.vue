<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a class="button" v-on:click="signOut">Sign-out</a>
    {{ currentUser }}
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { mapGetters } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  created() {
    firebase.auth().currentUser.getIdToken(true).then((idToken) => {
      console.log(idToken);
    });
    console.log('HelloWorld created');
  },
  mounted() {
    console.log('HelloWorld mounted');
    console.log(this.currentUser);
  },
  methods: {
    signOut() {
      firebase.auth().signOut().then(() => {
        this.$router.push('login');
      }).catch((error) => {
        console.log(error.message);
      });
    },
  },
  computed: {
    ...mapGetters([
      'currentUser',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
