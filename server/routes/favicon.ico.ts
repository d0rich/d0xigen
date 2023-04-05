import nodeHtmlToImage from 'node-html-to-image'
import pngToIco from 'png-to-ico'

let cachedBuffer: Buffer | undefined

export default defineEventHandler(async () => {
  if (await useStorage('root:public').hasItem('favicon.ico')) return
  if (cachedBuffer) {
    return cachedBuffer
  }
  const html = await $fetch('/api/_d0xigen/image/favicon')
  const png = await nodeHtmlToImage({
    html,
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
