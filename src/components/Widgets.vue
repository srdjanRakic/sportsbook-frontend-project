<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-xs-12">
          <div v-sortable class="col-md-6" v-for="(widget, i) in widgets" :key="i">
            <div class="panel status panel-warning ">
                <div class="panel-heading text-center">
                    <i v-bind:class="widget.icon"></i>
                </div>
                <div class="panel-body">
                    <p class="panel-title text-center">{{ widget.title }}</p>
                </div>
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'widgets',
  components: {
  },
  data: () => ({
    widgets: [
      { icon: 'glyphicon glyphicon-align-justify', title: 'Fixture Menu' },
      { icon: 'glyphicon glyphicon-arrow-down', title: 'Row' },
      { icon: 'glyphicon glyphicon-list-alt', title: 'Betslip' },
      { icon: 'glyphicon glyphicon-menu-hamburger', title: 'Highlights' },
      { icon: 'glyphicon glyphicon-tasks', title: 'Matches' },
    ],
  }),
};
</script>
