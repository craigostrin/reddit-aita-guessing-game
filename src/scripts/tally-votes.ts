import { Tally, Vote } from '../lib/types'
import { getPostIdFromUrl } from '../lib/utils'

const url = location.href
const postId = getPostIdFromUrl(url)

const playerVote = await chrome.storage.local.get(postId)
if (playerVote) console.log('✅✅✅✅✅', playerVote)

// 🆒 HACK
// Default to -1 to account for the sidebar
const tally: Tally = {
  YTA: -1,
  NTA: -1,
  ESH: -1,
  NAH: -1,
}

const VOTES = Object.keys(tally) as Vote[]

console.log("Looks like you're on r/AmITheAsshole")
console.log(`Let's count these votes: ${VOTES}`)

//! This only works on Old Reddit (old.reddit.com)
// new.reddit may have some dynamic loading based on scroll
// sh.reddit streams its comments so the script runs too soon
const nodes = document.querySelectorAll('.usertext-body > div > p')

//TODO exclude sidebar
const comments = Array.from(nodes, (node) => node.textContent)
const start = Date.now()

comments.forEach((comment) => {
  VOTES.forEach((key) => {
    if (comment?.indexOf(key) !== -1) tally[key]++
  })
})

const finish = Date.now()

console.log('The votes come to:')
console.log(tally)
console.log(`\nAITA vote tally took ${finish - start} ms.`)

chrome.runtime.sendMessage({ tally })
