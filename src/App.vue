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
