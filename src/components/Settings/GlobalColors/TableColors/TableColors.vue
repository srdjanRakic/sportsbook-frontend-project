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
                <div class="col-md-3">
                <v-color-picker v-if="showOddColorsPrimaryPicker" v-model="colors" @change-color="onChange"></v-color-picker>
                <div style="clear: both;">Primary</div>
                <a @click="showOddColorsPrimaryPicker = !showOddColorsPrimaryPicker">
                    <span :style="{background: colors.hex}" style="padding: 15px;  text-align: center; margin-top: 20px; display: inline-block;"></span>
                </a>
              </div>
              <div class="col-md-3">
                <v-color-picker v-if="showOddColorsSecondaryPicker" v-model="colors" @change-color="onChange"></v-color-picker>
                <div style="clear: both;">Second</div>
                <a @click="showOddColorsSecondaryPicker = !showOddColorsSecondaryPicker">
                    <span :style="{background: colors.hex}" style="padding: 15px;  text-align: center; margin-top: 20px; display: inline-block;"></span>
                </a>
              </div>
              <div class="col-md-3">
                <v-color-picker v-if="showOddColorsTextPicker" v-model="colors" @change-color="onChange"></v-color-picker>
                <div>Text</div>
                <a @click="showOddColorsTextPicker = !showOddColorsTextPicker">
                    <span :style="{background: colors.hex}" style="padding: 15px;  text-align: center; margin-top: 20px; display: inline-block;"></span>
                </a>
              </div>
              <div class="col-md-3">
                <v-color-picker v-if="showOddColorsAccentPicker" v-model="colors" @change-color="onChange"></v-color-picker>
                <div style="clear: both;">Accent</div>
                <a @click="showOddColorsAccentPicker = !showOddColorsAccentPicker">
                    <span :style="{background: colors.hex}" style="padding: 15px;  text-align: center; margin-top: 20px; display: inline-block;"></span>
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
