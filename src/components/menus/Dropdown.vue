<template>
  <div class="dropdown">
    <button>
      {{title}}
      <i v-if="icon" class="fa" :class="icon"></i>
    </button>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: {
    title: {
      type: String,
      required: true
    },
    icon: String
  }
}
</script>

<style lang="scss">
.dropdown {
  position: relative;
  display: inline-block;

  button {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

    a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;

      &:hover {
        background-color: #f1f1f1;
      }
    }
  }

  &:hover {
    button {
      background-color: #3e8e41;
    }
    .content {
      display: block;
    }
  }
}
</style>
