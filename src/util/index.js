export const getBoundingClientRect = (element) => {
  const rect = element.getBoundingClientRect()

  // whether the IE version is lower than 11
  const isIE = navigator.userAgent.indexOf('MSIE') !== -1

  // fix ie document bounding top always 0 bug
  const rectTop =
    isIE && element.tagName === 'HTML' ? -element.scrollTop : rect.top

  return {
    left: rect.left,
    top: rectTop,
    right: rect.right,
    bottom: rect.bottom,
    width: rect.right - rect.left,
    height: rect.bottom - rectTop
  }
}

export function clamp (num, min, max) {
  const MIN = min
  const MAX = max
  return Math.min(Math.max(num, MIN), MAX)
}

export const getBoundValue = (value, bound) => {
  return {
    x: clamp(value.x, bound.left, bound.right),
    y: clamp(value.y, bound.top, bound.bottom)
  }
}

export const generateBound = (width, height, boundWidth, boundHeight) => {
  return {
    left: boundWidth,
    top: boundHeight,
    right: width - boundWidth,
    bottom: height - boundHeight
  }
}

export const getScrollInfo = () => {
  const { documentElement, body } = document
  const scrollTop =
    documentElement.scrollTop || window.pageYOffset || body.scrollTop
  const scrollLeft =
    documentElement.scrollLeft || window.pageXOffset || body.scrollLeft
  return {
    scrollTop,
    scrollLeft
  }
}

/**
 * load img
 * @param {String} img url
 * @return {Promise}
 */
export const loadImg = (url, callback) => {
  const img = document.createElement('img')
  img.addEventListener('load', () => callback(null, img))
  img.addEventListener('error', callback)
  img.src = url
}

export function rotateCanvas (canvas, img, width, height, step) {
  const ctx = canvas.getContext('2d')
  const degree = (step * 90 * Math.PI) / 180
  const { width: imgWidth, height: imgHeight } = img

  switch (step) {
    case 0:
      canvas.width = imgWidth
      canvas.height = imgHeight
      ctx.drawImage(img, 0, 0, imgWidth, imgHeight)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      break
    case 1:
      canvas.width = imgHeight
      canvas.height = imgWidth
      ctx.rotate(degree)
      ctx.drawImage(img, 0, -imgHeight, imgWidth, imgHeight)
      canvas.style.width = height + 'px'
      canvas.style.height = width + 'px'
      break
    case 2:
      canvas.width = imgWidth
      canvas.height = imgHeight
      ctx.rotate(degree)
      ctx.drawImage(img, 0, 0, -imgWidth, -imgHeight)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      break
    case 3:
      canvas.width = imgHeight
      canvas.height = imgWidth
      ctx.rotate(degree)
      ctx.drawImage(img, -imgWidth, 0, imgWidth, imgHeight)
      canvas.style.width = height + 'px'
      canvas.style.height = width + 'px'
      break
  }
}

function removeSelectors (container, selector) {
  const elements = container.querySelectorAll(selector)
  if (elements.length > 0) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].parentNode.removeChild(elements[i])
    }
  }
}

export function cloneHtmlContent (el, exclude) {
  const bodyOriginal = document.querySelector(el)
  const bodyCopy = bodyOriginal.cloneNode(true)
  bodyCopy.style.cursor = 'auto'
  bodyCopy.style.userSelect = 'none'
  bodyCopy.style.pointerEvents = 'none'

  const canvasOriginal = bodyOriginal.querySelectorAll('canvas')
  const canvasCopy = bodyCopy.querySelectorAll('canvas')
  if (canvasOriginal.length > 0) {
    if (canvasOriginal.length === canvasCopy.length) {
      for (let i = 0; i < canvasOriginal.length; i++) {
        const ctx = canvasCopy[i].getContext('2d')
        try {
          ctx.drawImage(canvasOriginal[i], 0, 0)
        } catch (error) {
        //
        }
      }
    }
  }

  removeSelectors(bodyCopy, 'script')
  removeSelectors(bodyCopy, 'style')
  removeSelectors(bodyCopy, 'audio')
  removeSelectors(bodyCopy, 'video')
  removeSelectors(bodyCopy, '.vue-magnifier-plus')
  exclude.forEach(selector => {
    removeSelectors(bodyCopy, selector)
  })

  return bodyCopy
}
