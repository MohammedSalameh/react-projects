import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const notification = useSelector((state) => state.ui.notification);

	const cart = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	const sendCartData = async () => {
		dispatch(
			uiActions.showNotification({
				status: 'pending',
				title: 'Sending...',
				message: 'Sending cart data',
			})
		);
		try {
			//Upload cahnges to cart, to the server/db.
			//whenever the state changes.
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
			dispatch(
				uiActions.showNotification({
					status: 'Success',
					title: 'Completed',
					message: 'Sent cart data successfully',
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					stats: 'error',
					title: 'error',
					message: error.message,
				})
			);
		}
	};

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}

		sendCartData();
	}, [cart]);

	return (
		<>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default App;
