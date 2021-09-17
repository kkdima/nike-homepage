import React, { useEffect, useRef, useState } from 'react';
import { productsData } from '../../data/products_data';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const SectionFour = () => {
	const [hideButtonLeft, setHideButtonLeft] = useState(true);
	const [hideButtonRight, setHideButtonRight] = useState(false);
	const [sliderWidth, setSliderWidth] = useState(0);
	const carouselContainer = useRef(null);

	const onHScroll = () => {
		const el = carouselContainer.current.scrollLeft;

		if (el > 0) {
			setHideButtonLeft(false);
		} else {
			setHideButtonLeft(true);
		}
		if (el < sliderWidth) {
			setHideButtonRight(false);
		} else {
			setHideButtonRight(true);
		}
	};

	useEffect(async () => {
		setSliderWidth(
			carouselContainer.current.scrollWidth -
				carouselContainer.current.offsetWidth
		);
	}, []);

	const scroll = (scrollOffset) => {
		carouselContainer.current.scrollLeft += scrollOffset;
	};

	return (
		<div className="mt-10">
			<div className="flex w-full justify-between">
				<h2 className="text-2xl mt-16 mb-5">The Latest and Greatest</h2>
				<div className="flex">
					<button
						className={`bg-gray-200 rounded-full my-auto mr-5 p-2 ${
							!hideButtonLeft && `hover:bg-gray-300`
						} ${hideButtonLeft && `opacity-40 cursor-default`}`}
						onClick={() => scroll(-350)}
					>
						<MdKeyboardArrowLeft size="2rem" />
					</button>
					<button
						className={`bg-gray-200 rounded-full my-auto p-2 ${
							!hideButtonRight && `hover:bg-gray-300`
						}
						${hideButtonRight && `opacity-40 cursor-default`}`}
						onClick={() => scroll(350)}
					>
						<MdKeyboardArrowRight size="2rem" />
					</button>
				</div>
			</div>
			<div className="">
				<div
					className="flex overflow-x-scroll smoothScrolling "
					ref={carouselContainer}
					onScroll={() => onHScroll()}
				>
					{productsData.map((product) => {
						// return <ItemCard key={product.id}
						return (
							<div key={product.id} className="">
								<ItemCard product={product} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export const ItemCard = (props) => {
	const { product } = props;
	return (
		<div className="mr-6 w-96 cursor-pointer">
			<div
				className="bg-red-200 h-96 w-96 mb-6 bg-center bg-cover"
				style={{
					backgroundImage: `url(${product.image})`,
				}}
			></div>
			<div className="flex justify-between mb-10">
				<div className="">
					<p className="font-medium">{product.name}</p>
					<p className="">{product.department}</p>
				</div>
				<p>${product.price}</p>
			</div>
		</div>
	);
};

export default SectionFour;
