<template>
	<div class="text-center">
		<v-dialog v-model="dialog" persistent width="300">
			<v-card color="red acent-3" dark>
				<v-card-text class="text-center pt-3">
					Por favor aguarde ...
					<!-- <v-progress-linear
						indeterminate
						color="white"
						class="mb-0 mt-2"
					></v-progress-linear>-->
					<v-progress-linear color="red lighten-2" indeterminate buffer-value="0" stream></v-progress-linear>
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>
<script>
import { mapState } from "vuex";
export default {
	data() {
		return {
			// dialogAction: "",
		};
	},

	computed: {
		// dialog() {
		// 	return this.$store.state.loader.loading;
		// },
		...mapState({
			dialog: state => state.loader.loading
		})
	},

	methods: {
		showLoader() {
			console.log("entrou");
			this.$store.dispatch("loading/showLoader").then(() => {
				setTimeout(() => this.$store.dispatch("loading/closeLoader"), 5000);
			});
		},
	},

	watch: {
		// dialog(newAction, oldAction) {
		// 	if (newAction == false) {
		// 		this.dialogAction = false;
		// 		setTimeout(() => (this.dialogAction = false), 1);
		// 	} else {
		// 		this.dialogAction = true;
		// 		setTimeout(() => (this.dialogAction = true), 1);
		// 	}
		// },
	},
};
</script>
<style scoped>
</style>