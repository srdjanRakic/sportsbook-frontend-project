<template>
  <v-expansion-panel>
    <v-expansion-panel-content>
      <div slot="header">Custom CSS</div>
      <v-card>
        <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat class="blue--text">
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
  name: 'custom-styles',
};
</script>
