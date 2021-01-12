<template>
  <div id="app">
    <div class="task" v-for="(task) in tasks.data" :key = 'task.id'>
      <p>{{ task.text }}</p>
      <p>{{ task.tag }}</p>
    </div>
  </div>
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
div{
  margin: 0px;
  padding: 0px;
  text-align: center;
}
h1 {
  font-size: 72pt;
  font-weight: bold;
  text-align: center;
  letter-spacing: -8px;
  color: #f0f0f0;
  margin: 0px;
}
p{
  margin: 0px;
  color: #666;
  font-size: 16pt;
}
</style>
