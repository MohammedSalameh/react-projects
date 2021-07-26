import react, { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const [isSumbitting, setIsSubmitting] = useState();
	const [didSubmit, setDidSubmit] = useState(false);
	const { addItem, removeItem, items, totalAmount, clearCart } = useContext(CartContext);

	const total = `$${totalAmount.toFixed(2)}`;

	const hasItems = items.length > 0;

	const cartItemRemoveHandler = (id) => {
		removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		addItem({ ...item, amount: 1 });
	};

	const orderHandler = () => {
		setIsCheckout((prevState) => true);
	};

	const submitOrderHandler = async (userData) => {
		setIsSubmitting(true);
		const response = await fetch(
			'https://react-http-bcd5a-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
			{
				method: 'POST',
				body: JSON.stringify({ user: userData, orderedItems: items }),
			}
		);

		if (!response.ok) {
			throw new Error('Could not submit data');
		}

		setIsSubmitting(false);
		setDidSubmit(true);
		clearCart();

	};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)} // bind: determine which parameters the fucntion gets
				/>
			))}
		</ul>
	);

	const modalActions = (
		<div className={classes.actions}>
			<button className={classes['button--alt']} onClick={props.onClose}>
				Close
			</button>
			{hasItems && (
				<button className={classes.button} onClick={orderHandler}>
					Order
				</button>
			)}
		</div>
	);

	const cartModalContent = (
		<>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{total}</span>
			</div>
			{isCheckout && (
				<Checkout onCancel={props.onClose} onConfirm={submitOrderHandler} />
			)}
			{!isCheckout && modalActions}
		</>
	);

	const isSubmittingModalContent = <p>Sending order data....</p>;

	const didSubmitModalContent = (
		<>
			<p>Successfully sent the order!</p>
			<div className={classes.actions}>
				<button className={classes.button} onClick={props.onClose}>Close</button>
			</div>
		</>
	);
	return (
		<Modal onClose={props.onClose}>
			{!isSumbitting && !didSubmit && cartModalContent}
			{isSumbitting && isSubmittingModalContent}
			{!isSumbitting && didSubmit && didSubmitModalContent}
		</Modal>
	);
};

export default Cart;
