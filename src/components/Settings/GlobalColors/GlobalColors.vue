<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseGlobalColors">
          </span>Global Colors</a>
      </h4>
    </div>
    <div id="collapseGlobalColors" class="panel-collapse collapse">
      <div class="list-group">
        <div class="list-group-item">
          <div class="panel-group" id="globalColorsAccordion">
            <background-colors></background-colors>
            <button-colors></button-colors>
            <table-colors></table-colors>
            <link-colors></link-colors>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundColors from './BackgroundColors/BackgroundColors';
import ButtonColors from './ButtonColors/ButtonColors';
import TableColors from './TableColors/TableColors';
import LinkColors from './LinkColors/LinkColors';

export default {
  name: 'global-colors',
  components: {
    BackgroundColors,
    ButtonColors,
    TableColors,
    LinkColors,
  },
};
</script>
