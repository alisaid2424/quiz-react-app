import { useEffect } from "react";
import { tick } from "../store/quizSlice";
import { useDispatch, useSelector } from "react-redux";

const Timer = () => {
  const dispatch = useDispatch();
  const { secondsRemaining} = useSelector((state) => state.app);
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    () => {
      const id = setInterval( () => dispatch(tick()), 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}{mins}:{seconds < 10 && "0"}{seconds}
    </div>
  );
}
export default Timer;


