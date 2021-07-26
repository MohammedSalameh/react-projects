import React, { useState, useEffect, useContext } from 'react';
import classes from './AvailableMeals.module.css';

import MealItem from './MealItem/MealItem';
import Card from '../UI/Card/Card';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		const fetchMeals = async () => {
			setLoading(true);
			const response = await fetch(
				'https://react-http-bcd5a-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
			);

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const data = await response.json();
			const loadedMeals = [];
			for (const key in data) {
				loadedMeals.push({
					id: key,
					name: data[key].name,
					description: data[key].description,
					price: data[key].price,
				});
			}

			setMeals(loadedMeals);
			setLoading(false);
		};

		fetchMeals().catch((error) => {
			setLoading(false);
			setError(error.message);
		});

	}, []);

	if (loading) {
		return (
			<section className={classes.mealsLoading}>
				<p>Loading...</p>
			</section>
		);
	}

	if (error) {
		return (
			<section className={classes.mealsError}>
				<p>Failed to fetch!</p>
			</section>
		);
	}

	const mealsList = meals.map((meal) => {
		return (
			<MealItem
				id={meal.id}
				key={meal.id}
				name={meal.name}
				description={meal.description}
				price={meal.price}
			/>
		);
	});

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
