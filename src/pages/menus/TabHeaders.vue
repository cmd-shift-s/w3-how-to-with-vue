<template lang="html">
  <page
    title="Tab Headers"
    intro="tabs with CSS and JavaScript"
    class="tab-headers">
    <sample>
      <tabs
        position="bottom"
        is-expanded
        :links="['London', 'Paris', 'Tokyo', 'Oslo']">
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
        <div id="Oslo" class="tab-content">
          <h3>Oslo</h3>
          <p>Oslo is the capital of Norway.</p>
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
.tab-headers {
  .tabs-links {
    .is-active {
      &.tab-link { color: white; }
      &.tab-link:nth-child(1) { background-color: red; }
      &.tab-link:nth-child(2) { background-color: green; }
      &.tab-link:nth-child(3) { background-color: blue; }
      &.tab-link:nth-child(4) { background-color: orange; }
    }
  }
  .tabs-contents {
    /* Style each tab content individually */
    #London {background-color: red;}
    #Paris {background-color: green;}
    #Tokyo {background-color: blue;}
    #Oslo {background-color: orange;}

    .tab-content {
      text-align: center;
      padding: 30px;
      color: white;
    }
  }
}
</style>
