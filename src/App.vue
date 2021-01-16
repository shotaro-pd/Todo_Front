<template>
  <v-app>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header @change="callReflesh"/>
    <Task ref="task" />
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Task from './components/Task.vue'


export default {
  name: 'App',
  components: {
    Header,
    Task,
  },
  methods: {
    callReflesh () {
      this.$refs.task.startApp()
    }
  },
  mounted(){
    document.title = "TODOアプリ";
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  }
</style>
