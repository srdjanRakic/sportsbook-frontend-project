<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
          </span>Custom CSS</a>
      </h4>
    </div>
    <div id="collapseFour" class="panel-collapse collapse">
      <div class="list-group">
        <div class="list-group-item">
          <div class="form-group">
            <label for="customCss">Enter your custom CSS:</label>
            <textarea class="form-control" rows="5" v-model.lazy="customCSS"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-styles',
  computed: {
    customCSS: {
      // getter
      get() {
        return this.$store.getters.customCSS;
      },
      // setter
      set(newValue) {
        this.$store.dispatch('updateCustomCSS', newValue);
      },
    },
  },
};
</script>

<style scoped>
textarea {
   resize: none;
}
</style>
