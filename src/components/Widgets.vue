<template>
  <v-container>
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
        <!-- <draggable v-model="widgets" :options="{group:'widgets'}" @start="drag=true" @end="drag=false">
          <v-card class="mb-2 mr-2 text-xs-center list-group" v-for="(widget, i) in widgets" :key="i" v-sortable>
            <v-icon class="mt-2 list-group-item" large>{{ widget.icon }}</v-icon>
            <v-card-text>
              <p>{{ widget.title }}</p>
            </v-card-text>
          </v-card>
        </draggable> -->

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
  </v-container>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'widgets',
  components: {
    draggable,
  },
  data: () => ({
    widgets: [
      { icon: 'format_list_bulleted', title: 'Fixture Menu' },
      { icon: 'border_clear', title: 'Row' },
      { icon: 'content_paste', title: 'Betslip' },
      { icon: 'view_headline', title: 'Highlights' },
      { icon: 'format_align_justify', title: 'Matches' },
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

