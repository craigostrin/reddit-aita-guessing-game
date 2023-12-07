import { PostId } from './types'

export function getPostIdFromUrl(url: string): PostId {
  const split = url.split('/')
  const i = split.indexOf('comments') + 1
  return split[i]
}
