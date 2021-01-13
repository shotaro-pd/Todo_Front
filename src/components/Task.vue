<template>
  <v-app>
    <v-card class="task mx-auto" v-for="(task) in tasks.data" :key = 'task.id' color="#F9FBE7" elevation="4">
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
        <v-spacer></v-spacer>
        <v-btn fab color="success" x-small>
          <v-icon>
              mdi-check-outline
          </v-icon>
        </v-btn>
        
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import axios from 'axios';

const hostName = 'localhost:3001';
const path = '/api/tasks'

export default {
  name: 'Task',
  data () {
    return {
      tasks: [],
    }
  },
  methods: {
    getTasks: function() {
      axios.get(`http://${hostName}${path}`)
        .then((response) => {
          this.tasks = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted: function() {
    this.getTasks();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #main{
    margin-top: 60px;

} */

.task{
  margin: 10px 5px;
}
</style>
