import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    id: null,
    gender: '',
    type: '',
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload; // Set the document object
      console.log('setUser:: ', state.data)
    },
    getUser: (state) => {
      return state.data;
    },
    clearUser: (state) => {
      state.data = { id: null, user: {} }; // Reset document
      console.log('clearUser:: ', state.data)
    }
  }
});

// Export actions
export const { setUser, clearUser, getUser } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
