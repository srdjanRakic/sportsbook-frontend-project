<template>
   <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
         <!-- <v-flex xs4>
            <v-card primary class="dark ma-4">
               <div class="parent">
                  <div class="wrapper">
                     <div class="container"  v-dragula="copyOne" drake="third"></div>
                  </div>
               </div>
            </v-card>
         </v-flex>
         <v-flex xs4>
            <v-card primary class="dark ma-4">
               <div class="parent">
                <div class="wrapper">
                  <div class="container"  v-dragula="copyOne" drake="third"></div>
                </div>
              </div>
            </v-card>
         </v-flex>
         <v-flex xs4>
            <v-card primary class="dark ma-4">
               <div class="parent">
                  <div class="wrapper">
                    <div class="container"  v-dragula="copyOne" drake="third"></div>
                  </div>
              </div>
            </v-card>
         </v-flex>
         <v-flex xs6>
            <v-card primary class="dark ma-4">
               <div class="parent">
                  <div class="wrapper">
                     <div class="container"  v-dragula="copyOne" drake="third"></div>
                  </div>
               </div>
            </v-card>
         </v-flex>
         <v-flex xs6>
            <v-card primary class="dark ma-4">
               <div class="parent">
                  <div class="wrapper">
                     <div class="container"  v-dragula="copyOne" drake="third"></div>
                  </div>
               </div>
            </v-card>
         </v-flex> -->
<!--
          <draggable v-model="dropZones">
        <v-flex xs6 v-for="i in 6" :key="i">
          <transition-group>
            <div primary class="dark ma-4">
            </div>
          </transition-group>
        </v-flex>
        </draggable>

        <v-flex xs6 v-for="n in 10" :key="n">
         <draggable v-model="dropZones">
          <transition-group>
           <v-card class="mb-2 mr-2">
            <div primary class="dark ma-4">

            </div>
            </v-card>
          </transition-group>
        </draggable>
      </v-flex> -->

      <draggable v-model="dropZones" class="dragArea normal">
        <v-flex xs6 class="dark ma-4">
          <v-card primary class="dark ma-4">
            <transition-group >

            </transition-group>
          </v-card>
        </v-flex>
      </draggable>

      </v-layout>
   </v-container>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'preview',
  components: {
    draggable,
  },
  data: () => ({
    dropZones: [],
  }),
};
</script>

<style scoped>
.normal {
  background-color: grey;
}

.drag {
  background-color: green;
}

.dragArea {
  min-height: 10px;
}
</style>

