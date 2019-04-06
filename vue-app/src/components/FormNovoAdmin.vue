<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent>
    <v-text-field v-model="nome" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
    <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>
    <v-btn :disabled="!valid" color="success" @click="AddUserForm">
      Validate
    </v-btn>
  </v-form>
</template>
<style>
</style>
<script>
  export default {
    data() {
      return {
        nome: "",
        email: "",
        modelo: ""
      };
    },
    methods: {
      AddUserForm: function () {
        console.log(this.nome);
        console.log(this.email);
      }
    }
  };
</script>