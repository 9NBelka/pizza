// src/redux/filterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    category: 0, // По умолчанию выбран "Все"
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      // console.log(state);
    },
  },
});

export const { setCategory } = filterSlice.actions;
export default filterSlice.reducer;
