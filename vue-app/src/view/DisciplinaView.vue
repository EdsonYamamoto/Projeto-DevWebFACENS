<template>
<div>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn 
          color="indigo"
          dark
          v-on="on"
        >
          Cadastrar disciplina
          <v-icon right>fas fa-plus</v-icon>
        </v-btn>
      </template>
        <disciplina-form></disciplina-form>
    </v-dialog>
    <disciplina-list></disciplina-list>
</div>
</template>
<style>
</style>
<script>
import disciplinaList from "@/components/lists/DisciplinaList";
import disciplinaForm from "@/components/forms/DisciplinaForm";

export default {
  components: {
    disciplinaList,
    disciplinaForm
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>