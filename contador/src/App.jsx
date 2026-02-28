import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VoteList from './components/VoteList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VoteList />
    </>
  )
}

export default App
