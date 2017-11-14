<template lang="html">
  <div class="accordion" :class="[classes, {'is-active': isActive}]">
    <button @click="toggle()">{{title}}</button>
    <div class="panel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accordion',
  props: {
    title: String,
    hasIcon: Boolean,
    isAnimated: Boolean
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    classes() {
      return {
        'is-animated': this.isAnimated,
        'has-icon': this.hasIcon
      }
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive

      if (this.isAnimated) {
        const panel = this.$el.querySelector('.panel')
        panel.style.maxHeight = this.isActive ? `${panel.scrollHeight}px` : null
      }
    }
  }
}
</script>

<style lang="scss">
.accordion {
  width: 100%;

  &.is-active {
    .panel {
      display: block;
    }
  }

  &.has-icon {
    button {
      &:after {
        content: '\02795'; /* Unicode character for "plus" sign (+) */
        font-size: 13px;
        color: #777;
        float: right;
        margin-left: 5px;
      }
    }

    &.is-active {
      button:after {
        content: "\2796"; /* Unicode character for "minus" sign (-) */
      }
    }
  }

  &.is-animated {
    .panel {
      display: block;
      overflow: hidden;
      transition: max-height 0.2s linear;
      max-height: 0;
    }
  }

  /* Style the buttons that are used to open and close the accordion panel */
  button {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    margin: 0 0; // for safari

    /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
    &:active, &:hover {
      background-color: #ccc;
    }
  }

  /* Style the accordion panel. Note: hidden by default */
  div.panel {
    padding: 0 18px;
    background-color: white;
    display: none;
  }
}
</style>
