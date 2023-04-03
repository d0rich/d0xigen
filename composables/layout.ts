import { Toc } from "@nuxt/content/dist/runtime/types";

export const useDocsLayoutState = () => ({
  showContentTree: useState('layout/docs/showContentTree', () => true),
  tableOfContents: useState<Toc | null>('layout/docs/tableOfContents', () => null),
})
