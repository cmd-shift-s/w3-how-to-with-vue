import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs.css'

export const md = new MarkdownIt({
  highlight (code, lang) {
    return hljs.highlight(lang, code).value
  }
})
