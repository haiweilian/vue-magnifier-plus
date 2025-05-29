# Custom

<ClientOnly>
  <demo-custom></demo-custom>
</ClientOnly>

```vue
<template>
  <vue-magnifier-plus type="circle" :scale="scale">
    <div class="star-sky">
      <div class="landscape"></div>
      <div class="filter"></div>
      <canvas id="canvas1"></canvas>
    </div>
    <template #zoomer>
      <div class="star-sky">
        <div class="landscape"></div>
        <div class="filter"></div>
        <canvas id="canvas2"></canvas>
      </div>
    </template>
  </vue-magnifier-plus>
</template>

<script>
import VueMagnifierPlus from 'vue-magnifier-plus'
export default {
  components: {
    VueMagnifierPlus,
  },
}
</script>
```