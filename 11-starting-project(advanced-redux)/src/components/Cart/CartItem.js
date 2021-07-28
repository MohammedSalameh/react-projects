import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';
const CartItem = (props) => {
	const { id, name, quantity, total, price } = props.item;
	const dispatch = useDispatch();

	const addHandler = () => {
		dispatch(
			cartActions.addItem({
				id,
				name,
				quantity,
				total,
				price,
			})
		);
	};

	const removeHandler = () => {
		dispatch(cartActions.removeItem(id));
	};

	return (
		<li className={classes.item}>
			<header>
				<h3>{name}</h3>
				<div className={classes.price}>
					${total.toFixed(2)}{' '}
					<span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={removeHandler}>-</button>
					<button onClick={addHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
