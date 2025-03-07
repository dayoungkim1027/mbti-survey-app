import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import menuReducer from './menuSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    menuStatus: menuReducer,
  },
});

export default store;