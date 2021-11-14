<template>
	<v-row wrap>
		<v-col cols="12">
			<v-row wrap class="right">

				<v-col cols="12">
					<router-link style="text-decoration: none;" :to="{ name: 'products.create' }">
						<v-btn color="#F4A460" style="color: #fff;">
							<v-icon class="mr-2" >mdi-plus</v-icon>Adicionar
						</v-btn>
					</router-link>
				</v-col>
			</v-row>

		</v-col>
	</v-row>
</template>
<script>
import PrimeRate from '../pages/Products/PrimeRate.vue'
export default {
	components: {
		PrimeRate
	}



};
</script>
<style scoped>
</style>