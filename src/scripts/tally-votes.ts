import { Tally, Vote } from '../types'

const tally: Tally = {
  YTA: 0,
  NTA: 0,
  ESH: 0,
  NAH: 0,
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
console.log(comments)
const start = Date.now()
console.log(start)

comments.forEach((comment) => {
  VOTES.forEach((key) => {
    if (comment?.indexOf(key) !== -1) tally[key]++
  })
})

const finish = Date.now()
console.log(finish)

console.log('The votes come to:')
console.log(tally)
console.log(`\nAITA vote tally took ${finish - start} ms.`)

chrome.runtime.sendMessage({ tally })
