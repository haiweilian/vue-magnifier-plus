/**
 * Client app enhancement file.
 *
 * https://v2.vuepress.vuejs.org/guide/client-api.html
 */
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    router.addRoute({ path: "/", redirect: "/guide/" })
    router.addRoute({ path: "/zh", redirect: "/zh/guide/" })
  },
})
