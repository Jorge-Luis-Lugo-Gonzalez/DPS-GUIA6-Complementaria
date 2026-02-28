import { useState } from "react";
import VoteOption from "./VoteOption";

const VoteList = () => {
  const [votes, setVotes] = useState({
    react: 0,
    vue: 0,
    angular: 0,
  });

  const vote = (option) => {
    setVotes({
      ...votes,
      [option]: votes[option] + 1,
    });
  };

  const resetVotes = () => {
    setVotes({
      react: 0,
      vue: 0,
      angular: 0,
    });
  };

  return (
    <div>
      <VoteOption
        name="React"
        votes={votes.react}
        onVote={() => vote("react")}
      />

      <VoteOption
        name="Vue"
        votes={votes.vue}
        onVote={() => vote("vue")}
      />

      <VoteOption
        name="Angular"
        votes={votes.angular}
        onVote={() => vote("angular")}
      />

      <button onClick={resetVotes}>Reiniciar votos</button>
    </div>
  );
};

export default VoteList;