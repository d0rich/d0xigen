import nodeHtmlToImage from 'node-html-to-image'

let cachedBuffer: Buffer | undefined

export default defineEventHandler(async () => {
  if (await useStorage('root:public:og').hasItem('image.jpg')) return
  if (cachedBuffer) {
    return cachedBuffer
  }
  const html = await $fetch('/api/_d0xigen/image/og-image')
  const image = await nodeHtmlToImage({
    html,
    waitUntil: 'networkidle0',
    type: 'jpeg'
  })
  if (image instanceof Buffer) {
    cachedBuffer = image
  }
  return image
})
