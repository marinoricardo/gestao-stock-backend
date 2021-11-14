<template>
	<div>	
	<v-row justify="center">
		<v-col cols="12">
			<main-nav></main-nav>
		</v-col>
		<v-col cols="12" sm="8" style="padding-top: 40px">
			<!-- <product-form /> -->
					<v-form class="mt-4" @submit.prevent="onSubmit">
			<v-card>
				<v-card-title>
					<h4 class="grey--text font-weight-regular" v-if="this.updating">Editar Produto</h4>
					<h4 class="grey--text font-weight-regular" v-else>Cadastrar Produto</h4>
				</v-card-title>
				<v-card-text>
					<v-row wrap>
						<v-col cols="12" sm="6" md="6">
							<v-alert type="error" v-if="errors.name">
								{{ errors.name[0]}}
							</v-alert>
								<v-text-field
									outlined
									dense
									label="Producto"
									placeholder="Producto"
									v-model="products.name"
									required
									type="text"
								></v-text-field>
						</v-col>
						<!-- </v-row>
					<v-row wrap> -->
						<v-col cols="12" sm="6" md="6">
							<v-alert type="error" v-if="errors.min_amount">
								{{ errors.min_amount[0]}}
							</v-alert>							
								<v-text-field
									outlined
									dense
									label="Quantia Min."
									placeholder="Quantia Min."
									required
									v-model="products.min_amount"
								></v-text-field>
						</v-col>
						<!-- </v-row>
					<v-row wrap> -->
						<v-col cols="12" sm="6" md="6">
							<v-alert type="error" v-if="errors.min_amount">
								{{ errors.max_amount[0]}}
							</v-alert>	
								<v-text-field
									outlined
									dense
									label="Quantia Max."
									placeholder="Quantia Max."
									required
									v-model="products.max_amount"
								></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="6">
							<v-alert type="error" v-if="errors.min_amount">
								{{ errors.min_interest_rate[0]}}
							</v-alert>	
								<v-text-field
									outlined
									dense
									label="Taxa Min. ( % )"
									placeholder="Taxa Min. ( % )"
									required
									v-model="products.min_interest_rate"
									type="number"
								></v-text-field>
						</v-col>
						<!-- </v-row>
					<v-row wrap> -->
						<v-col cols="12" sm="6" md="6">
							<v-alert type="error" v-if="errors.min_amount">
								{{ errors.max_interest_rate[0]}}
							</v-alert>							
								<v-text-field
									outlined
									dense
									label="Tax Max. ( % )"
									placeholder="Tax Max. ( % )"
									required
									v-model="products.max_interest_rate"
									type="number"
								></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="6">
							<v-alert type="error" v-if="errors.min_amount">
								{{ errors.min_period[0]}}
							</v-alert>							
								<v-text-field
									outlined
									dense
									label="Período Min. ( Meses )"
									placeholder="Período Min. ( Meses )"
									required
									v-model="products.min_period"
									type="number"
								></v-text-field>
						</v-col>
						<!-- </v-row>
					<v-row wrap> -->
						<v-col cols="12" sm="6" md="6">
							<v-alert type="error" v-if="errors.min_amount">
								{{ errors.max_period[0]}}
							</v-alert>
								<v-text-field
									outlined
									dense
									label="Período Max ( Meses )"
									placeholder="Período Max ( Meses )"
									required
									v-model="products.max_period"
									type="number"
								></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="6">
							<v-alert type="error" v-if="errors.min_amount">
								{{ errors.dsr_max[0]}}
							</v-alert>
								<v-text-field
									outlined
									dense
									label="DSR Max ( % )"
									placeholder="DSR Max ( % )"
									required
									v-model="products.dsr_max"
									type="number"
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
					<v-btn
						outlined
						small
						elevation="4"
						color="secondary"
						dark
						class="ml-0"
						v-if="this.updating"
						@click.prevent="clean"
					>
						<v-icon small class="mr-2"> mdi-eraser </v-icon>
						Limpar
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-form>
		</v-col>
	</v-row>
	</div>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
import MainNav from '../../../layout/MainNav.vue'
export default {
	components: {
		MainNav
	},
	data(){
		return{
			errors: {

			}
		}
	},
	props: {
		products: {
			require: false,
			type: Object|Array,
			default:() => {
				return {
					id: '',
					name: '',
					min_amount: '',
					max_amount: '',
					min_interest_rate: '',
					max_interest_rate: '',
					min_period: '',
					max_period: '',
					dsr_max: ''
				}
			}
		},
		updating: {
			require: false,
			type: Boolean,
			default: false

		}
	},
	methods: {
		onSubmit(){
			const action = this.updating ? 'updateProduct' : 'storeProducts'
			this.$store.dispatch(action, this.products)	
			.then(() => {
				if(this.action = this.updating){
					Swal.fire({
						title: "Sucesso!",
						text: 'Produto actualizado com sucesso',
						icon: "success",
						confirmButtonText: "Ok",
						confirmButtonColor: "#f15726",
					})
				}
				else{
					    Swal.fire({
						title: "Sucesso!",
						text: 'Produto criado com sucesso',
						icon: "success",
						confirmButtonText: "Ok",
						confirmButtonColor: "#f15726",
					})
				}
				this.$router.push({name: 'products'})
			})
			// .then(() => this.$router.push({name: 'products'}))
			.catch(errors => {
				console.log("erro",errors.response.data)
				this.errors =errors.response.data.errors
			})
		},
		clean() {
			this.products.name ='';
			this.products.min_amount ='';
			this.products.max_amount ='';
			this.products.min_interest_rate ='';
			this.products.max_interest_rate ='';
			this.products.min_period ='';
			this.products.max_period ='';
			this.products.dsr_max ='';
			this.$refs.observer.reset();
		},
		
	}
}
</script>