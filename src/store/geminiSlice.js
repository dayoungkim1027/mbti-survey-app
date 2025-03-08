import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    answer: '',
  }
};

const geminiSlice = createSlice({
  name: 'geminiAnswer',
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      state.data = action.payload;
    },
    getAnswer: (state) => {
      return state.data;
    },
  }
});

// Export actions
export const { setAnswer, getAnswer } = geminiSlice.actions;

// Export reducer
export default geminiSlice.reducer;
