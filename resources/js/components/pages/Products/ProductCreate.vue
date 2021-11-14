<template>
	<div>
		<form-prod></form-prod>
	</div>
</template>
<script>
import FormComponent from './partials/FormComponent.vue'
import MainNav from "../../layout/MainNav.vue"
export default {
	components: {
		formProd: FormComponent,
		MainNav
	},

	// data(){
	// 	return {
	// 		name: '',
	// 		min_amount: '',
	// 		max_amount: '',
	// 		min_interest_rate: '',
	// 		max_interest_rate: '',
	// 		min_period: '',
	// 		max_period: '',
	// 		dsr_max: ''
	// 	}
	// },

	// methods: {

	// 	submitForm(){
	// 		this.$store.dispatch('storeProducts', 
	// 		{
	// 			name: this.name,
	// 			min_amount: this.min_amount,
	// 			max_amount: this.max_amount,
	// 			min_interest_rate: this.min_interest_rate,
	// 			max_interest_rate: this.max_interest_rate,
	// 			min_period: this.min_period,
	// 			max_period: this.max_period,
	// 			dsr_max: this.dsr_max

	// 		})	
	// 		.then(() => this.$router.push({name: 'products'}))
	// 		.catch()
	// 	}
	// },
};
</script>
<style scoped>
</style>