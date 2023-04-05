export default defineEventHandler(() => {
  const appConfig = useAppConfig()
  const url = appConfig.d0xigen.url
  if (url.startsWith('https://')) {
    return url.slice(8).replaceAll('/', '')
  }
  if (url.startsWith('http://')) {
    return url.slice(7).replaceAll('/', '')
  }
  return url.replaceAll('/', '')
})
