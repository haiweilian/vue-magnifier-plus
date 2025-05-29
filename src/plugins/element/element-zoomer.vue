<template>
  <div
    ref="element"
    class="element-zoomer"
    style="display: block; width: 100%; height: 100%"
    v-bind="$attrs"
  />
</template>

<script>
import { cloneHtmlContent } from '../../util/index.js'

export default {
  name: 'ElementZoomer',
  props: {
    el: {
      type: String,
      default: 'body'
    },
    exclude: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    const html = cloneHtmlContent(this.el, this.exclude)
    const element = this.$refs.element
    element.html = ''
    element.appendChild(html)
  }
}
</script>
