<template>
  <vue-photo-zoom-pro style="width: 100%; font-size: inherit;">
    <element-preview el=".vp-sidebar-items"></element-preview>
    <template #zoomer>
      <element-zoomer el=".vp-sidebar-items"></element-zoomer>
    </template>
  </vue-photo-zoom-pro>
</template>

<script>
import VuePhotoZoomPro, {
  ElementPreview,
  ElementZoomer,
} from '../../../src/vue-photo-zoom-pro.vue'

export default {
  components: {
    VuePhotoZoomPro,
    ElementPreview: ElementPreview,
    ElementZoomer: ElementZoomer,
  }
}
</script>

<style scoped>
.vue-photo-zoom-pro >>> .vp-sidebar-items {
  background-color: #fff;
}
</style>
