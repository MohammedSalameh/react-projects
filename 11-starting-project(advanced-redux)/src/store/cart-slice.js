import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const initialState = { items: [], totalQuantity: 0, totalAmount:0, changed: false};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		replaceCart(state, action) {
			state.totalQuantity = action.payload.totalQuantity;
			state.items = action.payload.items;
		},
		addItem(state, action) {
			const newItem = action.payload;
			const exisitingItem = state.items.find((item) => item.id === newItem.id);
			if (!exisitingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.name,
				}); //BAD ON VANILLA REDUX, this is fine for toolkit
			} else {
				exisitingItem.quantity++;
				exisitingItem.totalPrice = exisitingItem.totalPrice + newItem.price;
			}
			state.totalQuantity++;
			state.changed = true;
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
			state.changed = true;
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
