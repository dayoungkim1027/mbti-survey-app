import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    open: false,
  }
};

const menuSlice = createSlice({
  name: 'menuStatus',
  initialState,
  reducers: {
    setMenuStatus: (state, action) => {
      state.data = action.payload;
    },
    getMenuStatus: (state) => {
      return state.data;
    },
  }
});

// Export actions
export const { setMenuStatus, getMenuStatus } = menuSlice.actions;

// Export reducer
export default menuSlice.reducer;
