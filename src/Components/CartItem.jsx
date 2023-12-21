import React, { useEffect, useState } from 'react'

export default function CartItem({ cart, item, setquantity }) {
	const [counter, setCounter] = useState(1);

	const handleadd = (item) => {
		setCounter((counter) => counter + 1);
	};
	const handlesub = () => {
		setCounter((counter) => counter - 1);
	};
	useEffect(() => {
		item.quantity = counter
		setquantity(counter)

	}, [counter])



	return (
		<div
			className=" flex w-full items-center justify-center gap-5  space-y-2"
		>
			<div>
				{item.name} <b> ₹{item.amount}</b>
			</div>
			<button
				onClick={handlesub}
				disabled={counter === 1}
				className=" border p-2 rounded-full"
			>
				-
			</button>
			<div className=" border px-4 p-2">{counter}</div>
			<button
				onClick={() => handleadd(item)}
				className=" border p-2 rounded-full"
			>
				+
			</button>
		</div>
	)
}
