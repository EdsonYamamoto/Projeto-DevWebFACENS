<template>
  <v-container grid-list-xl>
    <v-layout wrap justify-space-between>
      <v-container grid-list-xl white>
        
        <div v-if="ID!==undefined&&ID!==null">
          <v-card-title primary-title>
            <h3 class="headline mb-0">Editar curso</h3>
          </v-card-title>
        </div>
        <div v-else>
          <v-card-title primary-title>
            <h3 class="headline mb-0">Cadastro de curso</h3>
          </v-card-title>
        </div>
        <v-container grid-list-xl>
          <v-flex>
            <v-form ref="form">
              <v-text-field v-model="Nome" label="Nome"></v-text-field>
              <v-text-field v-model="Coordenador" label="Coordenador"></v-text-field>
              <v-text-field v-model="Duracao" label="Duracao"></v-text-field>
              <v-text-field v-model="GradeCurricular" label="GradeCurricular"></v-text-field>
            <div v-if="ID!==undefined&&ID!==null">
            <v-btn color="success" @click="EditarCurso">
              Editar
            </v-btn>
            </div>
            <div v-else>
            <v-btn color="success" @click="SalvarCurso">
              Cadastrar
            </v-btn>
            </div>
            </v-form>
          </v-flex>
        </v-container>
      </v-container>
    </v-layout>
  </v-container>
</template>
<style>
</style>
<script>
/* eslint-disable */
import * as ServiceCurso from "@/assets/service/cursoService.js";
export default {
  props: ["ID", "Nome", "Coordenador", "Duracao", "GradeCurricular"],
  data() {
    return {
      ID: 0,
      Nome: "",
      Coordenador: "",
      Duracao: 0,
      GradeCurricular: []
    };
  },
  methods: {
    SalvarCurso: function() {
      var obj = {
        Nome: this.Nome,
        Coordenador: this.Coordenador,
        Duracao: this.Duracao,
        GradeCurricular: this.GradeCurricular
      };
      ServiceCurso.CriarCurso(obj);
    },
    EditarCurso: function() {
      var obj = {
        id: this.ID,
        Nome: this.Nome,
        Coordenador: this.Coordenador,
        Duracao: this.Duracao,
        GradeCurricular: this.GradeCurricular
      };
      ServiceCurso.EditarCurso(obj);
    }
  }
};
</script>