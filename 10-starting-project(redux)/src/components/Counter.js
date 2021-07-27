import React, { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';

// Toolkit reduxjs
import { counterActions } from '../store/counter';

const Counter = () => {
	// subscribe and update on changes
	const counter = useSelector((state) => state.counter.counter);
	const showCounter = useSelector((state) => state.counter.showCounter);
	const dispatch = useDispatch();

	const toggleCounterHandler = () => {
		// dispatch({type: 'toggleCounter'})
		dispatch(counterActions.toggleCounter());
	};

	const incrementHandler = () => {
		// dispatch({ type: 'increment' });
		dispatch(counterActions.increment());
	};

	const decrementHandler = () => {
		// dispatch({ type: 'decrement' });
		dispatch(counterActions.decrement());
	};
	const increaseHandler = () => {
		// dispatch({ type: 'increase', amount: 5 });
		dispatch(counterActions.increase(10)); // {type: some_uniqute_identifier, payload: 10}
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increase by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

class Counter2 extends Component {
	incrementHandler = () => {
		this.props.increment();
	};

	decrementHandler = () => {
		this.props.decrement();
	};

	toggleCounterHandler = () => {};

	render() {
		return (
			<main className={classes.counter}>
				<h1>Redux Counter</h1>
				<div className={classes.value}>{this.props.counter}</div>
				<div>
					<button onClick={this.incrementHandler.bind(this)}>Increment</button>
					<button onClick={this.decrementHandler.bind(this)}>Decrement</button>
				</div>
				<button onClick={this.toggleCounterHandler}>Toggle Counter</button>
			</main>
		);
	}
}

export default Counter;

// for classes only
const mapStateToProps = (state) => {
	return {
		counter: state.counter,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch({ type: 'increment' }),
		decrement: () => dispatch({ type: 'decrement' }),
	};
};
// export default connect(mapStateToProps, mapDispatchToProps )(Counter2);
