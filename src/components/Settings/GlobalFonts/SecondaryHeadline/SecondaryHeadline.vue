<template>
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
  name: 'secondary-headline',
  computed: {
    fontFamily() {
      return this.$store.getters.secondaryHeadlineFontFamily;
    },
    fontWeight() {
      return this.$store.getters.secondaryHeadlineFontWeight;
    },
    fontSize() {
      return this.$store.getters.secondaryHeadlineFontSize;
    },
    selectedFontFamily: {
      get() {
        return this.fontFamily.find(x => x.selected === true);
      },
      set(val) {
        this.$store.dispatch('updateSecondaryHeadlineFontFamily', val);
      },
    },
    selectedFontWeight: {
      get() {
        return this.fontWeight.find(x => x.selected === true);
      },
      set(val) {
        this.$store.dispatch('updateSecondaryHeadlineFontWeight', val);
      },
    },
    selectedFontSize: {
      get() {
        return this.fontSize.find(x => x.selected === true);
      },
      set(val) {
        this.$store.dispatch('updateSecondaryHeadlineFontSize', val);
      },
    },
  },
};
</script>
