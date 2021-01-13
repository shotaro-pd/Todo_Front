<template>
      <v-app-bar
        color="blue"
        app
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>ToDoリスト</v-toolbar-title>

        <v-spacer></v-spacer>

        <Dialog/>
        
      </v-app-bar>
</template>
<script>
import Dialog from './Dialog.vue'


export default {
  components: {
    Dialog,
  }
}
</script>

