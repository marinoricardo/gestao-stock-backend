<template>
	<v-row wrap>
		<v-col cols="12">
			<v-row wrap>
				<v-col cols="9">
					<!-- {{ categoria.data }} -->
				</v-col>
				<v-col cols="3">
					<v-row justify="center">
						<v-dialog v-model="dialog" persistent max-width="600px">
							<template v-slot:activator="{ on, attrs }">
								<v-btn color="#F4A460" style="color: #fff;" v-bind="attrs" v-on="on">
									<v-icon class="mr-2">mdi-plus</v-icon>Produto
								</v-btn>
							</template>
							<v-card>
								<v-toolbar color="#D2691E" dark>
									<v-card-title>
										<span class="text-h5">Adicionar Produto</span>
									</v-card-title>
								</v-toolbar>
								<v-card-text>
									<v-container>
										<v-row>
											<v-col cols="12" sm="6" md="6">
												<v-text-field v-model="products.name" label="Nome do Produto" required></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="6">
												<v-select
													v-model="products.categoria_id"
													:items="categoria.data"
													item-text="name"
													item-value="id"
													label="Categoria"
													placeholder="Categoria"
													required
												></v-select>
											</v-col>

											<v-col cols="12">
												<v-text-field
													v-model="products.price"
													label="Preço ( Meticais )"
													type="number"
													required
												></v-text-field>
											</v-col>
											<v-col cols="12">
												<v-textarea
													v-model="products.description"
													name="input-7-1"
													filled
													label="Descrição"
													auto-grow
												></v-textarea>
											</v-col>
											<!-- <v-col cols="12" sm="6">
												<v-select :items="['Periciveis', 'Nao periciveis']" label="Age*" required></v-select>
											</v-col>-->
										</v-row>
									</v-container>
								</v-card-text>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="error" @click="dialog = false">Cancelar</v-btn>
									<v-btn color="#D2691E" dark @click="onSubmit()">Submeter</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-row>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>
<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
export default {
	data() {
		return {
			dialog: false,
		}
	},

	props: {
		products: {
			require: false,
			type: Object | Array,
			default: () => {
				return {
					id: '',
					name: '',
					price: '',
					description: '',
					categoria_id: '',
				}
			}
		},

	},
	computed: {
		categoria() {
			return this.$store.state.Products.categorias.data;
		},
	},
	created() {
		this.$store.dispatch('getCategory')
	},

	methods: {
		onSubmit() {
			this.$store.dispatch('storeProducts', this.products)
				.then(() => {
					Swal.fire({
						title: "Sucesso!",
						text: 'Produto criado com sucesso',
						icon: "success",
						confirmButtonText: "Ok",
						confirmButtonColor: "#f15726",
					})
					this.dialog = false;
					this.$router.push({ name: 'products' })
				})
				// .then(() => this.$router.push({name: 'products'}))
				.catch(errors => {
					// console.log("erro", errors.response.data)
					// this.errors = errors.response.data.errors
					
					Swal.fire({
						title: "Ooopss...",
						text: 'Por favor preencha todos campos devidamente',
						icon: "error",
						confirmButtonText: "Ok",
						confirmButtonColor: "#f15726",
					})
				})
		},
	}



};
</script>
<style scoped>
</style>