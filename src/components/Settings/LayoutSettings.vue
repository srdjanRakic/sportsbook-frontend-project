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
                <input type="text" class="form-control" placeholder="Layout Name">
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
  data() {
    return {
      layoutName: '',
    };
  },
  computed: {
    layoutSettings() {
      return this.$store.getters.layoutSettings;
    },
  },
  methods: {
    onSaveLayoutName() {
      this.$store.dispatch('updateGlobalFonts', this.layoutName);
    },
  },
};
</script>
