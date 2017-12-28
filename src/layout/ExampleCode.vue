<template lang="html">
  <div class="example-code">
    <h3>{{title}}</h3>
    <div v-if="code" class="code" v-html="compiledCode"></div>
    <div v-else class="sample">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'example',
  props: {
    title: {
      type: String,
      default: 'Example'
    },
    code: {
      type: [String, Array]
    }
  },
  computed: {
    compiledCode() {
      if (!this.code) return ''
      const code = Array.isArray(this.code) ? this.code.join('\n') : this.code
      return this.compileMarked(code)
    }
  },
  methods: {
    compileMarked(code) {
      return marked(code, { sanitize: true })
    }
  }
}
</script>

<style lang="scss">
.example-code {
  background-color: #f1f1f1;
  margin: 20px 0;
  padding: 0.01em 16px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

  .code {
    word-wrap: break-word;
    padding: 8px 12px;
    margin: 16px 0;
    background-color: white;
    border-left: 4px solid #4CAF50;

    pre {
      margin: 0;

      & > * {
        white-space: pre-wrap;
      }
    }
  }

  .sample {
    padding: 8px 12px;
    margin: 16px 0;
    background-color: white;
    width: inherit;
  }
}
</style>
