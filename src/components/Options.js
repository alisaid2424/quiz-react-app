import { useDispatch , useSelector } from "react-redux";
import { newAnswer } from "../store/quizSlice";

const Options = ({ question }) => {
  const dispatch = useDispatch();
  const { answer} = useSelector((state) => state.app);
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch(newAnswer(index))}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
