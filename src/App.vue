<template>
  <div id="app">
    <the-navbar></the-navbar>
    <home></home>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar/TheNavbar';
import Home from './components/Home';

export default {
  name: 'app',
  components: {
    TheNavbar,
    Home,
  },
};
</script>
