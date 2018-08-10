<template lang="html">
    <div class="card">
        <div class="card-header">
            <activity-list-item-media v-bind:activity="activity"></activity-list-item-media>
        </div>
        <div class="card-body">
            <span v-html="activity.content"></span>
        </div>
    </div>
</template>

<script>
import ActivityListItemMedia from './ActivityListItemMedia';

export default {
  name: 'ActivityListItem',
  props: ['activity'],
  components: {
    ActivityListItemMedia,
  },
  created() {
    console.log(this.activity);
  },
};
</script>

<style lang="css">
</style>
