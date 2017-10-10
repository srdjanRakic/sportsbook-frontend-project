<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseMessageBox">
          </span>Message Box</a>
      </h4>
    </div>
    <div id="collapseMessageBox" class="panel-collapse collapse">
      <div class="list-group-item">
        <label>Box Template</label>
        <select class="form-control" @change="onSelectedBoxPosition">
         <option
           v-for="(option, index) in boxPosition" :key="index"
           :value="option.value"
           :selected="option.selected">
           {{ option.value }}
          </option>
        </select>
      </div>
      <div class="list-group-item">
        <label>Box Effects</label>
        <select class="form-control" @change="onSelectedBoxTemplate">
         <option
           v-for="(option, index) in boxTemplate" :key="index"
           v-bind:value="option.value"
           :selected="option.selected">
            {{ option.value }}
          </option>
        </select>
      </div>
      <div class="list-group-item">
        <label>Box Template</label>
        <select class="form-control" @change="onSelectedBoxEffect">
         <option
           v-for="(option, index) in boxEffects" :key="index"
           v-bind:value="option.value"
           :selected="option.selected">
            {{ option.value }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message-box',
  data: () => ({
    selectedBoxPosition: '',
    selectedBoxEffect: '',
    selectedBoxTemplate: '',
  }),
  computed: {
    boxPosition: {
      get() {
        return this.$store.getters.messageBox.boxPosition;
      },
      set(val) {
        // eslint-disable-next-line
        console.log(val);
      },
    },
    boxTemplate() {
      return this.$store.getters.messageBox.boxTemplate;
    },
    boxEffects() {
      return this.$store.getters.messageBox.boxEffects;
    },
  },
  methods: {
    onSelectedBoxPosition(e) {
      // eslint-disable-next-line
      console.log(e.target.value);
    },
    onSelectedBoxEffect(e) {
      // eslint-disable-next-line
      console.log(e.target.value);
    },
    onSelectedBoxTemplate(e) {
      // eslint-disable-next-line
      console.log(e.target.value);
    },
    // onUpdateMessageBox(attribute, event) {
    //   // eslint-disable-next-line
    //   console.log(event);
    //   // eslint-disable-next-line
    //   console.log(`Attribute name: ${attribute}, event: ${event}`);

    //   const messageBoxSetting = {
    //     [attribute]: event,
    //   };
    //   // eslint-disable-next-line
    //   console.log(messageBoxSetting);

    //   // eslint-disable-next-line
    //   //this.$store.dispatch('updateMessageBox', messageBoxSetting);
    // },
  },
  // watch: {
  //   selectedMessgeBoxSettings: {
  //     handler(val, oldVal) {
  //       // eslint-disable-next-line
  //       console.log('new: %s, old: %s', val, oldVal);
  //        // eslint-disable-next-line
  //       console.log(this.selectedMessgeBoxSettings);
  //     },
  //     deep: true,
  //   },
  // },
};
</script>
