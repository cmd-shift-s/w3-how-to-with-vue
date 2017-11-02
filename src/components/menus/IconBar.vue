<script>
/**
 * IconBar Component
 *
 * 함수형 컴포넌트로 작성
 */
export default {
  name: 'icon-bar',
  functional: true,
  props: {
    // is-vertical일 경우 horizontal 대신 vertical class를 적용
    isVertical: Boolean
  },
  render(h, ctx) {
    const cx = ['icon-bar']

    cx.push(ctx.props.isVertical ? 'vertical' : 'horizontal')

    const cls = cx.reduce((cls, name) => {
      cls[name] = true
      return cls
    }, {})

    return h('div', {'class': cls}, ctx.children)
  }
}
</script>

<style lang="scss">
.icon-bar {
  display: flex;

  a {
    cursor: pointer;
    text-align: center; /* Center-align text */
    color: white; /* White text color */
    font-size: 36px; /* Increased font size */

    &:hover {
      background-color: #000; /* Add a hover color */
    }
    &.active {
      background-color: #4CAF50; /* Add an active/current color */
    }
  }

  &.vertical {
    width: 90px; /* Set a specific width */
    background-color: #555; /* Dark-grey background */
    flex-direction: column;

    a {
      padding: 16px; /* Add some padding */
      transition: all 0.3s ease; /* Add transition for hover effects */
    }
  }

  &.horizontal {
    width: 100%; /* Full-width */
    background-color: #555; /* Dark-grey background */
    overflow: auto; /* Overflow due to float */

    a {
      flex: 1;
      padding: 12px 0; /* Some top and bottom padding */
      transition: all 0.3s ease; /* Add transition for hover effects */
    }
  }
}
</style>
