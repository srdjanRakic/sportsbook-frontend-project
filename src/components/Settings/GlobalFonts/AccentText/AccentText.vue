<template>
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
          <v-select
            :options="accentText.fontFamily"
            label="text">
          </v-select>
          <label>Font-family</label>
          <v-select
            :options="accentText.fontWeight"
             label="text">
          </v-select>
          <label>Font-size</label>
          <v-select
            :options="accentText.fontSize"
            label="text">
          </v-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accent-text',
  data: () => ({
    selectedAccentText: {
      fontFamily: '',
      fontWeight: '',
      fontSize: '',
    },
  }),
  computed: {
    accentText: {
      // getter
      get() {
        return this.$store.getters.accentText;
      },
      // setter
      set(newValue) {
        this.$store.dispatch('updateAccentText', newValue);
      },
    },
  },
};
</script>
