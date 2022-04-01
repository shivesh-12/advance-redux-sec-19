import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    itemQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem =  state.item.find(item => item.id === newItem.id);
      
    },
    removeItemFromCart(state) {},
  },
});
