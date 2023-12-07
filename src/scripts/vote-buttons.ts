import { createVoteBlock } from '../lib/element-factory'
import { getPostIdFromUrl } from '../lib/utils'

const titleNodes = document.querySelectorAll('p.title')

for (let i = 0; i < titleNodes.length; i++) {
  const node = titleNodes[i]
  const link = titleNodes[i].querySelector('a.title') as HTMLAnchorElement
  const url = link.href

  if (!url?.includes('/comments/')) continue

  const id = getPostIdFromUrl(url)
  const voteBlock = createVoteBlock(id)

  node.after(voteBlock)
}
