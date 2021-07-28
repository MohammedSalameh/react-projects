import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

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
					name: newItem.name,
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
				exisitingItem.totalPrice =
					exisitingItem.totalPrice - exisitingItem.price;
			}
			state.totalQuantity--;
		},
	},
});

//action creator
export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: 'pending',
				title: 'Sending...',
				message: 'Sending cart data',
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				'https://react-http-bcd5a-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
				{
					method: 'PUT',
					body: JSON.stringify(cart),
				}
			);

			if (!response.ok) {
				throw new Error('Sending cart data failed.');
			}
		};

		try {
			await sendRequest();

			dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'Completed',
					message: 'Sent cart data successfully',
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'error',
					message: error.message,
				})
			);
		}

	};
};

export const cartActions = cartSlice.actions;
export default cartSlice;
