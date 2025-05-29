# Element

<ClientOnly>
  <demo-element></demo-element>
</ClientOnly>

```vue
<template>
  <vue-magnifier-plus style="width: 100%; font-size: inherit;">
    <element-preview el=".vp-sidebar-items"></element-preview>
    <template #zoomer>
      <element-zoomer el=".vp-sidebar-items"></element-zoomer>
    </template>
  </vue-magnifier-plus>
</template>

<script>
import VueMagnifierPlus, {
  ElementPreview,
  ElementZoomer,
} from 'vue-magnifier-plus'

export default {
  components: {
    VueMagnifierPlus,
    ElementPreview: ElementPreview,
    ElementZoomer: ElementZoomer,
  }
}
</script>
```
