<template>
  <div id="app">
    <navbar></navbar>
    <home></home>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';

export default {
  name: 'app',
  components: {
    Navbar,
    Home,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
