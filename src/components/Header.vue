<template>
      <v-app-bar
        color="blue"
        app
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>ToDoリスト</v-toolbar-title>

        <v-spacer></v-spacer>

        <Dialog @inputData="createTask"/>
      </v-app-bar>
</template>
<script>
import Dialog from './Dialog.vue'
import axios from 'axios';

const hostName = 'localhost:3001';
const path = '/api/tasks'

export default {
  components: {
    Dialog,
  },
  methods: {
    //Dialogで入力したデータを登録しに行く
    createTask: async function(taskName,tagName){
      await axios.post(`http://${hostName}${path}`,{
        text: taskName,
        tag: tagName
      }).then((response) => {
        this.$emit('change')
        console.log(response)
      })
      .catch(function(error) {
        //失敗時にトースト表示
        console.log(error);
      });
    }
  }
}
</script>

