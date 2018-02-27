<template lang="html">
  <div class="bottom-modal-example">
    <h2>Bottom Modal</h2>
    <button class="btn-modal" @click="modal.isActive = true">Open Modal</button>
    <modal-box :is-active.sync="modal.isActive" is-closable>
      <div class="modal-header">
        <span class="close" @click="modal.isActive = false">&times;</span>
        <h2>Modal Header</h2>
      </div>
      <div class="modal-body">
        <p>Some text in the Modal Body</p>
        <p>Some other text...</p>
      </div>
      <div class="modal-footer">
        <h3>Modal Footer</h3>
      </div>
    </modal-box>
  </div>
</template>

<script>
import ModalBox from '@/components/more/ModalBox.vue'

export default {
  name: 'bottom-modal-example',
  data: () => ({
    modal: {
      isActive: false
    }
  }),
  components: {
    ModalBox
  }
}
</script>

<style lang="scss">
.bottom-modal-example {
  .modal-box {
    .modal-content {
      width: 100%;
      position: fixed;
      bottom: 0;
      border: none;
      animation-name: slideIn;
      animation-duration: 0.4s;
    }
  }

  /* Add Animation */
  @keyframes slideIn {
      from {bottom: -100%; opacity: 0}
      to {bottom: 0; opacity: 1}
  }
}
</style>
