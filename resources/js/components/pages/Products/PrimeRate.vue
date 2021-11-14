<template>
	<v-simple-table
	>
	<!-- <template v-slot:default > -->
		<tbody>
            <tr v-for="(item,index) in primes.data" :key="index">
                <td class="font-weight-medium">Prime Rate ( % )</td>
                <td>{{ item.prime_rate }}</td>
                <td class="text">
<v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          rounded
          dark
          v-bind="attrs"
          v-on="on"
          @click="storePrime"
          
        >
           <v-icon class="mr-2"> mdi-pencil </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Actualizar Prime Rate</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              
              <v-col cols="12">
                <v-text-field
                  label="Prime Rate ( % )"
                  required
                  type="number"
                  v-model="prime.prime_rate"
                ></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click.prevent="updatePrime()"

          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
        
                </td>
            </tr>
		</tbody>
		<!-- </template> -->
          
	</v-simple-table>
</template>
<script>

import axios from 'axios'
import Swal from "sweetalert2/dist/sweetalert2.js";
export default {
    data(){
        return{
            dialog: false,
            prime: {
                id: '',
                prime_rate: ''
            }
        }
    },
    created(){
        this.loadPrimes(),
        console.log("PRIME RATE", this.primes)
        axios.defaults.headers.common["Authorization"] = "Bearer" + localStorage.getItem("TOKEN");
    },
    computed: {
        primes(){
            return this.$store.state.Prime.itens
        }
    },
    methods: {

        loadPrimes(){
            this.$store.dispatch('getPRIMES')
        },
        updatePrime(){
            axios.put(`https://loan.devbackend.marrar.co.mz/api/prime-rate/1`, {
                id: 1,
                prime_rate: this.prime.prime_rate
            })
            .then(data => {
                console.log(data)
                this.dialog = false
                // location.reload()
            })

        },
        storePrime(){
            axios.get(`https://loan.devbackend.marrar.co.mz/api/prime-rate/1`).then(response => {
                console.log(response.data)
                this.prime = response.data
                console.log("primes", this.prime)
            })
        }

    }
};
</script>


<style scoped>
.text{
    align-items: center;
}

.sweet-alert {
	background-color: #2f2f2f96;
}
</style>