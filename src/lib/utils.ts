import { PostId } from './types'

export function getPostIdFromUrl(url: string): PostId {
  const split = url.split('/')
  const i = split.indexOf('comments') + 1
  return split[i]
}

//* Only needed for Popup. Use 'location.href' in scripts
// export async function getActiveTabUrl(): Promise<string> {
//   const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

//   if (!tab.url) {
//     throw new Error('Error accessing current tab URL')
//   }

//   return tab.url
// }
