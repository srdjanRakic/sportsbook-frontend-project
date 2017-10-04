<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-xs-12">
          <div class="col-md-6" v-for="(widget, i) in widgets" :key="i">
            <div class="panel status panel-info">
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

  <!-- <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field
          v-on:keyup.enter="search"
          solo v-model="searchParams" clearable
          prepend-icon="search" label="Search"
          :prepend-icon-cb="search">
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-3">
     <v-flex>
        <draggable v-model="widgets">
          <transition-group>
           <v-card class="mb-2 mr-2 text-xs-center list-group" v-for="(widget, i) in widgets" :key="i">
              <v-icon class="mt-2 list-group-item" large>{{ widget.icon }}</v-icon>
              <v-card-text>
                <p>{{ widget.title }}</p>
              </v-card-text>
            </v-card>
          </transition-group>
        </draggable>
      </v-flex>
    </v-layout>
  </v-container> -->
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
    searchParams: '',
  }),
  methods: {
    search() {
      // eslint-disable-next-line
      console.log('searching', this.searchParams);
    },
    clearSearch() {
      this.searchParams = '';
    },
  },
};
</script>
