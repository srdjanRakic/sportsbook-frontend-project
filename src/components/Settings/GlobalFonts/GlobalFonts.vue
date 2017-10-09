<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseGlobalFonts">
          </span>Global Fonts</a>
      </h4>
    </div>
    <div id="collapseGlobalFonts" class="panel-collapse collapse">
      <div class="list-group">
        <div class="list-group-item">
          <div class="panel-group" id="globalFontsAccordion">
            <!-- Primary Headline -->
            <primary-headline></primary-headline>
            <!-- Secondary Headline -->
            <secondary-headline></secondary-headline>
            <!-- Body Text -->
            <body-text></body-text>
            <!-- Accent Text -->
            <accent-text></accent-text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryHeadline from './PrimaryHeadline/PrimaryHeadline';
import SecondaryHeadline from './SecondaryHeadline/SecondaryHeadline';
import BodyText from './BodyText/BodyText';
import AccentText from './AccentText/AccentText';

export default {
  name: 'global-fonts',
  components: {
    PrimaryHeadline,
    SecondaryHeadline,
    BodyText,
    AccentText,
  },
};
</script>
