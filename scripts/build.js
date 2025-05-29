/*
 * @author: Mater
 * @Email: bxh8640@gmail.com
 * @Date: 2021-08-09 16:56:18
 * @Description:
 */
const execa = require('execa')

const formats = ['cjs', 'esm', 'iife']

async function build (format) {
  await execaRollup([
    ['NODE_ENV', 'production'],
    ['FORMAT', format],
    ['NAME', 'vue-magnifier-plus'],
    ['GLOBAL', 'VueMagnifierPlus'],
    ['INPUT', 'src/vue-magnifier-plus.vue']
  ])
}

const execaRollup = environment => {
  return execa(
    'rollup',
    [
      '-c',
      './rollup.config.js',
      '--environment',
      environment.map(v => v.join(':')).join(',')
    ],
    { stdio: 'inherit' }
  )
}

async function run () {
  for (const i of formats) {
    await build(i)
  }
}

run()
