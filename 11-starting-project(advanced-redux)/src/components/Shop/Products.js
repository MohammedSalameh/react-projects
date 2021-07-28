import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{
		id: 1,
		price: 6,
		name: 'My item',
		description: 'The item that you ordered',
	},
	{
		id: 2,
		price: 12,
		name: 'My 2',
		description: 'The 2 that you ordered',
	},
];


const Products = (props) => {

	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => {
					return <ProductItem
						key={product.id}
            id={product.id}
						name={product.name}
						price={product.price}
						description={product.description}
					/>;
				})}
			</ul>
		</section>
	);
};

export default Products;
