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
              <div class="col-md-3" v-for="(item, i) in linkColorSettings" :key="i">
                <div style="clear: both;">{{item.title}}</div>
                <a @click="showModal = true">
                  <span :style="{background: item.chosenColor}" class="color-box"></span>
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
  name: 'link-colors',
  data: () => ({
    showModal: false,
    colors: {
      hex: '#194d33',
    },
    linkColorSettings: [
      { title: 'Primary', chosenColor: '' },
      { title: 'Second', chosenColor: '' },
      { title: 'Text', chosenColor: '' },
      { title: 'Accent', chosenColor: '' },
    ],
  }),
  computed: {
    globalColors() {
      return this.$store.getters.globalColors;
    },
  },
  methods: {
    // onChange method called when the event 'change-color' is emitted
    onChange(val) {
      this.colors = val;
    },
  },
};
</script>
