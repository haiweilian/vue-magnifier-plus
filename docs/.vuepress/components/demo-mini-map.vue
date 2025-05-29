<template>
  <vue-magnifier-plus
    ref="VueMagnifierPlus"
    style="width: 100%"
    :url="$withBase('/image.jpg')"
    :highUrl="$withBase('/image-high.jpg')"
    :width="selectWidth"
    :height="selectHeight"
    :disabledEvent="true"
    @update="handleUpdate"
  >
    <div
      class="mini-map"
      ref="mini-map"
      :style="miniMapStyle"
      @mouseenter="handleMouseEnter"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <img :src="$withBase('/image.jpg')" @load="update" />
    </div>
  </vue-magnifier-plus>
</template>

<script>
import VueMagnifierPlus from '../../../src/vue-magnifier-plus.vue'

const getScrollInfo = () => {
  const { documentElement, body } = document
  const scrollTop =
    documentElement.scrollTop || window.pageYOffset || body.scrollTop
  const scrollLeft =
    documentElement.scrollLeft || window.pageXOffset || body.scrollLeft
  return {
    scrollTop,
    scrollLeft,
  }
}

export default {
  components: {
    VueMagnifierPlus,
  },
  data() {
    return {
      selectWidth: 0,
      selectHeight: 0,
      miniMapScale: 4,
    }
  },
  computed: {
    miniMapStyle() {
      return {
        width: this.selectWidth / this.miniMapScale + 'px',
        height: this.selectHeight / this.miniMapScale + 'px',
      }
    },
  },
  mounted() {
    this.$VueMagnifierPlus = this.$refs['VueMagnifierPlus']
  },
  methods: {
    handleUpdate(e) {
      this.selectWidth = e.width
      this.selectHeight = e.height
    },
    handleMouseEnter() {
      this.$VueMagnifierPlus.mouseEnter()
    },
    handleMouseMove(e) {
      const { left: mapLeft, top: mapTop } =
        this.$refs['mini-map'].getBoundingClientRect()
      const { scrollLeft, scrollTop } = getScrollInfo()
      const { pageX, pageY } = e
      const { miniMapScale } = this
      this.$VueMagnifierPlus.mouseMove(
        (pageX - mapLeft - scrollLeft) * miniMapScale,
        (pageY - mapTop - scrollTop) * miniMapScale
      )
    },
    handleMouseLeave() {
      this.$VueMagnifierPlus.mouseLeave()
    },
    update() {
      this.$VueMagnifierPlus.update()
    },
  },
}
</script>

<style scoped>
.mini-map {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
}
</style>
