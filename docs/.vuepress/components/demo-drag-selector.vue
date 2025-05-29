<template>
  <vue-magnifier-plus
    style="width: 740px; height: 416px;"
    mode="drag"
    :mask="true"
    :url="$withBase('/image.jpg')"
    :highUrl="$withBase('/image-high.jpg')"
  ></vue-magnifier-plus>
</template>

<script>
import VueMagnifierPlus from '../../../src/vue-magnifier-plus.vue'
export default {
  components: {
    VueMagnifierPlus,
  },
}
</script>

<style scoped>
</style>
