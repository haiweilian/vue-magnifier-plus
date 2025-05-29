# Plugins

`vue-magnifier-plus` provide plugins to support special features.

## ImgPlugin

Preview and zoom image using img.

```js
import { ImgZoomer, ImgPreview } from 'vue-magnifier-plus'

export default {
  components: {
    ImgPreview,
    ImgZoomer,
  },
}
```

or cdn

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
    same as <vue-magnifier-plus :url="imgUrl" :high-url="imgHighUrl">
  -->
</template>
```

## CanvasPlugin

Preview and zoom image using canvas, this support rotate image.

```js
import { CanvasZoomer, CanvasPreview } from 'vue-magnifier-plus'

export default {
  components: {
    CanvasPreview,
    CanvasZoomer,
  },
}
```

or cdn

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

| Prop Name | Type   | Default    | Note           |
| --------- | ------ | ---------- | -------------- |
| url       | String | ''         | img url        |
| width     | Number | Img width  | canvas width   |
| height    | Number | Img height | canvas height  |
| rotate    | Number | 0          | Rotation Angle |

#### canvasZoomer props

| Prop Name | Type   | Default    | Note           |
| --------- | ------ | ---------- | -------------- |
| url       | String | ''         | High img url   |
| width     | Number | Img width  | Canvas width   |
| height    | Number | Img height | Canvas height  |
| rotate    | Number | 0          | Rotation Angle |

## ElementPlugin

Preview and zoom page elements.

```js
import { ElementZoomer, ElementPreview } from 'vue-magnifier-plus'

export default {
  components: {
    ElementPreview,
    ElementZoomer,
  },
}
```

or cdn

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

| Prop Name | Type   | Default | Note           |
| --------- | ------ | ------- | -------------- |
| el        | String | 'body'  | Element selector |
| exclude   | Array  |  []     | Exclude elements list |

#### ElementZoomer props

| Prop Name | Type   | Default | Note           |
| --------- | ------ | ------- | -------------- |
| el        | String | 'body'  | Element selector |
| exclude   | Array  |  []     | Exclude elements list |
