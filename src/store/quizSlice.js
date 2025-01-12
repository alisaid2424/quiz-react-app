// appSlice.js
import { createSlice } from '@reduxjs/toolkit';
import actFetchquestion from './actFetchquestion';

const SECS_PER_QUESTION = 30;

const initialState = {
questions: [],
loading : false,
error : null ,
status: '',
index: 0,
answer: null,
points: 0,
highscore: 0,
secondsRemaining: null,
};

const quizSlice = createSlice({
name: 'quiz',
initialState,
reducers: {
    start(state) {
        state.status = 'active';
        state.secondsRemaining = state.questions.length * SECS_PER_QUESTION;
    },
    newAnswer(state, action) {
        const question = state.questions[state.index];
        state.answer = action.payload;
        state.points += action.payload === question.correctOption ? question.points : 0;
    },
    nextQuestion(state) {
        state.index += 1;
        state.answer = null;
    },
    finish(state) {
        state.status = 'finished';
        state.highscore = Math.max(state.points, state.highscore);
    },
    restart(state) {
        return { ...initialState, questions: state.questions, status: 'ready' };
    },
    tick(state) {
        state.secondsRemaining -= 1;
        if (state.secondsRemaining === 0) {
            state.status = 'finished';
        }
    },
},
extraReducers: (builder) => {
    builder
    .addCase(actFetchquestion.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(actFetchquestion.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
        state.status ='ready';
    })
    .addCase(actFetchquestion.rejected, (state , action) => {
        state.loading = false;
        state.error = action.payload;
    });
}
});

export { actFetchquestion };

export const {
    start,
    newAnswer,
    nextQuestion,
    finish,
    restart,
    tick,
} = quizSlice.actions;

export default quizSlice.reducer;
