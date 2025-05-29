# vue-magnifier-plus

> Vue 图片放大镜

![example](https://raw.githubusercontent.com/haiweilian/vue-magnifier-plus/master/example.png)

## 安装

```js
npm install vue-magnifier-plus

# or
yarn add vue-magnifier-plus
```

## 使用

```vue
<template>
  <vue-magnifier-plus :url="imgUrl" :high-url="imgHighUrl"></vue-magnifier-plus>
</template>

<script>
import VueMagnifierPlus from 'vue-magnifier-plus'
import 'vue-magnifier-plus/dist/style/vue-magnifier-plus.css'

export default {
  components: {
    VueMagnifierPlus,
  },
}
</script>
```

## 文档

查看文档 [https://haiweilian.github.io/vue-magnifier-plus/guide/](https://haiweilian.github.io/vue-magnifier-plus/guide/).

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2018-present, mater1996、haiweilian
