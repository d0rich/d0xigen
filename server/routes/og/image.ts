

export default defineEventHandler(async (event) => {
  const storage = useStorage('assets:server')
  const template = await storage.getItem('templates:og-image.html')
  return template
})
