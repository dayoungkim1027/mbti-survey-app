import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import menuReducer from './menuSlice';
import geminiReducer from './geminiSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    menuStatus: menuReducer,
    geminiAnswer: geminiReducer,
  },
});

export default store;