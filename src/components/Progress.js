import { useSelector } from "react-redux";

const Progress = ({  numQuestions, maxPossiblePoints }) => {
  const { answer , index , points} = useSelector((state) => state.app);
  
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;

