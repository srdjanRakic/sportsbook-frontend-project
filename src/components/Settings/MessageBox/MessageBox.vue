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
        <select class="form-control" v-model="selectedBoxPosition">
         <option
           v-for="(option, index) in boxPosition" :key="index"
           :value="option">
           {{ option.value }}
          </option>
        </select>
      </div>
      <div class="list-group-item">
        <label>Box Template</label>
        <select class="form-control" v-model="selectedBoxEffect">
         <option
           v-for="(option, index) in boxEffects" :key="index"
           v-bind:value="option">
            {{ option.value }}
          </option>
        </select>
      </div>
      <div class="list-group-item">
        <label>Box Effects</label>
        <select class="form-control" v-model="selectedBoxTemplate">
         <option
           v-for="(option, index) in boxTemplate" :key="index"
           v-bind:value="option">
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
  computed: {
    boxPosition() {
      return this.$store.getters.boxPosition;
    },
    boxTemplate() {
      return this.$store.getters.boxTemplate;
    },
    boxEffects() {
      return this.$store.getters.boxEffects;
    },
    selectedBoxPosition: {
      get() {
        return this.boxPosition.find(x => x.selected === true);
      },
      set(val) {
        this.$store.dispatch('updateBoxPosition', val);
      },
    },
    selectedBoxEffect: {
      get() {
        return this.boxEffects.find(x => x.selected === true);
      },
      set(val) {
        this.$store.dispatch('updateBoxPosition', val);
      },
    },
    selectedBoxTemplate: {
      get() {
        return this.boxTemplate.find(x => x.selected === true);
      },
      set(val) {
        this.$store.dispatch('updateBoxPosition', val);
      },
    },
  },
};
</script>
