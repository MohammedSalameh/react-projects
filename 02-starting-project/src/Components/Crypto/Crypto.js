import React, { useState, useEffect, useCallback } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from '../Users/UsersList.module.css';

const Crypto = () => {
	const [cryptoList, setCryptoList] = useState([]);
	const [filteredCrypto, setFilteredCrypto] = useState([]);

	const fetchAllCryptos = useCallback(async () => {
		const response = await fetch(
			'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=e05e4b7e-211a-4d0c-b301-6b6ad96854af',
			{
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			}
		);

		const data = await response.json();
		setCryptoList(data.data);
		// console.log(data);
	}, []);

	useEffect(() => {
		fetchAllCryptos();
	}, [fetchAllCryptos]);

	const sortBasedOnPrice = () => {
		cryptoList.sort((a, b) => {
			if (a.quote.USD.price < b.quote.USD.price) return -1;
			if (a.quote.USD.price > b.quote.USD.price) return 1;
			else return 0;
		});

		setFilteredCrypto([...cryptoList]);
	};

  const click = (crypto) => {
    console.log(crypto);
  }

	return (
		<Card className={classes.users}>
			<Button type='button' onClick={sortBasedOnPrice}>
				Filter Cryptos
			</Button>
			{cryptoList.length > 0 && (
				<ul>
					{cryptoList.map((crypto) => {
						return (
							<li  onClick={click.bind(null, crypto)} key={crypto.id}>
								<p>{crypto.name}:</p> 
                <p>{crypto.quote.USD.price.toFixed(2)}</p>
							</li>
						);
					})}
				</ul>
			)}
			{/* {filteredCrypto.length > 0 && (
				<ul>
					{filteredCrypto.map((crypto) => {
						return (
							<li key={crypto.id}>
								Name: {crypto.name} Price: {crypto.quote.USD.price}
							</li>
						);
					})}
				</ul>
			)} */}
		</Card>
	);
};

export default Crypto;
