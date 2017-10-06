<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#globalColorsAccordion" href="#collapseTableColors">
          </span>Table Colors</a>
      </h4>
    </div>
    <div id="collapseTableColors" class="panel-collapse collapse">
      <div class="list-group">
        <div class="list-group-item">
          <div class="row">
            <div class="container-fluid">
              <div class="col-md-3" v-for="(item, i) in tableColorSettings" :key="i">
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
  name: 'table-colors',
  data: () => ({
    showModal: false,
    colors: {
      hex: '#194d33',
    },
    tableColorSettings: [
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
};
</script>
