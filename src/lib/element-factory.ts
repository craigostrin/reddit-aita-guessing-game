import { ButtonId, PostId, VOTES, Vote } from './types'

export function createVoteBlock(id: string) {
  const NTA = createVoteButton(id, 'NTA', 'green')
  const YTA = createVoteButton(id, 'YTA', 'red')
  const ESH = createVoteButton(id, 'ESH', 'brown')
  const NAH = createVoteButton(id, 'NAH', 'cornflowerblue')

  const div = document.createElement('div')
  div.appendChild(NTA)
  div.appendChild(YTA)
  div.appendChild(ESH)
  div.appendChild(NAH)

  div.id = id
  div.style.display = 'flex'
  div.style.gap = '1rem'

  return div
}

function createVoteButton(
  postId: PostId,
  vote: Vote,
  color: string
): HTMLButtonElement {
  const button = document.createElement('button')

  button.id = createButtonId(postId, vote)
  button.textContent = vote

  button.title = VOTES[vote]
  button.style.padding = '0.5rem'
  button.style.margin = '0.4rem 0'
  button.style.backgroundColor = color
  button.style.color = 'white'
  button.style.fontWeight = '600'
  button.style.borderRadius = '0.375rem'

  button.onclick = () => {
    const { postId, vote } = parseButtonId(button.id as ButtonId)
    alert('postId: ' + postId + ', vote: ' + vote)
  }

  return button
}

function createButtonId(postId: PostId, vote: Vote): ButtonId {
  const buttonId: ButtonId = `${postId}-${vote}`
  return buttonId
}

export function parseButtonId(id: ButtonId): { postId: PostId; vote: Vote } {
  const [postId, vote] = id.split('-')
  return { postId, vote: vote as Vote }
}
