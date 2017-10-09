<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#globalFontsAccordion" href="#collapseSecondaryHeadline">
          </span>Secondary Headline</a>
      </h4>
    </div>
    <div id="collapseSecondaryHeadline" class="panel-collapse collapse">
      <div class="list-group">
        <div class="list-group-item">
          <label>Font-family</label>
          <v-select :options="globalFonts.secondaryHeadline.fontFamily" label="text"></v-select>
          <label>Font-family</label>
          <v-select :options="globalFonts.secondaryHeadline.fontWeight" label="text"></v-select>
          <label>Font-size</label>
          <v-select :options="globalFonts.secondaryHeadline.fontSize" label="text"></v-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'secondary-headline',
};
</script>
