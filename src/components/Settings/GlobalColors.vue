<template>
   <v-expansion-panel>
      <v-expansion-panel-content>
         <div slot="header">Global Colors</div>
         <v-card>
            <v-card-text class="grey lighten-3">
               <v-expansion-panel>
                  <v-expansion-panel-content>
                     <div slot="header">Background Colors</div>
                     <v-card>
                        <v-card-text class="grey lighten-3">
                           <v-layout wrap justify-space-around align-center>
                             <v-avatar v-for="(color, i) in colors" :key="i" :class="color"></v-avatar>
                           </v-layout>
                        </v-card-text>
                     </v-card>
                  </v-expansion-panel-content>
                  <v-expansion-panel-content>
                     <div slot="header">Button Colors</div>
                     <v-card>
                        <v-card-text class="grey lighten-3">
                          <v-layout wrap justify-space-around align-center>
                            <v-avatar v-for="(color, i) in colors" :key="i" :class="color"></v-avatar>
                          </v-layout>
                        </v-card-text>
                     </v-card>
                  </v-expansion-panel-content>
                  <v-expansion-panel-content>
                     <div slot="header">Table Colors</div>
                     <v-card>
                        <v-card-text class="grey lighten-3">
                          <v-layout wrap justify-space-around align-center>
                            <v-avatar v-for="(color, i) in colors" :key="i" :class="color"></v-avatar>
                          </v-layout>
                        </v-card-text>
                     </v-card>
                  </v-expansion-panel-content>
                  <v-expansion-panel-content>
                     <div slot="header">Link Colors</div>
                     <v-card>
                        <v-card-text class="grey lighten-3">
                          <v-layout wrap justify-space-around align-center>
                            <v-avatar v-for="(color, i) in colors" :key="i" :class="color"></v-avatar>
                          </v-layout>
                        </v-card-text>
                     </v-card>
                  </v-expansion-panel-content>
                  <v-expansion-panel-content>
                     <div slot="header">Odd Colors</div>
                     <v-card>
                        <v-card-text class="grey lighten-3">
                          <v-layout wrap justify-space-around align-center >
                            <v-avatar v-for="(color, i) in colors" :key="i" :class="color"></v-avatar>
                          </v-layout>
                        </v-card-text>
                     </v-card>
                  </v-expansion-panel-content>
               </v-expansion-panel>
            </v-card-text>
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
  name: 'global-colors',
  data: () => ({
    colors: ['indigo', 'teal', 'red'],
  }),
  computed: {
    globalColors() {
      return this.$store.getters.globalColors;
    },
  },
};
</script>
