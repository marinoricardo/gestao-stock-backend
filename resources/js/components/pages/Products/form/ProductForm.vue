<template>
		<v-form class="mt-4" >
			<v-card>
				<v-card-title>
					<h4 class="grey--text font-weight-regular">Produtos</h4>
				</v-card-title>
				<v-card-text>
					<v-row wrap>
						<v-col cols="12" sm="6" md="6">
								<v-text-field
									outlined
									dense
									label="Product"
									placeholder="Product"
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
								></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="6">
								<v-text-field
									outlined
									dense
									label="Min_Interest rate"
									placeholder="Min_Interest rate"
									required
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
								></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="6">
								<v-text-field
									outlined
									dense
									label="Min Period"
									placeholder="Min Period"
									required
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
								></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="6">
								<v-text-field
									outlined
									dense
									label="DSR max"
									placeholder="DSR max"
									required
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
</template>
<script>

export default {

	// props: {
	// 	administrator: {
	// 		required: false,
	// 		type: Object | Array,
	// 		default: () => {
	// 			return {
	// 				id: "",
	// 				ab_number: "",
	// 				name: "",
	// 				email: "",
	// 				role_id: "",
	// 				role: {},
	// 			};
	// 		},
	// 	},
	// }

};
</script>
<style scoped>
.anexo {
	width: 100%;
}
</style>