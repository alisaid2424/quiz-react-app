import { useDispatch , useSelector } from "react-redux";
import { restart } from "../store/quizSlice";
import { Fragment } from "react";

const FinishScreen = ({  maxPossiblePoints }) =>  {
  const dispatch = useDispatch();
  const {points , highscore} = useSelector((state) => state.app);
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <Fragment>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> 
        out of{maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch(restart())}
      >
        Restart quiz
      </button>
    </Fragment>
  );
}

export default FinishScreen;
