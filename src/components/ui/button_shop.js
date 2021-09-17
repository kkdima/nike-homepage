import React, { useEffect, useState } from 'react';

const Button_shop = (props) => {
	const [buttonColor, setButtonColor] = useState('white');
	const [buttonTextColor, setButtonTextColor] = useState('black');
	const [styles, setStyles] = useState('');
	const [title, setShop] = useState('Shop');

	useEffect(async () => {
		props.buttonTextColor && (await setButtonTextColor(props.buttonTextColor));
		props.buttonColor && (await setButtonColor(props.buttonColor));
		props.styles && (await setStyles(props.styles));
		props.title && (await setShop(props.title));
	}, []);

	return (
		<button
			className={`bg-${buttonColor} text-${buttonTextColor} ${styles} whitespace-nowrap px-6 py-2 rounded-full max-w-min hover:opacity-80`}
		>
			{title}
		</button>
	);
};

export default Button_shop;
