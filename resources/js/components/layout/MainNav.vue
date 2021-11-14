<template>
	<div>
		<v-app-bar app clipped-left color="#D2691E">
			<!-- <v-app-bar-nav-icon class="grey--text" @click.prevent="drawer = !drawer"></v-app-bar-nav-icon> -->
			<v-toolbar-title>
				<img src="/img/logo_png/Absa_Logo_White.png" height="25" alt />
				<v-btn text dark>Gestão de Produtos</v-btn>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-menu open-on-hover bottom offset-y content-class="elevation-0">
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						text
						dark
						v-bind="attrs"
						v-on="on"
						style="text-decoration: none"
						:to="{ name: 'products' }"
					>Produtos</v-btn>
				</template>
			</v-menu>
			<v-menu open-on-hover bottom offset-y content-class="elevation-0">
				<template v-slot:activator="{ on, attrs }">
					<v-btn text dark v-bind="attrs" v-on="on" style="text-decoration: none">Utilizadores</v-btn>
				</template>
			</v-menu>

			<v-menu open-on-hover bottom offset-y content-class="elevation-0">
				<template v-slot:activator="{ on, attrs }">
					<v-btn text dark v-bind="attrs" v-on="on">|</v-btn>
				</template>
			</v-menu>

			<v-menu open-on-hover bottom offset-y content-class="elevation-0">
				<template v-slot:activator="{ on, attrs }">
					<v-btn text dark v-bind="attrs" v-on="on">Produtos</v-btn>
					<!-- <span v-bind="attrs" v-on="on"> Configurações </span> -->
				</template>
			</v-menu>
			<v-menu content-class="elevation-0" open-on-hover right min-width="200px" offset-y>
				<template v-slot:activator="{ on, attrs }">
					<v-avatar size="48" v-bind="attrs" v-on="on" color="secondary">
						<v-img src="/img/logo_png/Absa_Logo_White.png"></v-img>
						<!-- <span class="white--text" headline>asasas</span> -->
					</v-avatar>
				</template>
				<v-card class="mt-2" dark color="#D2691E">
					<v-list-item-content class="justify-center">
						<div class="mx-auto text-center">
							<v-avatar color="secondary">
								<span class="white--text" headline>HR</span>
							</v-avatar>

							<h4>{{ users.name }}</h4>
							<p class="caption mt-1">{{ users.email }}</p>
							<v-divider class="my-1"></v-divider>
							<!-- <v-btn
								depressed
								rounded
								text
								small
							>
								Alterar Senha
							</v-btn>-->
							<v-divider class="my-1"></v-divider>
							<v-btn depressed rounded text small @click="logout">Sair</v-btn>
						</div>
					</v-list-item-content>
				</v-card>
			</v-menu>
		</v-app-bar>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	data() {
		return {
			users: ''
		}
	},
	methods: {
		logout() {
			axios.post('https://loan.devbackend.marrar.co.mz/api/logout')
				.then(response => {
					console.log(response)
					window.location.href = '/'

				})
		},

	},
	created() {
		axios.defaults.headers.common["Authorization"] = "bearer" + localStorage.getItem("TOKEN");
		axios.get('https://loan.devbackend.marrar.co.mz/api/users').then(response => {
			console.log(response.data[0])
			this.users = response.data[0]
		})
	}

}
</script>
<style scoped>
</style>