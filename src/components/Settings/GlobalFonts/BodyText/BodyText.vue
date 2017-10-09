<template>
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
          <v-select
            :options="bodyText.fontFamily"
            label="text">
           </v-select>
          <label>Font-family</label>
          <v-select
            :options="bodyText.fontWeight"
            label="text">
          </v-select>
          <label>Font-size</label>
          <v-select
           :options="bodyText.fontSize"
           label="text">
          </v-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'body-text',
  data: () => ({
    selectedBodyText: {
      fontFamily: '',
      fontWeight: '',
      fontSize: '',
    },
  }),
  computed: {
    bodyText: {
      // getter
      get() {
        return this.$store.getters.bodyText;
      },
      // setter
      set(newValue) {
        this.$store.dispatch('updateBodyText', newValue);
      },
    },
  },
};
</script>

