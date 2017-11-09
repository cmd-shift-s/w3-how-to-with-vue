<template lang="html">
  <page
    title="Tabs"
    intro="tabs with CSS and JavaScript">
    <sample>
      <tabs
        is-animated
        :links="['London', 'Paris', 'Tokyo']">
        <div id="London" class="tab-content">
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </div>
        <div id="Paris" class="tab-content">
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
        </div>
        <div id="Tokyo" class="tab-content">
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </div>
      </tabs>
    </sample>
  </page>
</template>

<script>
import Tabs from '@/components/menus/Tabs.vue'

export default {
  name: 'tabs-page',
  components: {
    Tabs
  }
}
</script>

<style lang="scss">
</style>
