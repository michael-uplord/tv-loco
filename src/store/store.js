import { configureStore } from '@reduxjs/toolkit';
import showsReducer from './showsStore';
import showReducer from './showStore';

const store = configureStore({
  reducer: {
    shows: showsReducer,
    show: showReducer,
  },
});

export default store;
