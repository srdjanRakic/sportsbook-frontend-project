<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#globalColorsAccordion" href="#collapseLinkColors">
          </span>Link Colors</a>
      </h4>
    </div>
    <div id="collapseLinkColors" class="panel-collapse collapse">
      <div class="list-group">
        <div class="list-group-item">
          <div class="row">
            <div class="container-fluid">
              <div class="col-md-3" v-for="(item, i) in linkColors" :key="i">
                <div style="clear: both;">{{item.title}}</div>
                <a @click="showSelectColorModal(item.title, item.chosenColor)">
                  <span :style="{background: item.chosenColor}" class="color-box"></span>
                </a>
              </div>
            </div>
          </div>
          <color-picker-modal :colorTitle="optionTitle" :color="chosenColor" @onColorChosen="onColorChosen"></color-picker-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'link-colors',
  data: () => ({
    optionTitle: '',
    chosenColor: '',
  }),
  computed: {
    linkColors() {
      return this.$store.getters.linkColors;
    },
  },
  methods: {
    showSelectColorModal(title, color) {
      this.optionTitle = title;
      this.chosenColor = color;

      this.$store.dispatch('toggleSelectColorModal', true);
    },
    onColorChosen(val) {
      this.$store.dispatch('updateLinkColors', val);
    },
  },
};
</script>
