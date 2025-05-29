<template>
  <vue-magnifier-plus
    :url="$withBase('/image.jpg')"
    :highUrl="$withBase('/image-high.jpg')"
    :width="selectWidth"
    :height="selectHeight"
    @update="handleUpdate"
  ></vue-magnifier-plus>
</template>

<script>
import VueMagnifierPlus from '../../../src/vue-magnifier-plus.vue'
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

<style scoped>
</style>
