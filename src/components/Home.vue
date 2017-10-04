<template>
  <div class="container-fluid main-container">
    <div class="col-md-3 sidebar">
      <side-menu></side-menu>
    </div>
    <div class="col-md-9 content">
      <preview></preview>
    </div>
  </div>
</template>

<script>
import SideMenu from './SideMenu';
import Preview from './Preview/Preview';

export default {
  name: 'app',
  components: {
    SideMenu,
    Preview,
  },
};
</script>


