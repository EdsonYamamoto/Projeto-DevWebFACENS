<template>
    <v-app id="keep">
        <v-navigation-drawer v-model="drawer" fixed clipped class="grey lighten-4" app>
        <v-list dense class="grey lighten-4">
            <template v-for="(item, i) in items">
              <v-layout v-if="item.heading" :key="i" row align-center >
                  <v-flex xs6>
                  <v-subheader v-if="item.heading">
                      {{ item.heading }}
                  </v-subheader>
                  </v-flex>
                  <v-flex xs6 class="text-xs-right">
                  <v-btn small flat>edit</v-btn>
                  </v-flex>
              </v-layout>
              <v-divider v-else-if="item.divider" :key="i" dark class="my-3" ></v-divider>

              <v-list-tile v-else :key="i" @click="AtualizarTela(item.function)">
                  <v-list-tile-action>
                      <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                      <v-list-tile-title class="grey--text">
                          {{ item.text }}
                      </v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
            </template>
        </v-list>
        </v-navigation-drawer>
        <v-toolbar color="light-blue darken-1" app absolute clipped-left>
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <span class="title ml-3 mr-5">Dashboard</span>
        <v-text-field
            solo-inverted
            flat
            hide-details
            label="Search"
            prepend-inner-icon="fas fa-search"
        ></v-text-field>
        <v-spacer>
          
          

        </v-spacer>
        <v-btn dark color="secondary"
          @click="Quit()"
        >
        <v-icon left >fas fa-sign-out-alt</v-icon>
          Sair
        </v-btn>
        </v-toolbar>
        <v-content>
        <v-container fluid fill-height class="white">
            <v-layout justify-center align-center>
            <v-flex shrink>
                <main-dashboard v-if="this.tela==''"></main-dashboard>
                <usuario-form v-if="this.tela=='novoUsuario'"></usuario-form>
                <curso-form v-if="this.tela=='novoCurso'"></curso-form>
                <input-file v-if="this.tela=='inputFile'"></input-file>
                
            </v-flex>
            </v-layout>
        </v-container>
        </v-content>
    </v-app>
</template>

<script>
/* eslint-disable */

import userForm from "@/components/UserForm";
import mainDashboard from "@/components/MainDashboard";
import usuarioForm from "@/components/forms/UsuarioForm";
import cursoForm from "@/components/forms/CursoForm";
import inputFile from "@/components/InputFile";

export default {
  components: {
    mainDashboard,
    userForm,
    usuarioForm,
    inputFile,
    cursoForm
  },
  data: () => ({
    drawer: null,
    items: [
      {
        icon: "fas fa-home",
        text: "Dashaboard",
        function: ""
      },
      {
        icon: "fas fa-chart-line",
        text: "Grafics",
        function: "charts"
      },
      {
        icon: "fas fa-lightbulb",
        text: "Notes",
        function: "notas"
      },
      {
        icon: "fas fa-fingerprint",
        text: "Reminders",
        function: "acessso"
      },
      {
        icon: "fas fa-plus",
        text: "Novo Usuario",
        function: "novoUsuario"
      },
      {
        icon: "fas fa-plus",
        text: "Novo Curso",
        function: "novoCurso"
      },
      {
        icon: "fas fa-plus",
        text: "Adicionar csv",
        function: "inputFile"
      },
      { divider: true },
      { heading: "Labels" },
      {
        icon: "fas fa-plus",
        text: "Create new label",
        function: "novo"
      },
      { divider: true },
      {
        icon: "fas fa-archive",
        text: "Archive",
        function: "arquivo"
      },
      {
        icon: "fas fa-trash-alt",
        text: "Trash",
        function: "lixeira"
      },
      { divider: true },
      {
        icon: "fas fa-cog",
        text: "Settings",
        function: "configuracao"
      },
      {
        icon: "far fa-comments",
        text: "Trash",
        function: "lixeira"
      },
      {
        icon: "fas fa-question-circle",
        text: "Help",
        function: "ajuda"
      },
      {
        icon: "fas fa-mobile",
        text: "App downloads",
        function: "download"
      },
      {
        icon: "fas fa-keyboard",
        text: "Keyboard shortcuts",
        function: "teclado"
      }
    ],
    tela: ""
  }),
  props: {
    source: String
  },
  methods: {
    AtualizarTela: function(nome) {
      this.tela = nome;
    },
    Quit: function() {
      console.log("SAIR!!!");
    }
  }
};
</script>

<style lang="stylus">
#keep {
  .v-navigation-drawer__border {
    display: none;
  }
}
</style>