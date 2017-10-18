<template>
  <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" @click="closeModal">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">Modal title</h4>
              </div>
              <div class="modal-body">
                <color-picker v-model="chosenColor"></color-picker>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['color', 'colorTitle'],
  computed: {
    showModal() {
      return this.$store.getters.showSelectColorModal;
    },
    chosenColor: {
      get() {
        return this.color;
      },
      set(val) {
        const colorPicked = {
          title: this.colorTitle,
          chosenColor: val.hex,
        };

        this.$emit('onColorChosen', colorPicked);
      },
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch('toggleSelectColorModal', false);
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>

