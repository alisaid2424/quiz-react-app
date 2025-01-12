import { useSelector } from "react-redux";
import Options from "./Options";

const Question = () => {
  const {questions, index} = useSelector((state) => state.app);

  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options question={questions[index]}  />
    </div>
  );
}

export default Question;
