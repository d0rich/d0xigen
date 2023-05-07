export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain')
  const lines: string[] = []
  const config = useAppConfig()
  lines.push('User-agent: *')
  lines.push('Disallow: /')
  lines.push('')
  lines.push(`Sitemap: ${config.d0xigen.url}/sitemap.xml`)
  return lines.join('\n')
})
