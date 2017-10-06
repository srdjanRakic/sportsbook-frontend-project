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
            <textarea class="form-control" rows="5" id="customCss"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-styles',
};
</script>

<style>
textarea {
   resize: none;
}
</style>
