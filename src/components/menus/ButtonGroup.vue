<script>
export default {
  name: 'button-group',
  functional: true,
  props: {
    isFullwidth: Boolean
  },
  render(h, ctx) {
    return h(
      'div',
      { class: ['button-group', { 'is-fullwidth': ctx.props.isFullwidth }] },
      ctx.children
    )
  }
}
</script>

<style lang="scss">
.button-group {
  display: flex;

  &.is-fullwidth {
    width: 100%;
  }

  button {
    background-color: #4CAF50; /* Green background */
    border: 1px solid green; /* Green border */
    color: white; /* White text */
    padding: 10px 24px; /* Some padding */
    cursor: pointer; /* Pointer/hand icon */
    flex: 1;

    &:hover {
      /* Add a background color on hover */
      background-color: #3e8e41;
    }

    &:not(:last-child) {
      /* Prevent double borders */
      border-right: none;
    }
  }
}
</style>
