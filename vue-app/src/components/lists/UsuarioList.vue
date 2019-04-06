<template>
    <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-1"
    >
        <template v-slot:items="props">
            <td>{{ props.item.Nome }}</td>
            <td class="text-xs-right">{{ props.item.Nacismento }}</td>
            <td class="text-xs-right">{{ props.item.CPF }}</td>
            <td class="text-xs-right">{{ props.item.Email }}</td>
            <td class="text-xs-right">{{ props.item.Senha }}</td>
            <td class="text-xs-right">{{ props.item.Permissao }}</td>
            <td class="text-xs-right">
                <v-btn fab dark small color="primary" @click="EditarUsuario(props.item)">
                    <v-icon dark>fas fa-edit</v-icon>
                </v-btn>    
            </td>
            <td class="text-xs-right">
                <v-dialog
                v-model="dialog"
                width="500"
                >
                <template v-slot:activator="{ on }">
                    <v-btn fab dark small color="warning" v-on="on">
                        <v-icon dark>fas fa-trash</v-icon>
                    </v-btn>
                </template>
                    <v-card>
                        <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                        >
                        Deseja excluirUsuario?
                        </v-card-title>
                        <v-card-text>
                        Usuario {{props.item.Nome}} será excluido!
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="error"
                            flat
                            @click="dialog = false"
                        >
                            Cancelar
                        </v-btn>
                        <v-btn
                            color="primary"
                            flat
                            @click="dialog = false; DeletarUsuario(props.item)"
                        >
                            Excluir
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </td>
        </template>
    </v-data-table>
</template>
<style>
</style>
<script>
/* eslint-disable */
import axios from "axios";
import * as ServiceUser from "@/assets/service/userService.js";
import * as RepoUser from "@/assets/repository/userRepository.js";
export default {
  data() {
    return {
      headers: [],
      desserts: [],
      dialog: false
    };
  },
  created() {
    var retorno = RepoUser.EncontraTodosUsuario();
    this.headers = retorno.headers;
    this.desserts = retorno.desserts;
  },
  methods: {
    EditarUsuario: function(usuario) {
      console.log(usuario.Nome);
    },
    DeletarUsuario: function(usuario) {
      console.log(usuario.Nome);
    }
  }
};
</script>