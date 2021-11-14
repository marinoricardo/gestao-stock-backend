<template>
	<div>	
		<form-edit 
			:products="products"
			:updating="true"
		></form-edit>
	</div>
</template>
<script>
// import ProductForm from "./form/ProductForm.vue";
// import MainNav from "../../layout/MainNav.vue"
import FormComponent from './partials/FormComponent.vue'
export default {
	components: {
		// ProductForm,
		formEdit: FormComponent,
		// MainNav
	},

	data(){
		return {
            products: {}
		}
	},
    props: {
        id: {
            require: true
        }
    },

    created(){
        this.$store.dispatch('loadProduct',this.id)
            .then(response => {
                console.log(response)
                this.products = response
            })
            .catch(error => {
                console.log(error)
            })
    },

	methods: {

		submitForm(){
			this.$store.dispatch('updateProduct', this.id)	
			.then(() => this.$router.push({name: 'products'}))
			.catch()
		}
	},
};
</script>
<style scoped>
</style>