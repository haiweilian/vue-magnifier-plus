<template>
  <vue-magnifier-plus type="circle" :high-url="$withBase(url)">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="image" :src="$withBase('/swiper-image-1.jpg')" />
        </div>
        <div class="swiper-slide">
          <img class="image" :src="$withBase('/swiper-image-2.jpg')" />
        </div>
        <div class="swiper-slide">
          <img class="image" :src="$withBase('/swiper-image-3.jpg')" />
        </div>
      </div>
    </div>
  </vue-magnifier-plus>
</template>

<script>
import VueMagnifierPlus from '../../../src/vue-magnifier-plus.vue'

const images = [
  '/swiper-image-1.jpg',
  '/swiper-image-2.jpg',
  '/swiper-image-3.jpg',
]

export default {
  components: {
    VueMagnifierPlus: VueMagnifierPlus,
  },
  data() {
    return {
      url: images[0],
    }
  },
  mounted() {
    var that = this
    var swiper = new window.Swiper('.swiper-container', {
      autoplay: true,
      on: {
        slideChangeTransitionEnd: function () {
          that.url = images[swiper.activeIndex]
        },
      },
    })
  },
}
</script>

<style scoped>
.vue-magnifier-plus {
  width: 100%;
}

.vue-magnifier-plus >>> .selector {
  z-index: 2 !important;
}
</style>
