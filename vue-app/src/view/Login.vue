<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-parallax height="150" src="https://cdn.pixabay.com/photo/2015/11/02/18/34/banner-1018818_960_720.jpg">
                <v-layout align-top column justify-center>
                    <h1 class="display-2 font-weight-thin mb-3">Canvas professor FACENS</h1>
                    <h4 class="subheading">Centro para professores</h4>
                </v-layout>
            </v-parallax>
        </v-flex>
        <v-flex pt-5 xs12 sm6 offset-sm3>
            <v-card>
                <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
                <v-card-title primary-title>
                    <div class="headline mb-0">Login</div>
                </v-card-title>
                <v-card-content>
                    <v-form @submit.prevent>
                        <v-container>
                            <v-text-field v-model="login" label="Logon" required></v-text-field>
                            <v-text-field v-model="password" label="Password" required></v-text-field>
                            <v-btn round color="primary" dark @click="loginExec()">Login</v-btn>
                        </v-container>
                    </v-form>
                </v-card-content>
            </v-card>
        </v-flex>
        <v-snackbar v-model="snackbar" :bottom="y === 'bottom'" :left="x === 'left'" :multi-line="mode === 'multi-line'" :right="x === 'right'"
            :timeout="timeout" :top="y === 'top'" :vertical="mode === 'vertical'">
            {{ text }}
            <v-btn color="pink" flat @click="snackbar = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-layout>
</template>
<style>
</style>
<script>
/* eslint-disable */
import * as ServiceUser from "@/assets/service/userService.js";
import * as RepoUser from "@/assets/repository/userRepository.js";
export default {
  data() {
    return {
      login: "",
      password: "",
      snackbar: false,
      y: "top",
      x: null,
      mode: "",
      timeout: 6000,
      text: ""
    };
  },
  methods: {
    loginExec: function() {
      var usuario = RepoUser.EncontraUsuario(this.login, this.password);
      if (usuario === null || usuario === undefined) {
        this.text = "Usuario não encontrado";

        this.snackbar = true;
        return;
      }
      ServiceUser.LoginExec(usuario);
    }
  }
};
</script>