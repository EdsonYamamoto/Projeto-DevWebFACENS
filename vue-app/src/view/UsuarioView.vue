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
          Cadastrar usuario
          <v-icon right>fas fa-plus</v-icon>
        </v-btn>
      </template>
        <usuario-form></usuario-form>
    </v-dialog>
    <usuario-list></usuario-list>
</div>
</template>
<style>
</style>
<script>
import usuarioList from "@/components/lists/UsuarioList";
import usuarioForm from "@/components/forms/UsuarioForm";

export default {
  components: {
    usuarioList,
    usuarioForm
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>