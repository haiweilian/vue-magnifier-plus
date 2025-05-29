<template>
  <vue-photo-zoom-pro
    style="width: 740px; height: 416px;"
    mode="drag"
    :mask="true"
    :url="$withBase('/image.jpg')"
    :highUrl="$withBase('/image-high.jpg')"
  ></vue-photo-zoom-pro>
</template>

<script>
import VuePhotoZoomPro from '../../../src/vue-photo-zoom-pro.vue'
export default {
  components: {
    VuePhotoZoomPro,
  },
}
</script>

<style scoped>
</style>
