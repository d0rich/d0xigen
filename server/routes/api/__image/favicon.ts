export default defineEventHandler(async () => {
  const appConfig = useAppConfig()
  const storage = useStorage('assets:server')
  const template = await storage.getItem('templates:favicon.html')
  const background = await storage.getItem('templates:favicon.svg')
  return template
    ?.toString()
    .replace('{{background}}', background?.toString() ?? '')
    .replace('{{signature}}', appConfig.d0xigen.title[0])
})
