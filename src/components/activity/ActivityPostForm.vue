<template lang="html">
		<div class="">
				<textarea
					class="form-control"
					rows="3"
					placeholder="What's on your mind?"
					v-model="text"
					@keyup.enter="addActivity"></textarea>
		</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'ActivityPostForm',
	data () {
		return {
			text: '',
		}
	},
	methods: {
		...mapActions({
			addActivity (dispatch) {
				const { text } = this;
				if (text.trim()) {
					dispatch('addActivity', {
						text,
          });
					this.text = '';
				};
			},
		}),
	},
};
</script>

<style lang="css">
</style>
