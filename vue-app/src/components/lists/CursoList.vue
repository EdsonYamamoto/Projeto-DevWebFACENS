<template>
    <v-card>
        <v-data-table :headers="headers" :items="desserts" class="elevation-1">
            <template v-slot:items="props">
                <td>{{ props.item.Nome }}</td>
                <td class="text-xs-right">{{ props.item.Nacismento }}</td>
                <td class="text-xs-right">{{ props.item.CPF }}</td>
                <td class="text-xs-right">{{ props.item.Email }}</td>
                <td class="text-xs-right">{{ props.item.Senha }}</td>
                <td class="text-xs-right">{{ props.item.Permissao }}</td>
                <td class="text-xs-right">
                    <v-dialog v-model="dialogEdit" width="500">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" fab dark v-on="on" @click="SetUserAux(props.item)">
                                <v-icon right>fas fa-edit</v-icon>
                            </v-btn>
                        </template>
                        <v-card>
                            <usuario-form v-bind=userAux></usuario-form>
                        </v-card>
                    </v-dialog>
                    <v-btn fab dark small color="primary" @click="EditarUsuario(props.item)">
                        <v-icon dark>fas fa-edit</v-icon>
                    </v-btn>
                </td>
                <td class="text-xs-right">
                    <v-dialog v-model="dialogDel" width="500">
                        <template v-slot:activator="{ on }">
                            <v-btn fab dark small color="warning" v-on="on" @click="SetUserAux(props.item)">
                                <v-icon dark>fas fa-trash</v-icon>
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title class="headline grey lighten-2" primary-title>
                                Deseja excluir usuario?
                            </v-card-title>
                            <v-card-text>
                                Usuario {{userAux.Nome}} será excluido!
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="error" flat @click="dialogDel = false;">
                                    Cancelar
                                </v-btn>
                                <v-btn color="primary" flat @click="dialogDel = false;DeletarUsuario(userAux)">
                                    Excluir
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </td>
            </template>
        </v-data-table>
    </v-card>
</template>
<style>
</style>
<script>
/* eslint-disable */
import axios from "axios";
import * as ServiceUser from "@/assets/service/userService.js";
import * as RepoUser from "@/assets/repository/userRepository.js";
import usuarioForm from "@/components/forms/UsuarioForm";
export default {
  data() {
    return {
      headers: [],
      desserts: [],
      userAux: {},
      dialogEdit: false,
      dialogDel: false
    };
  },
  components: {
    usuarioForm
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
      ServiceUser.DeletarUsuario(usuario);
    },
    SetUserAux: function(usuario) {
      this.userAux = usuario;
    }
  }
};
</script>