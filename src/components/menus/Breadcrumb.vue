<script>
export default {
  name: 'breadcrumb',
  functional: true,
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  render(h, ctx) {
    const lastIdx = ctx.props.links.length - 1
    const children = ctx.props.links.map((link, idx) => {
      const { to, title } =
        typeof link === 'string' ? { to: link, title: link } : link

      // current location은 title만 보여준다.
      if (idx === lastIdx) {
        return h('li', title)
      } else {
        return h('li', {}, [h('a', { attrs: { href: to } }, title)])
      }
    })

    return h('ul', { class: 'breadcrumb' }, children)
  }
}
</script>

<style lang="scss">
.breadcrumb {
  padding: 10px 16px;
  list-style: none;
  background-color: #eee;

  li {
    display: inline;
    font-size: 18px;

    & + li:before {
      padding: 8px;
      color: black;
      content: "/\00a0";
    }

    a {
      color: #0275d8;
      text-decoration: none;

      &:hover {
        color: #01447e;
        text-decoration: underline;
      }
    }
  }
}
</style>
