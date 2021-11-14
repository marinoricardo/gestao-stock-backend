<template>
	<div>	
	<v-row justify="center">
		<v-col cols="8" >
			<!-- <product-form /> -->\
					<v-form class="mt-4" @submit.prevent="submitForm">
			<v-card>
				<v-card-title>
					<h4 class="grey--text font-weight-regular">Cadastrar Produto</h4>
				</v-card-title>
				<v-card-text>
					<v-row wrap>
						<v-col cols="12" sm="6" md="6">
								<v-text-field
									outlined
									dense
									label="Product"
									placeholder="Product"
									v-model="name"
									required
								></v-text-field>
						</v-col>
						<!-- </v-row>
					<v-row wrap> -->
						<v-col cols="12" sm="6" md="6">
								<v-text-field
									outlined
									dense
									label="Min amount"
									placeholder="Min amount"
									required
									v-model="min_amount"
								></v-text-field>
						</v-col>
						<!-- </v-row>
					<v-row wrap> -->
						<v-col cols="12" sm="6" md="6">
								<v-text-field
									outlined
									dense
									label="Max amount"
									placeholder="Max amount"
									required
									v-model="max_amount"
								></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="6">
								<v-text-field
									outlined
									dense
									label="Min_Interest rate"
									placeholder="Min_Interest rate"
									required
									v-model="min_interest_rate"
								></v-text-field>
						</v-col>
						<!-- </v-row>
					<v-row wrap> -->
						<v-col cols="12" sm="6" md="6">
								<v-text-field
									outlined
									dense
									label="Max_Interest rate"
									placeholder="Max_Interest rate"
									required
									v-model="max_interest_rate"
								></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="6">
								<v-text-field
									outlined
									dense
									label="Min Period"
									placeholder="Min Period"
									required
									v-model="min_period"
								></v-text-field>
						</v-col>
						<!-- </v-row>
					<v-row wrap> -->
						<v-col cols="12" sm="6" md="6">
								<v-text-field
									outlined
									dense
									label="Max Period"
									placeholder="Max Period"
									required
									v-model="max_period"
								></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="6">
								<v-text-field
									outlined
									dense
									label="DSR max"
									placeholder="DSR max"
									required
									v-model="dsr_max"
								></v-text-field>
						</v-col>
						<!-- </v-row>
					<v-row wrap> -->

					</v-row>
				</v-card-text>
				<v-card-actions>
					<v-btn type="submit" small elevation="4" color="secondary" dark>
						<v-icon small class="mr-2"> mdi-check </v-icon> Salvar
					</v-btn>
					<v-btn
						:to="{ name: 'products' }"
						exact
						outlined
						small
						elevation="4"
						color="secondary"
						dark
						class="mx-4"
						style="text-decoration: none;"
					>
						<v-icon small class="mr-2"> mdi-cancel </v-icon>
						Cancelar
					</v-btn>
					<!-- <v-btn
						outlined
						small
						elevation="4"
						color="secondary"
						dark
						@click.prevent="clean"
						class="ml-0"
					>
						<v-icon small class="mr-2"> mdi-eraser </v-icon>
						Limpar
					</v-btn> -->
				</v-card-actions>
			</v-card>
		</v-form>
		</v-col>
	</v-row>
	</div>
</template>
<script>
import ProductForm from "./form/ProductForm.vue";
import MainNav from "../../layout/MainNav.vue"
export default {
	components: {
		ProductForm,
		MainNav
	},

	data(){
		return {
			name: '',
			min_amount: '',
			max_amount: '',
			min_interest_rate: '',
			max_interest_rate: '',
			min_period: '',
			max_period: '',
			dsr_max: ''
		}
	},

	methods: {

		submitForm(){
			this.$store.dispatch('storeProducts', 
			{
				name: this.name,
				min_amount: this.min_amount,
				max_amount: this.max_amount,
				min_interest_rate: this.min_interest_rate,
				max_interest_rate: this.max_interest_rate,
				min_period: this.min_period,
				max_period: this.max_period,
				dsr_max: this.dsr_max

			})	
			.then(() => this.$router.push({name: 'products'}))
			.catch()
		}
	},
};
</script>
<style scoped>
</style>