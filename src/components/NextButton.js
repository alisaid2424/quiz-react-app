import { useDispatch , useSelector } from "react-redux";
import { finish, nextQuestion } from "../store/quizSlice";

const NextButton = ({ numQuestions }) => {
  const dispatch = useDispatch();
  const {index, answer } = useSelector((state) => state.app);

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch(nextQuestion())}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch(finish())}
      >
        Finish
      </button>
    );
}

export default NextButton;
