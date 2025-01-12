// store.js
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './quizSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
