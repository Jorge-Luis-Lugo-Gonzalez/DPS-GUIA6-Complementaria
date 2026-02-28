// src/components/VoteOption.jsx
export const VoteOption = ({ name, votes, totalVotes, onVote }) => {
  const percentage = 
  totalVotes === 0 ? 0 : ((votes / totalVotes) * 100).toFixed(1);

  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>Votos: {votes}</p>
      <p>Porcentaje: {percentage}%</p>
      <button onClick={onVote}>Votar</button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "10px",
  },
};