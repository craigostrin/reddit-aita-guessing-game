console.log('Hello, I am the service worker.\nI run in the background. 😉')

chrome.runtime.onMessage.addListener((message: any, _, __) => {
  chrome.runtime.sendMessage(message)
})
