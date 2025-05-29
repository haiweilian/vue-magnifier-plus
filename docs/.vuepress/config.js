import { defineUserConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import pkg from '../../package.json' assert { type: 'json' }

const __dirname = getDirname(import.meta.url)
const { description } = pkg

export default defineUserConfig({
  title: 'VueMagnifierPlus',
  base: '/vue-magnifier-plus/',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      {
        href: 'https://cdn.jsdelivr.net/npm/swiper@4.5.1/dist/css/swiper.min.css',
        type: 'text/css',
        rel: 'stylesheet',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/swiper@4.5.1/dist/js/swiper.min.js',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/dat.gui@0.7.7/build/dat.gui.min.js',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VueMagnifierPlus',
      description: 'Vue picture magnifier',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VueMagnifierPlus',
      description: 'Vue图片放大镜',
    },
  },
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageText: 'Languages',
        navbar: [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'Setting',
            link: '/setting/props',
          },
          {
            text: 'Demo',
            link: '/demo/image',
          },
          {
            text: 'Playground',
            link: '/playground/',
          },
        ],
        sidebar: {
          '/guide/': [
            {
              text: '',
              collapsible: false,
              children: [''],
            },
          ],
          '/demo/': [
            {
              text: 'Demo',
              collapsible: false,
              children: [
                'image',
                'canvas',
                'element',
                'swiper',
                'custom',
                'full',
                'mini-map',
                'drag-selector',
              ],
            },
          ],
          '/setting/': [
            {
              text: 'Setting',
              collapsible: false,
              children: ['props', 'event', 'methods', 'slot', 'plugins'],
            },
          ],
        },
      },
      '/zh/': {
        selectLanguageText: '选择语言',
        navbar: [
          {
            text: '指南',
            link: '/zh/guide/',
          },
          {
            text: '配置',
            link: '/zh/setting/props',
          },
          {
            text: '示例',
            link: '/zh/demo/image',
          },
          {
            text: 'Playground',
            link: '/playground/',
          },
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '',
              collapsible: false,
              children: [''],
            },
          ],
          '/zh/demo/': [
            {
              text: '示例',
              collapsible: false,
              children: [
                'image',
                'canvas',
                'element',
                'swiper',
                'custom',
                'full',
                'mini-map',
                'drag-selector',
              ],
            },
          ],
          '/zh/setting/': [
            {
              text: '配置',
              collapsible: false,
              children: ['props', 'event', 'methods', 'slot', 'plugins'],
            },
          ],
        },
      },
    },
    repo: 'https://github.com/haiweilian/vue-magnifier-plus',
    docsDir: 'https://github.com/haiweilian/vue-magnifier-plus',
    editLink: false,
    lastUpdated: false,
  }),
  plugins: [
    backToTopPlugin(),
    mediumZoomPlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, 'components'),
    }),
  ],
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
})
