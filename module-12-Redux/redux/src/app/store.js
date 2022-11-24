import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import randomCounterReducer from '../features/randomCounter/randomCounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    randomCounter: randomCounterReducer
  },
});
