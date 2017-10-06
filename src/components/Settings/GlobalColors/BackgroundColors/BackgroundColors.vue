<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#globalColorsAccordion" href="#collapseBackgroundColors">
          </span>Background Colors</a>
      </h4>
    </div>
    <div id="collapseBackgroundColors" class="panel-collapse collapse">
      <div class="list-group">
        <div class="list-group-item">
          <div class="row">
            <div class="container-fluid">
              <div class="col-md-3" v-for="(item, i) in backgroundColors" :key="i">
                <div style="clear: both;">
                  {{item.title}}
                </div>
                <a @click="showSelectColorModal">
                  <span :style="{background: item.chosenColor }" class="color-box"></span>
                </a>
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
  name: 'background-colors',
  computed: {
    backgroundColors() {
      return this.$store.getters.backgroundColors;
    },
  },
  methods: {
    showSelectColorModal() {
      this.$store.dispatch('toggleSelectColorModal', true);
    },
  },
};
</script>
