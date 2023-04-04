export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:beforeParse', async (file: { _id: string, body: string }) => {
    if (file._id.endsWith('.md')) {
      file.body = file.body.replace(/```mermaid([\s\S]*?)```/gm, '<pre class="mermaid">$1</pre>')
    }
  })
})
