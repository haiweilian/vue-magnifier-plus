# Swiper

<ClientOnly>
  <demo-swiper></demo-swiper>
</ClientOnly>

```vue
<template>
  <vue-magnifier-plus type="circle" :high-url="url">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="image" src="swiper-image-1.jpg" />
        </div>
        <div class="swiper-slide">
          <img class="image" src="swiper-image-2.jpg" />
        </div>
        <div class="swiper-slide">
          <img class="image" src="swiper-image-3.jpg" />
        </div>
      </div>
    </div>
  </vue-magnifier-plus>
</template>

<script>
import VueMagnifierPlus from 'vue-magnifier-plus'

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
    var swiper = new Swiper('.swiper-container', {
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
  z-index: 2!important;
}
</style>
```