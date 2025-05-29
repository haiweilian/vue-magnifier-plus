<template>
  <vue-magnifier-plus>
    <canvas-preview
      :url="$withBase('/image.jpg')"
      :width="720"
      :height="360"
      :rotate="rotate"
    ></canvas-preview>
    <template #zoomer>
      <canvas-zoomer
        :url="$withBase('/image-high.jpg')"
        :width="720"
        :height="360"
        :rotate="rotate"
      ></canvas-zoomer>
    </template>
    <div class="rotate-icon" @click="handleRotate">🔄</div>
  </vue-magnifier-plus>
</template>

<script>
import VueMagnifierPlus, {
  CanvasPreview,
  CanvasZoomer,
} from '../../../src/vue-magnifier-plus.vue'

export default {
  components: {
    VueMagnifierPlus,
    CanvasPreview: CanvasPreview,
    CanvasZoomer: CanvasZoomer,
  },
  data: function () {
    return {
      rotate: 0,
    }
  },
  methods: {
    handleRotate() {
      this.rotate += 90
    },
  },
}
</script>

<style scoped>
.rotate-icon {
  display: inline-block;
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 999;
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
  cursor: pointer;
}
</style>
