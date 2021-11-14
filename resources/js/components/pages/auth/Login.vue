<template>
	<!-- <v-container fluid fill-height style="background-color: #be0028"> -->
	<v-container fluid fill-height class="page-initial">
		<!-- <v-layout row wrap justify-center align-center> -->
		<!-- <v-flex xs12 md4 dark color="red acent-3"> </v-flex> -->
		<v-row wrap justify="center" align-center>
			<v-col cols="10" sm="12" md="4">
				<v-form @submit.prevent="login">
					<v-card>
						<!-- <v-card-title  color="accent" style="background-color: #be0028">
							Titulo
						</v-card-title> -->
						<v-list dark color="#D2691E">
							<v-list-item >
								<v-list-item-content >
									<!-- <div class="overline mb-4">OVERLINE</div> -->

									<v-list-item-title class="headline mb-1" align-center>
										Gestão de Produtos
									</v-list-item-title>
								</v-list-item-content>

								<v-list-item-avatar
								tile
								size="80"
							>
							<img src="/img/logo.png" height="25" alt="" />
							</v-list-item-avatar>
							</v-list-item>
						</v-list>

						<v-card-text class="mt-6">
							<v-text-field
								outlined
								dense
								v-model="user.email"
								label="Email"
							/>
							<v-text-field
								outlined
								dense
								v-model="user.password"
								:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
								:rules="[rules.required, rules.min]"
								:type="show1 ? 'text' : 'password'"
								name="input-10-1"
								label="Password"
								hint="Mínimo de 7 caracteres"
								counter
								@click:append="show1 = !show1"
							></v-text-field>
						</v-card-text>
						<v-card-actions>
							<v-btn type="submit" small elevation="4" color="#D2691E" style="color: #fff; width: 100%;"
								>Entrar</v-btn
							>
							<v-spacer></v-spacer>
							<!-- <v-btn depressed rounded text small>Esqueceu a senha?</v-btn> -->
						</v-card-actions>
					</v-card>
				</v-form>
			</v-col>
		</v-row>
		<!-- </v-layout> -->
	</v-container>
</template>

<style scoped>
.page-initial {
	background-image: url('/img/back2.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}
</style>

<script>
export default {
	components: {},

	data() {
		return {
			user: {
				email: "",
				password: "",
			},
			show1: false,
			password: "Password",
			rules: {
				required: (value) => !!value || "Obrigatório.",
				min: (v) => v.length >= 7 || "Mínimo de 7 caracteres",
				emailMatch: () => `The email and password you entered don't match`,
			},

			// user: {}
		};
	},

	computed: {},

	methods: {
		login() {
			this.$store.dispatch("auth/loginUser", this.user)
		},
	},
};
</script>

<style scoped>
</style>