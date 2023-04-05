import nodeHtmlToImage from 'node-html-to-image'

let cachedBuffer: Buffer | undefined

export default defineEventHandler(async (event) => {
  if (cachedBuffer) {
    return cachedBuffer
  }
  const html = await $fetch('/og/image')
  const image = await nodeHtmlToImage({
    html: html,
    waitUntil: 'networkidle0',
    type: 'jpeg'
  })
  if (image instanceof Buffer) {
    cachedBuffer = image
  }
  return image
})
