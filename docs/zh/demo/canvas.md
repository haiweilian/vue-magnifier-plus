# Canvas

<ClientOnly>
  <demo-canvas></demo-canvas>
</ClientOnly>

```vue
<template>
  <vue-magnifier-plus>
    <canvas-preview
      url="/image.jpg"
      :width="720"
      :height="360"
      :rotate="rotate"
    ></canvas-preview>
    <template #zoomer>
      <canvas-zoomer
        url="/image-high.jpg"
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
} from 'vue-magnifier-plus'

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
```