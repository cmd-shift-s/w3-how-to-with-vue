<template lang="html">
  <page title="W3 How To">
    <card link="images/slideshow">
      <slideshow></slideshow>
    </card>
    <div class="card-container">
      <div class="half">
        <template v-for="route of routes1">
          <card v-for="page of route.children" :link="`${route.path}/${page.path}`" :key="page.path" :page="page.component" is-lazy></card>
        </template>
      </div>
      <div class="half">
        <template v-for="route of routes2">
          <card v-for="page of route.children" :link="`${route.path}/${page.path}`" :key="page.path" :page="page.component" is-lazy></card>
        </template>
      </div>
    </div>
  </page>
</template>

<script>
import Card from '../layout/Card.vue'
import { routes } from '@/router'
const Slideshow = () => import(/* webpackChunkName: "pages/images/Slideshow" */ '@/pages/images/Slideshow.vue')

export default {
  name: 'home',
  data() {
    return {
      routes1: [],
      routes2: []
    }
  },
  created() {
    const _routes = routes.slice(2) // remove home and examples
    _routes.forEach(route => {
      const children1 = []
      const children2 = []

      route.children
        .filter(page => {
          console.log(page)
          return !['Slideshow'].includes(page.component.name)
        })
        .forEach((page, index) => {
          if (index % 2 === 0) {
            children1.push(page)
          } else {
            children2.push(page)
          }
        })

      this.routes1.push(Object.assign({}, route, { children: children1 }))
      this.routes2.push(Object.assign({}, route, { children: children2 }))
    })
  },
  components: {
    Card,
    Slideshow
  }
}
</script>

<style lang="scss">
.card-container {
  width: 100%;
  display: flex;
  flex-direction: row;

  .half {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;

    .half {
      width: 100%;
    }
  }
}
</style>
