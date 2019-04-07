<template>
  <v-container grid-list-xl>
    <v-layout wrap justify-space-between>
      <v-container grid-list-xl white>
        <div v-if="ID!==undefined&&ID!==null">
          <div>
            <v-card-title primary-title>
              <h3 class="headline mb-0">Editando usuario</h3>
            </v-card-title>
          </div>
        </div>
        <div v-else>
          <div>
            <v-card-title primary-title>
              <h3 class="headline mb-0">Cadastro de usuário</h3>
            </v-card-title>
          </div>
        </div>
        <v-flex>
          <v-form ref="form">
            <v-text-field v-model="Nome" label="Nome"></v-text-field>
            <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" lazy transition="scale-transition" offset-y full-width
              min-width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field v-model="Nascimento" label="Data Nascimento" prepend-icon="fas fa-calendar-alt" readonly v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="Nascimento" @input="menu = false"></v-date-picker>
            </v-menu>
            <v-text-field v-model="CPF" label="CPF"></v-text-field>
            <v-text-field v-model="Email" label="Email"></v-text-field>
            <v-text-field v-model="Senha" :append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'" :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'" name="input-10-1" label="Senha" hint="Pelo menos 8 caraceters" counter @click:append="show1 = !show1"></v-text-field>
            <v-select v-model="Permissao" :items="items" label="Standard"></v-select>
            
            <div v-if="ID!==undefined&&ID!==null">
            <v-btn color="success" @click="EditarUsuario">
              Editar
            </v-btn>
            </div>
            <div v-else>
            <v-btn color="success" @click="SalvarUsuario">
              Cadastrar
            </v-btn>
            </div>
          </v-form>
        </v-flex>
      </v-container>

    </v-layout>
  </v-container>
</template>
<style>
</style>
<script>
/* eslint-disable */
import * as ServiceUser from "@/assets/service/userService.js";
export default {
  props: ["ID", "Nome", "Nacismento", "CPF", "Email", "Senha", "Permissao"],
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      ID: 0,
      Nome: "",
      Nascimento: new Date().toISOString().substr(0, 10),
      CPF: "",
      Email: "",
      Senha: "",
      Permissao: "",
      items: [
        "Professor",
        "Coordenador",
        "Coord-Prof",
        "Administrador",
        "Coord-Admin"
      ],
      show1: false,
      password: "Password",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  },
  methods: {
    SalvarUsuario: function() {
      var obj = {
        Nome: this.Nome,
        Nascimento: new Date(this.Nascimento).toISOString(),
        CPF: this.CPF,
        Email: this.CPF,
        Senha: this.Senha,
        Permissao: this.Permissao
      };
      ServiceUser.CriarUsuario(obj);
    },
    EditarUsuario: function() {
      var obj = {
        ID: this.ID,
        Nome: this.Nome,
        Nascimento: new Date(this.Nascimento).toISOString(),
        CPF: this.CPF,
        Email: this.CPF,
        Senha: this.Senha,
        Permissao: this.Permissao
      };
      ServiceUser.EditarUsuario(obj);
    }
  }
};
</script>