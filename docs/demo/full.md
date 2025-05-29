# Full

<ClientOnly>
  <demo-full></demo-full>
</ClientOnly>

```vue
<template>
  <vue-magnifier-plus
    url="/image.jpg"
    highUrl="/image-high.jpg"
    :width="selectWidth"
    :height="selectHeight"
    @update="handleUpdate"
  ></vue-magnifier-plus>
</template>

<script>
import VueMagnifierPlus from 'vue-magnifier-plus'
export default {
  components: {
    VueMagnifierPlus,
  },
  data() {
    return {
      selectWidth: 0,
      selectHeight: 0,
    }
  },
  methods: {
    handleUpdate(e) {
      this.selectWidth = e.width
      this.selectHeight = e.height
    },
  },
}
</script>
```
