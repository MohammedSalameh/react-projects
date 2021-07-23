import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';

import CartIcon from '../Cart/CartIcon';

import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
	const { items } = useContext(CartContext);
	const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);

	const btnClasses = `${classes.button} ${
		btnIsHighLighted ? classes.bump : ''
	}`;

	useEffect(() => {
		if (items.length === 0) return;
		
		setBtnIsHighLighted(true);

		const timer = setTimeout(() => {
			setBtnIsHighLighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	const numberOfCartItems = items.reduce((currentNumber, item) => {
		return currentNumber + item.amount;
	}, 0);

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
