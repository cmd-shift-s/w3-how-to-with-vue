<template lang="html">
  <page
    title="Accordion"
    intro="an accordion (collapsible content)">
    <sample class="accordion-page">
      <accordion title="Section 1" has-icon is-animated>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </accordion>
      <accordion title="Section 2" has-icon is-animated>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </accordion>
      <accordion title="Section 3" has-icon is-animated>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </accordion>
    </sample>
  </page>
</template>

<script>
import Accordion from '@/components/menus/Accordion.vue'

export default {
  name: 'accordion-page',
  components: {
    Accordion
  }
}
</script>

<style lang="scss">
.accordion-page {
  flex-direction: column;
}
</style>
