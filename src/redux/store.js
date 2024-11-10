// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import cartReducer from './cartSlice';
import pizzaReducer from './pizzaSlice';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = configureStore(
  {
    reducer: {
      filter: filterReducer,
      cart: cartReducer,
      pizza: pizzaReducer,
    },
  },
  composeWithDevTools(),
);
