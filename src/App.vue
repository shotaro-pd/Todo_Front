<template>
  <v-app>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header/>
    <Task/>
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
