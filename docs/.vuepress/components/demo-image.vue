<template>
  <vue-magnifier-plus
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
