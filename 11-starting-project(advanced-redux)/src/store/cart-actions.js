import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				'https://react-http-bcd5a-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
			);

			if (!response.ok) {
				throw new Error('could not fetch cart data');
			}
			const data = await response.json();

			return data;
		};

		try {
			const cartData = await fetchData();
			dispatch(
				cartActions.replaceCart({
					items: cartData.items || [],
					totalQuantity: cartData.totalQuantity,
				})
			);

      dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'Completed',
					message: 'fetched cart data successfully',
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'error',
					message: 'Fetching cart data failed!',
				})
			);
		}
	};
};

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
					body: JSON.stringify({
						items: cart.items,
						totalQuantity: cart.totalQuantity,
					}),
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
