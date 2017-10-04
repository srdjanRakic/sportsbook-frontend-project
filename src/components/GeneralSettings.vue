<template>
  <!-- <v-expansion-panel>
    <layout-settings></layout-settings>
    <global-fonts></global-fonts>
    <global-colors></global-colors>
    <custom-styles></custom-styles>
    <message-box></message-box>
  </v-expansion-panel> -->


<div class="container-fluid" >
  <div class="row">
    <div class="col-sm-12">
        <div class="panel-group" id="accordion">
          <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                    </span>Layout Settings</a>
                </h4>
              </div>
              <div id="collapseOne" class="panel-collapse collapse in">
                 <div class="list-group">
                    <div class="list-group-item">
                      <layout-settings></layout-settings>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                    </span>Global Fonts</a>
                </h4>
              </div>
              <div id="collapseTwo" class="panel-collapse collapse">
                <div class="list-group">
                    <a href="#" class="list-group-item">
                    Cras justo odio
                    </a>
                    <div class="list-group">
                      <a href="#" class="list-group-item">Cras justo odio </a>
                      <a href="#" class="list-group-item">Dapibus ac facilisis in</a>
                      <a href="#" class="list-group-item">Morbi leo risus</a>
                      <a href="#" class="list-group-item">Porta ac consectetur ac</a>
                      <a href="#" class="list-group-item">Vestibulum at eros</a>
                    </div>
                    <a href="#" class="list-group-item">Dapibus ac facilisis in</a>
                    <a href="#" class="list-group-item">Morbi leo risus</a>
                    <a href="#" class="list-group-item">Porta ac consectetur ac</a>
                    <a href="#" class="list-group-item">Vestibulum at eros</a>
                </div>
              </div>
          </div>
          <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                    </span>Global Colors</a>
                </h4>
              </div>
              <div id="collapseThree" class="panel-collapse collapse">
                <div class="list-group">
                    <a href="#" class="list-group-item">
                      <h4 class="list-group-item-heading">List group item heading</h4>
                      <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    </a>
                </div>
                <div class="list-group">
                    <a href="#" class="list-group-item active">
                      <h4 class="list-group-item-heading">List group item heading</h4>
                      <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    </a>
                </div>
                <div class="list-group">
                    <a href="#" class="list-group-item">
                      <h4 class="list-group-item-heading">List group item heading</h4>
                      <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    </a>
                </div>
              </div>
          </div>
          <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                    </span>Custom CSS</a>
                </h4>
              </div>
              <div id="collapseFour" class="panel-collapse collapse">
                <div class="list-group">
                    <a href="#" class="list-group-item">
                      <h4 class="list-group-item-heading">List group item heading</h4>
                      <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    </a>
                </div>
                <div class="list-group">
                    <a href="#" class="list-group-item active">
                      <h4 class="list-group-item-heading">List group item heading</h4>
                      <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    </a>
                </div>
                <div class="list-group">
                    <a href="#" class="list-group-item">
                      <h4 class="list-group-item-heading">List group item heading</h4>
                      <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    </a>
                </div>
              </div>
          </div>
          <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                    </span>Message Box</a>
                </h4>
              </div>
              <div id="collapseFive" class="panel-collapse collapse">
                <message-box></message-box>
              </div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import LayoutSettings from './Settings/LayoutSettings';
import GlobalColors from './Settings/GlobalColors';
import GlobalFonts from './Settings/GlobalFonts';
import MessageBox from './Settings/MessageBox';
import CustomStyles from './Settings/CustomStyles';

export default {
  name: 'general-settings',
  components: {
    LayoutSettings,
    GlobalColors,
    GlobalFonts,
    MessageBox,
    CustomStyles,
  },
};
</script>


