export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:beforeParse', async (file: { _id: string, body: string }) => {
    if (file._id.endsWith('.md')) {
      file.body = file.body.replace(/```mermaid([\s\S]*?)```/gm, '<mermaid-diagram>$1</mermaid-diagram>')
    }
  })
})
