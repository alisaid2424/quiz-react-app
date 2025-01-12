import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {actFetchquestion} from '../store/quizSlice.js';
import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import ErrorPage from './ErrorPage.js';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Footer from './Footer';
import Timer from './Timer';

const App = () => {
  const dispatch = useDispatch();
  const {questions, status,error,loading} = useSelector((state) => state.app);
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(() => {
      dispatch(actFetchquestion())
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      <Main>
        {loading  && <Loader />}
        {error && <ErrorPage />}
        {status === 'ready' && (
          <StartScreen numQuestions={numQuestions} />
        )}
        {status === 'active' && (
          <Fragment>
            <Progress
              numQuestions={numQuestions}
              maxPossiblePoints={maxPossiblePoints}
            />
            <Question />
            <Footer>
              <Timer  />
              <NextButton numQuestions={numQuestions} />
            </Footer>
          </Fragment>
        )}
        {status === 'finished' && (
          <FinishScreen  maxPossiblePoints={maxPossiblePoints} />
        )}
      </Main>
    </div>
  );
}

export default App ;
