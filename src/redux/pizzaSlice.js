// src/redux/pizzaSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    selectedSizes: {}, // Store selected size for each pizza by id
  },
  reducers: {
    setSelectedSize: (state, action) => {
      const { pizzaId, sizeIndex } = action.payload;
      state.selectedSizes[pizzaId] = sizeIndex;
    },
  },
});

export const { setSelectedSize } = pizzaSlice.actions;
export default pizzaSlice.reducer;
