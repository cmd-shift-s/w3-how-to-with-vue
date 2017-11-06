<template lang="html">
  <div class="example">
    <hr v-show="!hideHr">
    <h2 v-text="title"></h2>
    <div v-html="compiledSubtitle"></div>
    <h5 v-text="step"></h5>

    <div class="contents">
      <h3>{{name}}</h3>
      <div class="code" v-html="compiledCode"></div>
    </div>

    <div class="explained" v-if="explained">
      <h3>Example Explained</h3>
      <div class="comment" v-html="compiledExplained"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'example',
  props: {
    title: String,
    subtitle: String,
    step: String,
    hideHr: Boolean,
    explained: String,
    name: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  },
  computed: {
    compiledCode() {
      return this.compileMarked(this.code)
    },
    compiledExplained() {
      return this.explained
        ? this.compileMarked(this.explained)
        : ''
    },
    compiledSubtitle() {
      return this.subtitle
        ? this.compileMarked(this.subtitle)
        : ''
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
.example {
  .contents {
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
  }
  .explained {
    code {
      color: crimson;
      background-color: #f1f1f1;
      padding: 0 4px;
      font-size: 110%;
    }
  }
}
</style>
