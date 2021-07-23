import react, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
	const {addItem, removeItem, items, totalAmount} = useContext(CartContext);

	const total = `$${totalAmount.toFixed(2)}`;

	const hasItems = items.length > 0;

	const cartItemRemoveHandler = (id) => {
		removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		addItem({...item, amount: 1})
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

	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{total}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onClose}>
					Close
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
