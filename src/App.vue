<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Navigation/>
    <Task/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Task from './components/Task.vue'


export default {
  name: 'App',
  components: {
    Navigation,
    Task
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
