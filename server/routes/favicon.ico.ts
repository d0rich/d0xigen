import nodeHtmlToImage from 'node-html-to-image'
import pngToIco from 'png-to-ico'

let cachedBuffer: Buffer | undefined

export default defineEventHandler(async (event) => {
  if (cachedBuffer) {
    return cachedBuffer
  }
  const html = await $fetch('/api/__image/favicon')
  const png = await nodeHtmlToImage({
    html: html,
    waitUntil: 'networkidle0',
    type: 'png',
    transparent: true
  })
  const ico = await pngToIco(png)
  if (ico instanceof Buffer) {
    cachedBuffer = ico
  }
  return ico
})
