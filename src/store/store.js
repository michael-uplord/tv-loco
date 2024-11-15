import { configureStore } from '@reduxjs/toolkit';
import showsReducer from './showsStore';

const store = configureStore({
  reducer: {
    shows: showsReducer,
  },
});

export default store;
