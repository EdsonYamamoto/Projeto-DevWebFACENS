<template>
  <v-container grid-list-xl>
    <v-layout
      wrap
      justify-space-between
    >
      <v-card>
  <v-container grid-list-xl>
    <v-title>
      <h2>Cadastro de usuario</h2> 
    </v-title>
      <v-flex>
        <v-form ref="form">
          <v-text-field
            v-model="Nome"
            :counter="max"
            :rules="rules"
            label="Nome"
          ></v-text-field>

        <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="Nascimento"
            label="Data Nascimento"
            prepend-icon="fas fa-calendar-alt"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="Nascimento" @input="menu = false"></v-date-picker>
      </v-menu>

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
            :append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Senha"
            hint="Pelo menos 8 caraceters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          
        <v-select
          v-model="Permissao"
          :items="items"
          label="Standard"
        ></v-select>

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
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      Id: 0,
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
