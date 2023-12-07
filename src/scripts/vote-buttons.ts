import { VOTES, Vote } from '../types'

const titleNodes = document.querySelectorAll('p.title')

for (let i = 0; i < titleNodes.length; i++) {
  const node = titleNodes[i]
  const title = node.childNodes[0].textContent
  console.log(node.childNodes[0])
  if (!title?.includes('AITA')) continue

  const voteBlock = createVoteBlock(title)
  node.after(voteBlock)
}

function createVoteBlock(title: string) {
  const NTA = createVoteButton('NTA', 'green')
  const YTA = createVoteButton('YTA', 'red')
  const ESH = createVoteButton('ESH', 'brown')
  const NAH = createVoteButton('NAH', 'cornflowerblue')

  const div = document.createElement('div')
  div.appendChild(NTA)
  div.appendChild(YTA)
  div.appendChild(ESH)
  div.appendChild(NAH)

  div.id = title
  div.style.display = 'flex'
  div.style.gap = '1rem'

  return div
}

function createVoteButton(id: Vote, color: string): HTMLButtonElement {
  const button = document.createElement('button')
  button.id = id
  button.textContent = id

  button.title = VOTES[id]
  button.style.padding = '0.5rem'
  button.style.margin = '0.4rem 0'
  button.style.backgroundColor = color
  button.style.color = 'white'
  button.style.fontWeight = '600'
  button.style.borderRadius = '0.375rem'

  return button
}
