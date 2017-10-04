<template>
  <div>

  </div>
   <!-- <v-expansion-panel>
      <v-expansion-panel-content>
         <div slot="header">Global Fonts</div>
         <v-card>
            <v-card-text class="grey lighten-3">
               <v-expansion-panel>
                  <v-expansion-panel-content>
                     <div slot="header">Primary Headline</div>
                     <v-card>
                        <v-card-text class="grey lighten-3">
                           <v-layout row wrap>
                              <v-flex xs12>
                                 Font family
                              </v-flex>
                              <v-flex xs12>
                                 <v-select
                                    v-bind:items="globalFonts.primaryHeadline.fontFamily"
                                    label="Select"
                                    single-line
                                    bottom
                                    item-value="text"
                                    item-text="text"
                                    v-model="selectedGlobalFonts.primaryHeadline.fontFamily"
                                    ></v-select>
                              </v-flex>
                              <v-flex xs12>
                                 Font-weight
                              </v-flex>
                              <v-flex xs12>
                                 <v-select
                                    v-bind:items="globalFonts.primaryHeadline.fontWeight"
                                    label="Select"
                                    single-line
                                    bottom
                                    item-value="text"
                                    item-text="text"
                                    v-model="selectedGlobalFonts.primaryHeadline.fontWeight"
                                    ></v-select>
                              </v-flex>
                              <v-flex xs12>
                                 Font-size
                              </v-flex>
                              <v-flex xs12>
                                 <v-select
                                    v-bind:items="globalFonts.primaryHeadline.fontSize"
                                    label="Select"
                                    single-line
                                    bottom
                                    item-value="text"
                                    item-text="text"
                                    v-model="selectedGlobalFonts.primaryHeadline.fontSize"
                                    ></v-select>
                              </v-flex>
                           </v-layout>
                        </v-card-text>
                     </v-card>
                  </v-expansion-panel-content>
                  <v-expansion-panel-content>
                     <div slot="header">Secondary Headline</div>
                     <v-card>
                        <v-card-text class="grey lighten-3">
                           <v-layout row wrap>
                              <v-flex xs12>
                                 Font family
                              </v-flex>
                              <v-flex xs12>
                                 <v-select
                                    v-bind:items="globalFonts.secondaryHeadline.fontFamily"
                                    label="Select"
                                    single-line
                                    bottom
                                    item-value="text"
                                    item-text="text"
                                    v-model="selectedGlobalFonts.secondaryHeadline.fontFamily"
                                    ></v-select>
                              </v-flex>
                              <v-flex xs12>
                                 Font-weight
                              </v-flex>
                              <v-flex xs12>
                                 <v-select
                                    v-bind:items="globalFonts.secondaryHeadline.fontWeight"
                                    label="Select"
                                    single-line
                                    bottom
                                    item-value="text"
                                    item-text="text"
                                    v-model="selectedGlobalFonts.secondaryHeadline.fontWeight"
                                    ></v-select>
                              </v-flex>
                              <v-flex xs12>
                                 Font-size
                              </v-flex>
                              <v-flex xs12>
                                 <v-select
                                    v-bind:items="globalFonts.secondaryHeadline.fontSize"
                                    label="Select"
                                    single-line
                                    bottom
                                    item-value="text"
                                    item-text="text"
                                    v-model="selectedGlobalFonts.secondaryHeadline.fontSize"
                                    ></v-select>
                              </v-flex>
                           </v-layout>
                        </v-card-text>
                     </v-card>
                  </v-expansion-panel-content>
                  <v-expansion-panel-content>
                     <div slot="header">Body Text</div>
                     <v-card>
                        <v-card-text class="grey lighten-3">
                           <v-layout row wrap>
                              <v-flex xs12>
                                 Font family
                              </v-flex>
                              <v-flex xs12>
                                 <v-select
                                    v-bind:items="globalFonts.bodyText.fontFamily"
                                    label="Select"
                                    single-line
                                    bottom
                                    item-value="text"
                                    item-text="text"
                                    v-model="selectedGlobalFonts.bodyText.fontFamily"
                                    ></v-select>
                              </v-flex>
                              <v-flex xs12>
                                 Font-weight
                              </v-flex>
                              <v-flex xs12>
                                 <v-select
                                    v-bind:items="globalFonts.bodyText.fontWeight"
                                    label="Select"
                                    single-line
                                    bottom
                                    item-value="text"
                                    item-text="text"
                                    v-model="selectedGlobalFonts.bodyText.fontWeight"
                                    ></v-select>
                              </v-flex>
                              <v-flex xs12>
                                 Font-size
                              </v-flex>
                              <v-flex xs12>
                                 <v-select
                                    v-bind:items="globalFonts.bodyText.fontSize"
                                    label="Select"
                                    single-line
                                    bottom
                                    item-value="text"
                                    item-text="text"
                                    v-model="selectedGlobalFonts.bodyText.fontSize"
                                    ></v-select>
                              </v-flex>
                           </v-layout>
                        </v-card-text>
                     </v-card>
                  </v-expansion-panel-content>
                  <v-expansion-panel-content>
                     <div slot="header">Accent Text</div>
                     <v-card>
                        <v-card-text class="grey lighten-3">
                           <v-layout row wrap>
                              <v-flex xs12>
                                 Font family
                              </v-flex>
                              <v-flex xs12>
                                 <v-select
                                    v-bind:items="globalFonts.accentText.fontFamily"
                                    label="Select"
                                    single-line
                                    bottom
                                    item-value="text"
                                    item-text="text"
                                    v-model="selectedGlobalFonts.accentText.fontFamily"
                                    ></v-select>
                              </v-flex>
                              <v-flex xs12>
                                 Font-weight
                              </v-flex>
                              <v-flex xs12>
                                 <v-select
                                    v-bind:items="globalFonts.accentText.fontWeight"
                                    label="Select"
                                    single-line
                                    bottom
                                    item-value="text"
                                    item-text="text"
                                    v-model="selectedGlobalFonts.accentText.fontWeight"
                                    ></v-select>
                              </v-flex>
                              <v-flex xs12>
                                 Font-size
                              </v-flex>
                              <v-flex xs12>
                                 <v-select
                                    v-bind:items="globalFonts.accentText.fontSize"
                                    label="Select"
                                    single-line
                                    bottom
                                    item-value="text"
                                    item-text="text"
                                    v-model="selectedGlobalFonts.accentText.fontSize"
                                    ></v-select>
                              </v-flex>
                           </v-layout>
                        </v-card-text>
                     </v-card>
                  </v-expansion-panel-content>
               </v-expansion-panel>
            </v-card-text>
            <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn flat class="blue--text" @click="onSaveGlobalFonts">
                  <v-icon left>check_circle</v-icon>
                  Save
               </v-btn>
            </v-card-actions>
         </v-card>
      </v-expansion-panel-content>
   </v-expansion-panel> -->
</template>

<script>
export default {
  name: 'global-fonts',
  data() {
    return {
      selectedGlobalFonts: {
        primaryHeadline: {
          fontFamily: [],
          fontWeight: [],
          fontSize: [],
        },
        secondaryHeadline: {
          fontFamily: [],
          fontWeight: [],
          fontSize: [],
        },
        bodyText: {
          fontFamily: [],
          fontWeight: [],
          fontSize: [],
        },
        accentText: {
          fontFamily: [],
          fontWeight: [],
          fontSize: [],
        },
      },
    };
  },
  computed: {
    globalFonts() {
      return this.$store.getters.globalFonts;
    },
  },
  methods: {
    onSaveGlobalFonts() {
      this.$store.dispatch('updateGlobalFonts', this.selectedGlobalFonts);
    },
  },
};
</script>
