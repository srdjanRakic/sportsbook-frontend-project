 <template>
    <v-toolbar dark>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon>
      <span class="title">Google <span class="text">Keep</span></span> -->
       <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <h5>SportsBook</h5>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}

        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
 </template>

<script>
export default {
  name: 'navbar',
  data: () => ({
    menuItems: [
      { icon: 'check_circle', title: 'Save' },
      { icon: 'file_download', title: 'Download HTML' },
      { icon: 'arrow_back', title: 'Back To Admin' },
    ],
  }),
};
</script>

