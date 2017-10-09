<template>
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
          <v-select
            :options="primaryHeadline.fontFamily"
            v-model="selectedPrimaryHeadlines.fontFamily"
            label="text">
          </v-select>
          <label>Font-family</label>
          <v-select
            :options="primaryHeadline.fontWeight"
            v-model="selectedPrimaryHeadlines.fontWeight"
            label="text">
          </v-select>
          <label>Font-size</label>
          <v-select
            :options="primaryHeadline.fontSize"
            v-model="selectedPrimaryHeadlines.fontSize"
            label="text">
          </v-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'primary-headline',
  data: () => ({
    selectedPrimaryHeadlines: {
      fontFamily: '',
      fontWeight: '',
      fontSize: '',
    },
  }),
  computed: {
    primaryHeadline: {
      get() {
        return this.$store.getters.primaryHeadline;
      },
      set() {
        // eslint-disable-next-line
        console.log(this.selectedPrimaryHeadlines);
        this.$store.dispatch('updatePrimaryHeadline', this.selectedPrimaryHeadlines);
      },
    },
  },
  beforeDestroy() {
    // eslint-disable-next-line
    console.log(this.selectedPrimaryHeadlines);
    this.$store.dispatch('updatePrimaryHeadline', this.selectedPrimaryHeadlines);
  },
};
</script>
