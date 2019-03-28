
<template>
<v-layout row wrap>
    <v-flex xs12>
    <v-parallax height="150" src="https://cdn.pixabay.com/photo/2015/11/02/18/34/banner-1018818_960_720.jpg">
      <v-layout align-top column justify-center >
        <h1 class="display-2 font-weight-thin mb-3">Canvas professor FACENS</h1>
        <h4 class="subheading">Centro para professores</h4>
      </v-layout>
    </v-parallax>
    </v-flex>
        <v-flex pt-5 xs12 sm6 offset-sm3>
            <v-card>
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    aspect-ratio="2.75"
                    ></v-img>
                    <v-card-title primary-title>
                        <div  class="headline mb-0">Login</div>
                    </v-card-title>
                <v-card-content>
                    <v-form @submit.prevent>
                        <v-container>
                            <v-text-field
                                v-model="login"
                                label="Logon"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="password"
                                label="Password"
                                required
                            ></v-text-field>
                            <v-btn round color="primary" dark @click="loginExec()">Login</v-btn>
                        </v-container>
                    </v-form>
                </v-card-content>
            </v-card>
        </v-flex>
</v-layout>
</template>

<style>
</style>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      login: "",
      password: ""
    };
  },
  methods: {
    loginExec: function() {
      console.log(this.login);
      console.log(this.password);
    }
  }
};
</script>
