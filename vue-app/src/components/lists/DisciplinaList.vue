<template>
    <v-card>
        <v-data-table :headers="headers" :items="desserts" class="elevation-1">
            <template v-slot:items="props">
                
                <td>{{ props.item.ID }}</td>
                <td class="text-xs-right">{{ props.item.Nome }}</td>
                <td class="text-xs-right">{{ props.item.Nacismento }}</td>
                <td class="text-xs-right">{{ props.item.CPF }}</td>
                <td class="text-xs-right">{{ props.item.Email }}</td>
                <td class="text-xs-right">{{ props.item.Senha }}</td>
                <td class="text-xs-right">{{ props.item.Permissao }}</td>
                <td class="text-xs-right">
                    <v-dialog v-model="dialogEdit" width="500">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" small fab dark v-on="on" @click="SetDisciplinaAux(props.item)">
                                <v-icon right>fas fa-edit</v-icon>
                            </v-btn>
                        </template>
                        <v-card>
                            <disciplina-form :ID=disciplinaAux.ID :Nome=disciplinaAux.Nome :Nacismento=disciplinaAux.Nacismento :CPF=disciplinaAux.CPF :Email=disciplinaAux.Email :Senha=disciplinaAux.Senha :Permissao=disciplinaAux.Permissao></disciplina-form>
                        </v-card>
                    </v-dialog>
                </td>
                <td class="text-xs-right">
                    <v-dialog v-model="dialogDel" width="500">
                        <template v-slot:activator="{ on }">
                            <v-btn fab dark small color="warning" v-on="on" @click="SetDisciplinaAux(props.item)">
                                <v-icon dark>fas fa-trash</v-icon>
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title class="headline grey lighten-2" primary-title>
                                Deseja excluir disciplina?
                            </v-card-title>
                            <v-card-text>
                                Disciplina {{disciplinaAux.Nome}} será excluido!
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="error" flat @click="dialogDel = false;">
                                    Cancelar
                                </v-btn>
                                <v-btn color="primary" flat @click="dialogDel = false;DeletarDisciplina(disciplinaAux)">
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
import * as ServiceDisciplina from "@/assets/service/disciplinaService.js";
import * as RepoDisciplina from "@/assets/repository/disciplinaRepository.js";
import disciplinaForm from "@/components/forms/DisciplinaForm";
export default {
  data() {
    return {
      headers: [],
      desserts: [],
      disciplinaAux: {},
      dialogEdit: false,
      dialogDel: false
    };
  },
  components: {
    disciplinaForm
  },
  created() {
    var retorno = RepoDisciplina.EncontraTodosDisciplina();
    this.headers = retorno.headers;
    this.desserts = retorno.desserts;
  },
  methods: {
    EditarDisciplina: function(disciplina) {
      ServiceDisciplina.EditarDisciplina(disciplina);
    },
    DeletarDisciplina: function(disciplina) {
      ServiceDisciplina.DeletarDisciplina(disciplina);
    },
    SetDisciplinaAux: function(disciplina) {
      this.disciplinaAux = disciplina;
    }
  }
};
</script>