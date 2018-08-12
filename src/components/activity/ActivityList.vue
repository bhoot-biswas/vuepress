<template>
<div class="hello">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <activity-post-form></activity-post-form>
                <activity-list-item
                    v-for="activity in activities"
                    v-bind:key="activity.id"
                    v-bind:activity="activity">
                </activity-list-item>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

import ActivityPostForm from './ActivityPostForm.vue';
import ActivityListItem from './ActivityListItem.vue';

export default {
  name: 'ActivityList',
  components: {
    ActivityPostForm,
    ActivityListItem,
  },
  computed: mapGetters(['activities']),
};
</script>

<style scoped>
</style>
