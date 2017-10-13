<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseLayoutSettings">
          </span>Layout Settings</a>
      </h4>
    </div>
    <div id="collapseLayoutSettings" class="panel-collapse collapse in">
      <div class="list-group">
        <div class="list-group-item">
          <div class="row">
            <div class="list-group-item">
              <label>Layout Name:</label>
              <div class="input-group col-md-12">
                <input type="text" class="form-control" placeholder="Layout Name" v-model.lazy="layout">
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
  name: 'layout-settings',
  computed: {
    layout: {
      // getter
      get() {
        return this.$store.getters.layoutName;
      },
      // setter
      set(newValue) {
        // eslint-disable-next-line
        console.log(newValue);
        this.$store.dispatch('updateLayoutName', newValue);
      },
    },
  },
};
</script>
