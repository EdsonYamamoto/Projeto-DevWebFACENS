<template>
  <v-flex xs12>
    <curso-card></curso-card>
    <v-card>
      <v-container>
        <v-card-title>
          <div>
            <h3 class="headline mb-0">BUSCA CEP</h3>
            <div> 
                  {{ reposta.bairro }}
                  {{ reposta.cep }}
                  {{ reposta.complemento }}
                  {{ reposta.gia }}
                  {{ reposta.ibge }}
                  {{ reposta.localidade }}
                  {{ reposta.logradouro }}
                  {{ reposta.uf }}
                  {{ reposta.unidade }}
            </div>
          </div>  
        </v-card-title>
        <v-text-field v-model="dataTeste" label="CEP" maxlength="20"></v-text-field>
        <v-btn color="success" @click="BuscaCEP">
          Buscar o cep
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>
<style lang="stylus">
</style>
<script>
/* eslint-disable */
import cursoCard from "@/components/cards/CursoCard";
//importar servicos referentes ao projeto
import * as BuscaCEPService from "@/assets/service/CepService.js";
export default {
  components: {
    cursoCard
  },
  data() {
    return {
      dataTeste: "",
      reposta: {
        bairro: "",
        cep: "",
        complemento: "",
        gia: "",
        ibge: "",
        localidade: "",
        logradouro: "",
        uf: "",
        unidade: ""
      }
    };
  },
  //exemplo de requisição pra buscar do banco
  methods: {
    BuscaCEP: async function() {
      var resposta;
      await BuscaCEPService.BuscaCEP(this.dataTeste)
        .then(response => {
          resposta = response.data;
        })
        .catch(error => {
          console.log(error);
          return;
        });
      this.reposta = resposta;
      console.log(this.reposta);
    }
  }
};
</script>