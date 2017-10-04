<template>
   <v-expansion-panel>
      <v-expansion-panel-content>
         <div slot="header">Message Box</div>
         <v-card class="grey lighten-4 elevation-0">
            <v-card-text>
               <v-container fluid>
                  <v-layout row wrap>
                     <v-flex xs12>
                        Box position
                     </v-flex>
                     <v-flex xs12>
                        <v-select
                           v-bind:items="messageBox.boxPosition"
                           label="Select"
                           single-line
                           bottom
                           v-model="selectedMessageBoxSettings.boxPosition"
                           item-value="text"
                           item-text="text"
                           ></v-select>
                     </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                     <v-flex xs12>
                        Box effects
                     </v-flex>
                     <v-flex xs12>
                        <v-select
                           v-bind:items="messageBox.boxEffects"
                           label="Select"
                           single-line
                           bottom
                           v-model="selectedMessageBoxSettings.boxEffects"
                           item-value="text"
                            item-text="text"
                           ></v-select>
                     </v-flex>
                  </v-layout>
                    <v-layout row wrap>
                     <v-flex xs12>
                        Box template
                     </v-flex>
                     <v-flex xs12>
                        <v-select
                           v-bind:items="messageBox.boxTemplate"
                           label="Select"
                           single-line
                           bottom
                           v-model="selectedMessageBoxSettings.boxTemplate"
                           item-value="text"
                           item-text="text"
                           ></v-select>
                     </v-flex>
                  </v-layout>
               </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat class="blue--text" @click="onUpdateMessageBox">
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
  name: 'message-box',
  data() {
    return {
      selectedMessageBoxSettings: {
        boxPosition: '',
        boxEffects: '',
        boxTemplate: '',
      },
    };
  },
  computed: {
    messageBox() {
      return this.$store.getters.messageBox;
    },
  },
  methods: {
    onUpdateMessageBox() {
      this.$store.dispatch('updateMessageBox', this.selectedMessageBoxSettings);
    },
  },
};
</script>
