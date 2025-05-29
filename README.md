# vue-magnifier-plus

> Vue picture magnifier(Vue 2 & Vue 3)

![example](https://raw.githubusercontent.com/haiweilian/vue-magnifier-plus/master/example.png)

## Install

```js
npm install vue-magnifier-plus

# or
yarn add vue-magnifier-plus
```
## Usage

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

## Documentation

Check out our docs at [https://haiweilian.github.io/vue-magnifier-plus/guide/](https://haiweilian.github.io/vue-magnifier-plus/guide/).

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2018-present, mater1996、haiweilian
