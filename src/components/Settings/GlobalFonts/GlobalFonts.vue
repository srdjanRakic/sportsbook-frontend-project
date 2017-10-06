<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseGlobalFonts">
          </span>Global Fonts</a>
      </h4>
    </div>
    <div id="collapseGlobalFonts" class="panel-collapse collapse">
      <div class="list-group">
        <div class="list-group-item">
          <div class="panel-group" id="globalFontsAccordion">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a data-toggle="collapse" data-parent="#globalFontsAccordion" href="#collapsePrimaryHeadline">
                    </span>Primary Headline</a>
                </h4>
              </div>
              <div id="collapsePrimaryHeadline" class="panel-collapse collapse">
                <div class="list-group">
                  <div class="list-group-item">
                    <label>Font-family</label>
                    <v-select :options="globalFonts.primaryHeadline.fontFamily" label="text"></v-select>
                    <label>Font-family</label>
                    <v-select :options="globalFonts.primaryHeadline.fontWeight" label="text"></v-select>
                    <label>Font-size</label>
                    <v-select :options="globalFonts.primaryHeadline.fontSize" label="text"></v-select>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a data-toggle="collapse" data-parent="#globalFontsAccordion" href="#collapseSecondaryHeadline">
                    </span>Secondary Headline</a>
                </h4>
              </div>
              <div id="collapseSecondaryHeadline" class="panel-collapse collapse">
                <div class="list-group">
                  <div class="list-group-item">
                    <label>Font-family</label>
                    <v-select :options="globalFonts.secondaryHeadline.fontFamily" label="text"></v-select>
                    <label>Font-family</label>
                    <v-select :options="globalFonts.secondaryHeadline.fontWeight" label="text"></v-select>
                    <label>Font-size</label>
                    <v-select :options="globalFonts.secondaryHeadline.fontSize" label="text"></v-select>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a data-toggle="collapse" data-parent="#globalFontsAccordion" href="#collapseFontSize">
                    </span>Body Text</a>
                </h4>
              </div>
              <div id="collapseFontSize" class="panel-collapse collapse">
                <div class="list-group">
                  <div class="list-group-item">
                    <label>Font-family</label>
                    <v-select :options="globalFonts.bodyText.fontFamily" label="text"></v-select>
                    <label>Font-family</label>
                    <v-select :options="globalFonts.bodyText.fontWeight" label="text"></v-select>
                    <label>Font-size</label>
                    <v-select :options="globalFonts.bodyText.fontSize" label="text"></v-select>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a data-toggle="collapse" data-parent="#globalFontsAccordion" href="#collapseAccentText">
                    </span>Accent Text</a>
                </h4>
              </div>
              <div id="collapseAccentText" class="panel-collapse collapse">
                <div class="list-group">
                  <div class="list-group-item">
                    <label>Font-family</label>
                    <v-select :options="globalFonts.accentText.fontFamily" label="text"></v-select>
                    <label>Font-family</label>
                    <v-select :options="globalFonts.accentText.fontWeight" label="text"></v-select>
                    <label>Font-size</label>
                    <v-select :options="globalFonts.accentText.fontSize" label="text"></v-select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
