import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actFetchquestion = createAsyncThunk(
  "quiz/actFetchquestion",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.get(
        "https://server-api-quiz.netlify.app/db.json"
      );
      return res.data.questions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actFetchquestion;
