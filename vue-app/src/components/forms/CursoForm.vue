<template>
  <v-container grid-list-xl>
    <v-layout
      wrap
      justify-space-between
    >
      <v-card>
  <v-container grid-list-xl>
    <v-title>
      Cadastro de Admin
    </v-title>
      <v-flex>
        <v-form ref="form">
          <v-text-field
            v-model="Nome"
            :counter="max"
            :rules="rules"
            label="Nome"
          ></v-text-field>
          <v-text-field
            v-model="Coordenador"
            :counter="max"
            :rules="rules"
            label="Nascimento"
          ></v-text-field>
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
      Coordenador: "",
      Duracao: 0,
      GradeCurricular: []
    };
  },
  methods: {
    teste: function() {
      console.log(this.modelo);
    }
  }
};
</script>
