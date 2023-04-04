export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:beforeParse', async (file: { _id: string, body: string }) => {
    if (file._id.endsWith('.md')) {
      file.body = file.body.replace(/```mermaid([\s\S]*?)```/gm, (_, code) => `<mermaid-diagram>${code.trim()}</mermaid-diagram>`)
    }
  })
})
