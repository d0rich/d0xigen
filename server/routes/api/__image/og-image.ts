

export default defineEventHandler(async (event) => {
  const appConfig = useAppConfig()
  const storage = useStorage('assets:server')
  const template = await storage.getItem('templates:og-image.html')
  const background = await storage.getItem('templates:background.svg')
  return template?.toString()
    .replace('{{background}}', background?.toString() ?? '')
    .replace('{{title}}', appConfig.d0xigen.title)
    .replace('{{description}}', appConfig.d0xigen.description)
})
