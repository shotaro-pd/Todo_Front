<template>
      <v-app-bar color="blue" app>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title @click="showTask">ToDoリスト</v-toolbar-title>
        <v-spacer></v-spacer>
        <Dialog :title="dialogTitle" :motoTask="task" @inputData="createTask" />
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
  data() {
    return {
      dialogTitle: '新規のタスク追加',
      task: {
        text: '',
        tag: '',
        id: '',
      }
    }
  },

  methods: {
    //Dialogで入力したデータを登録しに行く
    createTask: async function(task){
      await axios.post(`http://${hostName}${path}`,{
        text: task.text,
        tag: task.tag
      }).then((response) => {
        this.showTask()
        console.log(response)
      }).catch((error) => {
        console.log(error)
      });
    },

    showTask: function(){
      this.$emit('change')
    },

  }
}
</script>

