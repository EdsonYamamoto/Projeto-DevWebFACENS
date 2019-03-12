<template>
  <v-container grid-list-xl>
    <v-layout
      wrap
      justify-space-between
    >
      <v-card>
  <v-container grid-list-xl>
    <v-title>
      Cadastro de Professor
    </v-title>
      <v-flex>
        <v-form ref="form">
          <v-text-field
            v-model="Nome"
            :counter="max"
            :rules="rules"
            label="Nome"
          ></v-text-field>
            <v-tite>
                Data Nascimento
            </v-tite>
          <v-date-picker
            v-model="Nascimento"
            :landscape="landscape"
            :reactive="reactive"
            label="Nascimento"
          ></v-date-picker>
          <v-text-field
            v-model="CPF"
            :counter="max"
            :rules="rules"
            label="CPF"
          ></v-text-field>
          <v-text-field
            v-model="Email"
            :counter="max"
            :rules="rules"
            label="Email"
          ></v-text-field>
          <v-text-field
            v-model="Senha"
            :counter="max"
            :rules="rules"
            label="Senha"
          ></v-text-field>
            <v-btn
            color="success"
            @click="SaveAdminForm"
            >
            Cadastrar
            </v-btn>

        </v-form>        
      </v-flex>  
      
      </v-container>

      </v-card>
    </v-layout>
  </v-container>
</template>
<style>
</style>
<script>
export default {
  data() {
    return {
      Id: 0,
      Nome: "",
      Nascimento: "",
      CPF: "",
      Email: "",
      Senha: ""
    };
  },
  methods: {
    SaveAdminForm: function() {
      var obj = {
        Nome: this.Nome,
        Nascimento: this.Nascimento,
        CPF: this.CPF,
        Email: this.CPF,
        Senha: this.Senha
      };
      console.log(obj);
    }
  }
};
</script>
