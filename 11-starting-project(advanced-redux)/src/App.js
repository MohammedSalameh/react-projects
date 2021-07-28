import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

function App() {
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const notification = useSelector((state) => state.ui.notification);
	const cart = useSelector((state) => state.cart);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCartData());
	}, []);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}

		if (cart.changed) {
			dispatch(sendCartData(cart));
		}

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
