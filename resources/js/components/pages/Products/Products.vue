<template>
    <div>
        <v-simple-table>
            <!-- <template v-slot:default > -->

            <thead>
                <tr>
                    <th class="text-left">Nome</th>
                    <th class="text-left">Categoria</th>
                    <th class="text-left">Descrição</th>
                    <th class="text-left">Preço ( Meticais )</th>
                    <!-- <th class="text-left">Imagem ( % )</th> -->

                    <th class="text-left">Acções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product,index) in products.data" :key="index">
                    <td>{{ product.name }}</td>
                    <td>{{ product.categorias.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.price }}</td>
                    <!-- <td>{{ product.image }}</td> -->

                    <td class="text">
                        <v-btn
                            rounded
                            color="#F4A460"
                            style="text-decoration: none;"
                            dark
                            :to="{ name: 'products.edit', params: { id: product.id } }"
                        >
                            <v-icon class="mr-2">mdi-pencil-outline</v-icon>
                        </v-btn>
                        <v-btn
                            rounded
                            color="#F4A460"
                            style="text-decoration: none;"
                            dark
                            @click.prevent="confirmdestroy(product)"
                        >
                            <v-icon class="mr-2">mdi-delete</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>

            <!-- </template> -->
        </v-simple-table>
        <div class="text-center">
            <v-pagination v-model="page" color="#F4A460" :length="3" circle></v-pagination>
        </div>
    </div>
</template>
<script>

import axios from 'axios'
import Swal from "sweetalert2/dist/sweetalert2.js";
export default {
    data() {
        return {
            page: 1,
        }
    },
    created() {
        this.loadProducts(),
            axios.defaults.headers.common["Authorization"] = "Bearer" + localStorage.getItem("TOKEN");
    },
    computed: {
        products() {
            return this.$store.state.Products.itens.data
        }
    },
    methods: {

        loadProducts() {
            this.$store.dispatch('getProducts')
        },
        confirmdestroy(product) {
            const warning = `Deseja remover o produto ${product.name}?`;

            Swal.fire({
                title: "Atenção!",
                text: warning,
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sim",
                cancelButtonText: "Não",
                confirmButtonColor: "#f15726",
                cancelButtonColor: "#f15726",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.destroy(product);
                }
            });
        },
        destroy(product) {
            this.$store.dispatch('destroyProduct', product.id)
                .then(() => {
                    Swal.fire({
                        title: "Sucesso!",
                        text: 'Removido com sucesso',
                        icon: "success",
                        confirmButtonText: "Ok",
                        confirmButtonColor: "#f15726",
                    })
                    this.loadProducts()
                })
                .catch(error => {
                    console.log(error)
                })
        },

    }
};
</script>


<style scoped>
.text {
    align-items: center;
}
.sweet-alert {
    background-color: #2f2f2f96;
}
</style>