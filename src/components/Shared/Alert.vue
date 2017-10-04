<template>
  <v-alert alertType dismissible @input="onClose" :value="true">
    {{ text }}
  </v-alert>
</template>

<script>
export default {
  props: ['text', 'alertType'],
  methods: {
    onClose() {
      this.$emit('dismissed');
    },
  },
};
</script>
