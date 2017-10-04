<template>
  <v-expansion-panel>
    <v-expansion-panel-content>
      <div slot="header">Layout Settings</div>
      <v-card>
        <v-card-text class="grey lighten-3">
          <v-flex xs12>
            <v-text-field label="Layout Name" v-model="layoutName"></v-text-field>
          </v-flex>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat class="blue--text" @click="onSaveLayoutName">
            <v-icon left>check_circle</v-icon>
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: 'layout-settings',
  data() {
    return {
      layoutName: '',
    };
  },
  computed: {
    layoutSettings() {
      return this.$store.getters.layoutSettings;
    },
  },
  methods: {
    onSaveLayoutName() {
      this.$store.dispatch('updateGlobalFonts', this.layoutName);
    },
  },
};
</script>
