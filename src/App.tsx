import { useEffect, useState } from 'react'
import { Tally } from './lib/types'

const initialState: Tally = {
  NTA: 0,
  YTA: 0,
  ESH: 0,
  NAH: 0,
}

function App() {
  const [tally, setTally] = useState(initialState)
  console.log('popup rendered')
  useEffect(() => {
    console.log('use effect ran')
    function handleMessage(message: any, sender: chrome.runtime.MessageSender) {
      console.log('message received', message)
      console.log('message from ', sender)
      setTally(message.tally)
    }

    chrome.runtime.onMessage.addListener(handleMessage)

    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage)
    }
  }, [])

  return (
    <div className='w-96 h-96 bg-pink-300 flex flex-col items-center gap-10'>
      <h1 className='text-3xl text-center'>Votes:</h1>
      {Object.entries(tally).map(([key, count], i) => (
        <p key={i}>
          {key}: {count.toString()}
        </p>
      ))}
    </div>
  )
}

export default App
