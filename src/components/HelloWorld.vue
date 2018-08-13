<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a class="button" v-on:click="signOut">Sign-out</a>
    <activity-list></activity-list>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { mapGetters, mapActions } from 'vuex';
import ActivityList from './activity/ActivityList.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  created() {
    console.log('hello created');
  },
  components: {
    ActivityList,
  },
  methods: {
    signOut() {
      firebase.auth().signOut().then(() => {
        this.$router.push('login');
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
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
