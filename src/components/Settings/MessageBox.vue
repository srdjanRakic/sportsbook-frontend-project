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
         <v-select :options="messageBox.boxPosition" label="text" v-model="selectedBoxPosition"></v-select>
      </div>
      <div class="list-group-item">
         <label>Box Template</label>
         <v-select :options="messageBox.boxEffects" label="text" v-model="selectedBoxEffects"></v-select>
      </div>
      <div class="list-group-item">
         <label>Box Template</label>
         <v-select :options="messageBox.boxTemplate" label="text" v-model="selectedBoxTemplate"></v-select>
      </div>
   </div>
</div>
</template>

<script>
export default {
  name: 'message-box',
  data() {
    return {
      selectedBoxPosition: null,
      selectedBoxEffects: null,
      selectedBoxTemplate: null,
    };
  },
  computed: {
    messageBox() {
      return this.$store.getters.messageBox;
    },
  },
  methods: {
    onUpdateMessageBox() {
      this.$store.dispatch('updateMessageBox', this.selectedMessageBoxSettings);
    },
  },
};
</script>
