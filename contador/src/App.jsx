import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { VoteOption } from './components/VoteOption'
import './App.css'
import VoteList from './components/VoteList'

function App() {
  const [votes, setVotes] = useState(0)

  const handleVote = () => {
    setVotes(votes + 1)
  }

  return (
    <>
     <div>
      <h1>Contador de Votos</h1>
      <VoteOption name="React"
        votes={votes}
        totalVotes={votes}
        onVote={handleVote}/>
     </div>
    </>
  )
}

export default App
