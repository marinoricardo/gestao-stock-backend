<template>
	<div>
		<main-nav></main-nav>
		<v-main>
			<v-container class="mt-6" fluid>
				
				<search-component></search-component>
				<!-- <prime-rate></prime-rate> -->
				<hr>
				<products/>
			</v-container>
			
		</v-main>

		<footer class="grey lighten-5"></footer>
		

	</div>
</template>

<script>
import MainNav from "./layout/MainNav.vue";
import Footer from "./layout/Footer.vue";
import SearchComponent from "./layout/SearchComponent";
import TableComponent from "./layout/Table/TableComponent.vue";
import Products from '../components/pages/Products/Products.vue'
import PrimeRate from '../components/pages/Products/PrimeRate.vue'

export default {
	components: {
		MainNav,
		Footer,
		TableComponent,
		SearchComponent,
		Products,
		PrimeRate
	},
};
</script>