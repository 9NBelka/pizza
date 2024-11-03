// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = configureStore(
  {
    reducer: {
      filter: filterReducer,
    },
  },
  composeWithDevTools(),
);
