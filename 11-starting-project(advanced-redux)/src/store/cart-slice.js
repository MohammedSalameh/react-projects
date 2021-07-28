import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], totalQuantity: 0, totalAmount: 0 };

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const newItem = action.payload;
			const exisitingItem = state.items.find((item) => item.id === newItem.id);
			if (!exisitingItem) {
        state.items.push({
          id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.title,
				}); //BAD ON VANILLA REDUX, this is fine for toolkit
			} else {
        exisitingItem.quantity++;
				exisitingItem.totalPrice = exisitingItem.totalPrice + newItem.price;
			}
      state.totalQuantity++;
		},
		removeItem(state, action) {
			const id = action.payload;
			const exisitingItem = state.items.find((item) => item.id === id);
			if (exisitingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
			} else {
        exisitingItem.quantity--;
        exisitingItem.totalPrice = exisitingItem.totalPrice - exisitingItem.price;
			}
      state.totalQuantity--;
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
