import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id && item.size === action.payload.size,
      );
      if (itemInCart) {
        itemInCart.quantity += 1; // Увеличиваем количество, если товар уже есть в корзине
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Добавляем новый товар
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
