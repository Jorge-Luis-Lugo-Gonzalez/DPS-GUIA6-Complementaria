import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { VoteOption } from './components/VoteOption'
import './App.css'
import VoteList from './components/VoteList'

function App() {
   const [options, setOptions] = useState([
    { name: "React", votes: 0 },
    { name: "Vue", votes: 0 },
    { name: "Angular", votes: 0 },
  ]);

   const vote = (index) => {
    const newOptions = [...options];
    newOptions[index].votes += 1;
    setOptions(newOptions);
  };

  const resetVotes = () => {
    const reset = options.map((op) => ({ ...op, votes: 0 }));
    setOptions(reset);
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
      <h1>Contador de Votos</h1>
      <VoteList options={options} vote={vote} resetVotes={resetVotes} />
    </div>
    </>
  );
}

export default App
