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
          Cadastrar curso
          <v-icon right>fas fa-plus</v-icon>
        </v-btn>
      </template>
        <curso-form></curso-form>
    </v-dialog>
    <curso-list></curso-list>
</div>
</template>
<style>
</style>
<script>
import cursoList from "@/components/lists/CursoList";
import cursoForm from "@/components/forms/CursoForm";

export default {
  components: {
    cursoList,
    cursoForm
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>