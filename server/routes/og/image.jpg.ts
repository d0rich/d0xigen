import nodeHtmlToImage from 'node-html-to-image'

export default defineEventHandler(async (event) => {
  const html = await $fetch('/og/image')
  return nodeHtmlToImage({
    html: html,
    waitUntil: 'networkidle0',
    type: 'jpeg'
  })
})
