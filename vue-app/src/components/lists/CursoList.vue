<template>
    <v-card>
        <v-data-table :headers="headers" :items="desserts" class="elevation-1">
            <template v-slot:items="props">
                
                <td>{{ props.item.ID }}</td>
                <td class="text-xs-right">{{ props.item.Nome }}</td>
                <td class="text-xs-right">{{ props.item.Coordenador }}</td>
                <td class="text-xs-right">{{ props.item.Duracao }}</td>
                <td class="text-xs-right">{{ props.item.GradeCurricular }}</td>
                <td class="text-xs-right">
                    <v-dialog v-model="dialogEdit" width="500">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" small fab dark v-on="on" @click="SetCursoAux(props.item)">
                                <v-icon right>fas fa-edit</v-icon>
                            </v-btn>
                        </template>
                        <v-card>
                            <curso-form :ID=cursoAux.ID :Nome=cursoAux.Nome :Coordenador=cursoAux.Coordenador :Duracao=cursoAux.Duracao :GradeCurricular=cursoAux.GradeCurricular></curso-form>
                        </v-card>
                    </v-dialog>
                </td>
                <td class="text-xs-right">
                    <v-dialog v-model="dialogDel" width="500">
                        <template v-slot:activator="{ on }">
                            <v-btn fab dark small color="warning" v-on="on" @click="SetCursoAux(props.item)">
                                <v-icon dark>fas fa-trash</v-icon>
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title class="headline grey lighten-2" primary-title>
                                Deseja excluir curso?
                            </v-card-title>
                            <v-card-text>
                                Curso {{cursoAux.Nome}} será excluido!
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="error" flat @click="dialogDel = false;">
                                    Cancelar
                                </v-btn>
                                <v-btn color="primary" flat @click="dialogDel = false;DeletarCurso(cursoAux)">
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
import * as ServiceCurso from "@/assets/service/cursoService.js";
import * as RepoCurso from "@/assets/repository/cursoRepository.js";
import cursoForm from "@/components/forms/CursoForm";
export default {
  data() {
    return {
      headers: [],
      desserts: [],
      cursoAux: {},
      dialogEdit: false,
      dialogDel: false
    };
  },
  components: {
    cursoForm
  },
  created() {
    var retorno = RepoCurso.EncontraTodosCurso();
    this.headers = retorno.headers;
    this.desserts = retorno.desserts;
  },
  methods: {
    EditarCurso: function(curso) {
      ServiceCurso.EditarCurso(curso);
    },
    DeletarCurso: function(curso) {
      ServiceCurso.DeletarCurso(curso);
    },
    SetCursoAux: function(curso) {
      this.cursoAux = curso;
    }
  }
};
</script>