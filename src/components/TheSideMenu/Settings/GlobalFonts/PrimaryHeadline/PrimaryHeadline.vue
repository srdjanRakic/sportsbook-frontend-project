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
          <select class="form-control" v-model="selectedFontFamily">
            <option
            v-for="(option, index) in fontFamily" :key="index"
            :value="option">
            {{ option.value }}
            </option>
          </select>
          <label>Font-weight</label>
          <select class="form-control" v-model="selectedFontWeight">
            <option
            v-for="(option, index) in fontWeight" :key="index"
            :value="option">
            {{ option.value }}
            </option>
          </select>
          <label>Font-size</label>
          <select class="form-control" v-model="selectedFontSize">
            <option
            v-for="(option, index) in fontSize" :key="index"
            :value="option">
            {{ option.value }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'primary-headline',
  computed: {
    fontFamily() {
      return this.$store.getters.primaryHeadlineFontFamily;
    },
    fontWeight() {
      return this.$store.getters.primaryHeadlineFontWeight;
    },
    fontSize() {
      return this.$store.getters.primaryHeadlineFontSize;
    },
    selectedFontFamily: {
      get() {
        return this.fontFamily.find(x => x.selected === true);
      },
      set(val) {
        this.$store.dispatch('updatePrimaryHeadlineFontFamily', val);
      },
    },
    selectedFontWeight: {
      get() {
        return this.fontWeight.find(x => x.selected === true);
      },
      set(val) {
        this.$store.dispatch('updatePrimaryHeadlineFontWeight', val);
      },
    },
    selectedFontSize: {
      get() {
        return this.fontSize.find(x => x.selected === true);
      },
      set(val) {
        this.$store.dispatch('updatePrimaryHeadlineFontSize', val);
      },
    },
  },
};
</script>
