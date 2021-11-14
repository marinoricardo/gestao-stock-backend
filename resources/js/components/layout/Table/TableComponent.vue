<template>
	<v-simple-table
	>
	<!-- <template v-slot:default > -->
	
		<thead>
			<tr>
				<th class="text-left">Product</th>
				<th class="text-left">Min amount  </th>
				<th class="text-left">Max amount  </th>
				<th class="text-left">Min_Interest rate</th>
				<th class="text-left">Max_Interest rate</th>
				<th class="text-left">Min Period</th>
				<th class="text-left">Max Period</th>
				<th class="text-left">DSR max</th>
				<th class="text-left">Acções</th>
			</tr>
		</thead>
		<tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.name }}</td>
                <td>{{ product.min_amount }}</td>
                <td>{{ product.max_amount }}</td>
                <td>{{ product.min_interest_rate }}</td>
                <td>{{ product.max_interest_rate }}</td>
                <td>{{ product.min_period }}</td>
                <td>{{ product.max_period }}</td>
                <td>{{ product.dsr_max }}</td>
                <td>
                        <v-btn
                        rounded
                         color="secondary"
                         style="text-decoration: none;"
                        dark
                        :to="{name: 'products.edit', params: {id: product.id}}"
                        >
                        Detalhes
                        </v-btn>
                </td>
            </tr>
			<!-- <tr v-for="administrator in administrators.data" :key="administrator.id">
				<td>{{ administrator.ab_number }}</td>
				<td>{{ administrator.name }}</td>
				<td>{{ administrator.email }}</td>
				<td>{{ administrator.role.name }}</td>
				<td class="text-right">
					<v-btn depressed rounded small color="secondary" :to="{ name: details_routes.name, params: { id: administrator.id } }">Detalhes</v-btn>
				</td>
			</tr> -->
		</tbody>
		<!-- </template> -->
	</v-simple-table>
</template>
<script>

import axios from 'axios'
export default {
    data(){
        return{
        }
    },
    created(){
        this.$store.dispatch('getProducts')
    },
    computed: {
        products(){
            return this.$store.state.Products.itens
        }
    },
    methods: {

    }
};
</script>