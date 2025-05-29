# 指南

## 安装

### npm

```js
npm install vue-magnifier-plus

# or
yarn add vue-magnifier-plus
```

```js
import VueMagnifierPlus from 'vue-magnifier-plus'
import 'vue-magnifier-plus/dist/style/vue-magnifier-plus.css'

export default {
  components: {
    VueMagnifierPlus,
  },
}
```

### cdn

```html
<script src="https://cdn.jsdelivr.net/npm/vue-magnifier-plus/dist/vue-magnifier-plus.global.js"></script>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/npm/vue-magnifier-plus/dist/style/vue-magnifier-plus.css"
/>
```

```js
new Vue({
  el: '#app',
  components: {
    VueMagnifierPlus: VueMagnifierPlus.default
  }
}
```

## 使用

### 图片

```html
<vue-magnifier-plus :url="imgUrl" :high-url="imgHighUrl"></vue-magnifier-plus>
```

### 自定义图片

```html
<vue-magnifier-plus :high-url="imgHighUrl">
  <img :src="imgUrl" style="height:200px" />
</vue-magnifier-plus>
```

> Tips: 如果图片在开始没有加载完毕并且设置`disabled-reactive`为 true 的话，组件拿到的默认高度是 0，这时候需要在创建组件前加载图片或者给图片默认的高度。

```html
<vue-magnifier-plus v-if="loaded" :high-url="imgHighUrl" disabled-reactive>
  <img :src="imgUrl" style="height:200px" />
</vue-magnifier-plus>
```

```js
export deafult{
  data(){
    return {
      loaded: false,
      imgUrl: ''
    }
  },
  created(){
    const img = new Image()
    img.src = imgUrl
    img.addEventListener('load', ()=>{
      this.loaded = true
    })
  }
}
```

### 自定义预览区域

使用其它元素来作为放大区域。

```html
<vue-magnifier-plus :high-url="imgHighUrl">
  <div style="width:100px; height: 200px"></div>
</vue-magnifier-plus>
```

### 自定义缩放区域

```html
<vue-magnifier-plus>
  <template #zoomer>
    <!-- Is the same as the canvas-1 -->
    <canvas id="canvas-2" width="100" height="100"></canvas>
  </template>
  <canvas id="canvas-1" width="100" height="100"></canvas>
</vue-magnifier-plus>
```

```js
const canvas1 = document.querySelector('#canvas-1')
const canvas2 = document.querySelector('#canvas-2')
const ctx1 = canvas1.getContext('2d')
const ctx2 = canvas2.getContext('2d')

const offscreenCanvas = document.createElement('canvas')
const ctx = offscreenCanvas.getContext('2d')
offscreenCanvas.width = 100
offscreenCanvas.height = 100

ctx.font = '30px Arial'
ctx.fillText('Hello World', 10, 50)

ctx1.drawImage(offscreenCanvas, 0, 0)
ctx2.drawImage(offscreenCanvas, 0, 0)
```
