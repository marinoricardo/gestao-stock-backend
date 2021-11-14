<template>
	<v-row wrap>
		<v-col cols="12">
			<v-row wrap>
				<v-col cols="9"></v-col>
				<v-col cols="3">
					<!-- <router-link style="text-decoration: none;" :to="{ name: 'products.create' }">
						<v-btn color="#F4A460" style="color: #fff;">
							<v-icon class="mr-2" >mdi-plus</v-icon>Adicionar
						</v-btn>
					</router-link>-->
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
												<v-text-field label="Nome do Produto" required></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="6">
												<v-select :items="['Periciveis', 'Nao periciveis']" label="Categoria" required></v-select>
											</v-col>

											<v-col cols="12">
												<v-text-field label="Preço ( Meticais )" type="number" required></v-text-field>
											</v-col>
											<v-col cols="12">
												<v-textarea name="input-7-1" filled label="Descrição" auto-grow></v-textarea>
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
									<v-btn color="#D2691E" dark @click="dialog = false">Submeter</v-btn>
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
import PrimeRate from '../pages/Products/PrimeRate.vue'
export default {
	data() {
		return {
			dialog: false,
		}
	},
	components: {
		PrimeRate
	}



};
</script>
<style scoped>
</style>