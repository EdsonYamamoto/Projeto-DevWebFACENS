<template>
  <v-container grid-list-xl>
    <v-layout wrap justify-space-between>
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline mb-0">Cadastro de curso</h3>
        </v-card-title>
        <v-container grid-list-xl>
          <v-flex>
            <v-form ref="form">
              <v-text-field v-model="Nome" label="Nome"></v-text-field>
              <v-text-field v-model="Coordenador" label="Coordenador"></v-text-field>
              <v-text-field v-model="Duracao" label="Duracao"></v-text-field>
              <v-text-field v-model="GradeCurricular" label="GradeCurricular"></v-text-field>
              <v-btn color="success" @click="SaveCursoForm">
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
  /* eslint-disable */
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
      teste: function () {
        console.log(this.modelo);
      },
      SaveCursoForm: function () {
        var obj = {
          id: this.Id,
          Nome: this.Nome,
          Coordenador: this.Coordenador,
          Duracao: this.Duracao,
          GradeCurricular: this.GradeCurricular
        };
        console.log(obj);
      }
    }
  };
</script>