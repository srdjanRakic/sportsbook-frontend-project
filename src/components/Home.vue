<template>
  <div class="container-fluid main-container">
    <div class="col-md-3 sidebar">
      <the-side-menu></the-side-menu>
    </div>
    <div class="col-md-9 content">
      <preview></preview>
    </div>
  </div>
</template>

<script>
import TheSideMenu from './TheSideMenu/TheSideMenu';
import Preview from './Preview/Preview';

export default {
  name: 'app',
  components: {
    TheSideMenu,
    Preview,
  },
};
</script>


