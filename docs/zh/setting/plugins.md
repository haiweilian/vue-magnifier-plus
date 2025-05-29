# 插件

## ImgPlugin

使用 img 预览图片以及缩放图片。

```js
import { ImgZoomer, ImgPreview } from 'vue-magnifier-plus'

export default {
  components: {
    ImgPreview,
    ImgZoomer,
  },
}
```

或者使用 cdn

```js
new Vue({
  el: '#app',
  components: {
    ImgPreview: VueMagnifierPlus.ImgPreview,
    ImgZoomer: VueMagnifierPlus.ImgZoomer,
  },
})
```

```html
<template>
  <vue-magnifier-plus>
    <img-preview :url="imgUrl"></img-preview>
    <template #zoomer>
      <img-zoomer :url="imgHighUrl"></img-zoomer>
    </template>
  </vue-magnifier-plus>
  <!-- 
    和 <vue-magnifier-plus :url="imgUrl" :high-url="imgHighUrl"> 的效果相同
  -->
</template>
```

## CanvasPlugin

使用 canvas 预览和缩放图片, 支持旋转图片。

```js
import { CanvasZoomer, CanvasPreview } from 'vue-magnifier-plus'

export default {
  components: {
    CanvasPreview,
    CanvasZoomer,
  },
}
```

或者使用 cdn

```js
new Vue({
  el: '#app',
  components: {
    CanvasPreview: VueMagnifierPlus.CanvasPreview,
    CanvasZoomer: VueMagnifierPlus.CanvasZoomer,
  },
})
```

```html
<template>
  <vue-magnifier-plus>
    <canvas-preview :url="imgUrl" width="960" height="480"></canvas-preview>
    <template #zoomer>
      <canvas-zoomer :url="imgHighUrl" width="960" height="480"></canvas-zoomer>
    </template>
  </vue-magnifier-plus>
</template>
```

#### canvasPreview props

| Prop Name | Type   | Default | Note      |
| --------- | ------ | ------- | --------- |
| url       | String | ''      | 图片      |
| width     | Number | 图片宽  | canvas 宽 |
| height    | Number | 图片高  | canvas 高 |
| rotate    | Number | 0       | 旋转角度  |

#### canvasZoomer props

| Prop Name | Type   | Default | Note           |
| --------- | ------ | ------- | -------------- |
| url       | String | ''      | 更加清晰的图片 |
| width     | Number | 图片宽  | canvas 宽      |
| height    | Number | 图片高  | canvas 高      |
| rotate    | Number | 0       | 旋转角度       |


## ElementPlugin

预览和缩放页面元素。

```js
import { ElementZoomer, ElementPreview } from 'vue-magnifier-plus'

export default {
  components: {
    ElementPreview,
    ElementZoomer,
  },
}
```

或者使用 cdn

```js
new Vue({
  el: '#app',
  components: {
    ElementPreview: VueMagnifierPlus.ElementPreview,
    ElementZoomer: VueMagnifierPlus.ElementZoomer,
  },
})
```

```html
<template>
  <vue-magnifier-plus mask style="width: 100%; font-size: inherit;">
    <element-preview el=".selector"></element-preview>
    <template #zoomer>
      <element-zoomer el=".selector"></element-zoomer>
    </template>
  </vue-magnifier-plus>
</template>
```

#### ElementPreview props

| Prop Name | Type   | Default | Note      |
| --------- | ------ | ------- | --------- |
| el        | String | 'body'  | 元素选择器 |
| exclude   | Array  |  []     | 排除元素列表 |

#### ElementZoomer props

| Prop Name | Type   | Default | Note      |
| --------- | ------ | ------- | --------- |
| el        | String | 'body'  | 元素选择器 |
| exclude   | Array  |  []     | 排除元素列表 |
