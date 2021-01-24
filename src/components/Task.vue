<template>
  <div id="main">
    <v-card class="task mx-auto ma-3" v-for="(task) in tasks.data" :key = 'task.id' color="blue lighten-5" elevation="4">
      <v-card-title>
        #{{ task.id }}  {{ task.text }}
      </v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-actions>
        <v-btn color = "#01579B" x-small rounded outlined>
          {{ task.tag }}
        </v-btn>
      </v-card-actions>
      <v-card-actions class="text-right">
        <!-- v-spacerはほかの要素の右寄せに使う -->
        <Dialog
          @inputData="changeTask"
          :title="dialogTitle"
          :motoTask="task"/>
        <v-spacer></v-spacer>
        <v-btn fab color="success" x-small @click="delTask(task)">
          <v-icon>
              mdi-check-outline
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';
import Dialog from './Dialog.vue'

const hostName = 'localhost:3001';
const path = '/api/tasks'

export default {
  name: 'Task',
  data () {
    return {
      tasks: [],
      dialogTitle: 'タスク内容修正'
    }
  },
  components: {
    Dialog,
  },
  methods: {
    //画面表示
    startApp: function(){
      this.getTasks()
    },

    //Task取得
    getTasks: function() {
      axios.get(`http://${hostName}${path}`)
        .then((response) => {
          this.tasks = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    //Task削除
    //await 非同期処理を同期処理に変える役割
    delTask: async function(task) {
      await axios.delete(`http://${hostName}${path}/${task.id}`)
        .then((response) => {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error);
        });
      this.getTasks();
    },

    //Task変更
    //await 非同期処理を同期処理に変える役割
    changeTask: async function(task) {
      await axios.patch(`http://${hostName}${path}/${task.id}`,{
        text: task.text,
        tag: task.tag
      }).then((response) => {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error);
      });
      this.getTasks();
    }
  },
  mounted: function() {
    this.startApp();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #main{
    margin-top: 55px;

  }
</style>
