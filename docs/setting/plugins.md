# Plugins

`vue-photo-zoom-pro` provide plugins to support special features.

## ImgPlugin

Preview and zoom image using img.

```js
import { ImgZoomer, ImgPreview } from 'vue-photo-zoom-pro'

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
    ImgPreview: VuePhotoZoomPro.ImgPreview,
    ImgZoomer: VuePhotoZoomPro.ImgZoomer,
  },
})
```

```html
<template>
  <vue-photo-zoom-pro>
    <img-preview :url="imgUrl"></img-preview>
    <template #zoomer>
      <img-zoomer :url="imgHighUrl"></img-zoomer>
    </template>
  </vue-photo-zoom-pro>
  <!-- 
    same as <vue-photo-zoom-pro :url="imgUrl" :high-url="imgHighUrl">
  -->
</template>
```

## CanvasPlugin

Preview and zoom image using canvas, this support rotate image.

```js
import { CanvasZoomer, CanvasPreview } from 'vue-photo-zoom-pro'

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
    CanvasPreview: VuePhotoZoomPro.CanvasPreview,
    CanvasZoomer: VuePhotoZoomPro.CanvasZoomer,
  },
})
```

```html
<template>
  <vue-photo-zoom-pro>
    <canvas-preview :url="imgUrl" width="960" height="480"></canvas-preview>
    <template #zoomer>
      <canvas-zoomer :url="imgHighUrl" width="960" height="480"></canvas-zoomer>
    </template>
  </vue-photo-zoom-pro>
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
import { ElementZoomer, ElementPreview } from 'vue-photo-zoom-pro'

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
    ElementPreview: VuePhotoZoomPro.ElementPreview,
    ElementZoomer: VuePhotoZoomPro.ElementZoomer,
  },
})
```

```html
<template>
  <vue-photo-zoom-pro mask style="width: 100%; font-size: inherit;">
    <element-preview el=".selector"></element-preview>
    <template #zoomer>
      <element-zoomer el=".selector"></element-zoomer>
    </template>
  </vue-photo-zoom-pro>
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
