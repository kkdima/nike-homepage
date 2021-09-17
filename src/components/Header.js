import React, { useState, useEffect } from 'react';

import { FiSearch, FiHeart, FiShoppingBag } from 'react-icons/fi';

const Header = () => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const resizeListener = () => {
			setWidth(window.innerWidth);
		};
		resizeListener();
		window.addEventListener('resize', resizeListener);
		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, [width]);

	let menu = ['Men'];

	return (
		<div className="w-full">
			<div className="bg-gray-100 flex justify-between py-2 px-12">
				<div>logos</div>
				<div className="text-xs flex px-5 self-center">
					<p>Help</p>
					<div className="w-px h-3 bg-gray-400 mx-2"></div>
					<p>Join us</p>
					<div className="w-px h-3 bg-gray-400 mx-2"></div>
					<p>Sign In</p>
				</div>
			</div>
			<div className="py-2 px-12 grid grid-cols-3">
				<div className="w-14 flex">
					<img
						src="/nike-4-logo-svg-vector.svg"
						alt="nike-logo"
						className="self-center"
					/>
				</div>

				<ul className="flex justify-between self-center font-medium">
					<li className="mr-5 whitespace-nowrap">New Releases</li>
					<li className="mr-5 pointer">Men</li>
					<li className="mr-5">Women</li>
					<li className="mr-5">Kids</li>
					<li className="mr-5">Customize</li>
					<li className="mr-5">Sale</li>
					<li className="mr-5 whitespace-nowrap hidden gradation:visible">
						Back to School
					</li>
				</ul>
				<div className="flex">
					<form className="relative flex mr-7">
						<input
							type="text"
							name="name"
							placeholder="Search"
							className="rounded-full p-2 pl-10 bg-gray-100 border-none form-input focus:outline-none"
						/>
						<FiSearch className="absolute min-w-3 mt-3 ml-3" size="1.5rem" />
					</form>
					<FiHeart className="self-center mr-7" size="1.7rem" />
					<div className=" self-center w-10 h-10 rounded-full hover:bg-gray-200 flex items-center justify-center">
						<FiShoppingBag size="1.5rem" />
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-center bg-gray-100 py-2">
				<p className="text-sm font-medium self-center">Save Up to 40%</p>
				<p className="underline self-center text-xs mt-1 cursor-pointer">
					Shop All Our New Markdowns
				</p>
			</div>
		</div>
	);
};

export default Header;
