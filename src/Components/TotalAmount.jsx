import React, { useEffect, useState } from 'react'

export default function TotalAmount({ cart, quantity }) {
	const [price, setPrice] = useState(0);

	const totalvalue = () => {
		let amount = 0;
		cart.map((item) => {
			amount += item.amount * item.quantity;
		})
		setPrice(amount);

	};

	useEffect(() => {
		totalvalue();

	}, [cart, quantity])


	return (
		<div>
			<p>Total Amount</p>
			<p>Price : {price}</p>
		</div>
	)
}
