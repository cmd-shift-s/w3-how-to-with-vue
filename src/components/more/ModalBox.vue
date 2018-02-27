<template lang="html">
  <div class="modal-box" :class="{'is-active': isActive}" @click.self="closeDim()">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-box',
  props: {
    isClosable: Boolean,
    isActive: Boolean
  },
  methods: {
    close() {
      this.$emit('close')
      this.$emit('update:isActive', false)
    },
    closeDim() {
      if (this.isClosable) this.close()
    }
  }
}
</script>

<style lang="scss">
.modal-box {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 90; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  animation-name: fadeIn;
  animation-duration: 0.4s;


  &.is-active {
    display: block;
  }

  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);

    /* Modal Header */
    .modal-header {
      padding: 2px 16px;
      background-color: #5cb85c;
      color: white;
    }

    /* Modal Body */
    .modal-body {padding: 2px 16px;}

    /* Modal Footer */
    .modal-footer {
      padding: 2px 16px;
      background-color: #5cb85c;
      color: white;
    }

    .close {
      color: white;
      float: right;
      font-size: 28px;
      font-weight: bold;

      &:hover, &:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }

  /* Add Animation */
  @keyframes fadeIn {
      from {opacity: 0}
      to {opacity: 1}
  }
}
</style>
