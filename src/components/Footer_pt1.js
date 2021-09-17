import React, { useState, useRef } from 'react';
import Footer_Two from './Footer_pt2';

const Footer_One = () => {
	const [hovered, setHovered] = useState(false);

	const ToggleHiddenMenu = () => {
		setHovered(!hovered);
	};

	return (
		<div className="font-Helvetica-Neue">
			<div className="w-880 m-auto">
				<div
					className="grid grid-cols-4 gap-5 grid-rows-two grid-flow-col mt-28"
					onPointerLeave={() => ToggleHiddenMenu()}
					onPointerEnter={() => ToggleHiddenMenu()}
				>
					<h4 className="font-medium row-start-1">Featured</h4>
					<ul role="list" className="text-nike-light-gray">
						<li className="mb-3 cursor-pointer">Air Force 1</li>
						<li className="mb-3 cursor-pointer">Jordan 1</li>
						<li className="mb-3 cursor-pointer">Air MAx 2090</li>
						<li className="mb-3 cursor-pointer">Air MAx 270</li>
						<div
							aria-hidden={`${hovered ? 'true' : 'false'}`}
							className={`${
								hovered ? 'visible opacity-1' : 'hidden opacity-0'
							} transform transition delay-300 duration-900 ease-in-out`}
						>
							<li className="mb-3 cursor-pointer">Jordan 1</li>
							<li className="mb-3 cursor-pointer">Air MAx 2090</li>
							<li className="mb-3 cursor-pointer">Air MAx 270</li>
						</div>
					</ul>
					<h4 className="font-medium row-start-1">Shoes</h4>
					<ul className="text-nike-light-gray" role="list">
						<li className="mb-3 cursor-pointer">All Shoes</li>
						<li className="mb-3 cursor-pointer">Jordan Shoes</li>
						<li className="mb-3 cursor-pointer">Running Shoes</li>
						<li className="mb-3 cursor-pointer">Basketball Shoes</li>
					</ul>
					<h4 className="font-medium row-start-1">Clothing</h4>
					<ul role="list" className="text-nike-light-gray">
						<li className="mb-3 cursor-pointer">All Clothing</li>
						<li className="mb-3 cursor-pointer">Tops & T-Shirts</li>
						<li className="mb-3 cursor-pointer">Shorts</li>
						<li className="mb-3 cursor-pointer">Hoodies & Pullovers</li>
						<div
							aria-hidden={`${hovered ? 'true' : 'false'}`}
							className={`${
								hovered ? 'visible opacity-1' : 'hidden opacity-0'
							} transform transition delay-300 duration-900 ease-in-out`}
						>
							<li className="mb-3 cursor-pointer">Shorts</li>
							<li className="mb-3 cursor-pointer">Air MAx 270</li>
							<li className="mb-3 cursor-pointer">Jordan</li>
							<li className="mb-3 cursor-pointer">Kids' Basketball Shoes</li>
						</div>
					</ul>

					<h4 className="font-medium row-start-1">Kids'</h4>
					<ul role="list" className="text-nike-light-gray">
						<li className="mb-3 cursor-pointer">Infant & Toddlers Shoes</li>
						<li className="mb-3 cursor-pointer">Kids' Shoes</li>
						<li className="mb-3 cursor-pointer">Kids' Basketball Shoes</li>
						<li className="mb-3 cursor-pointer">Kids' Running Shoes</li>
						<div
							aria-hidden={`${hovered ? 'true' : 'false'}`}
							className={`${
								hovered ? 'visible opacity-1' : 'hidden opacity-0'
							} transform transition delay-300 duration-900 ease-in-out`}
						>
							<li className="mb-3 cursor-pointer">Jordan 1</li>
							<li className="mb-3 cursor-pointer">Air MAx 2090</li>
							<li className="mb-3 cursor-pointer">Air MAx 270</li>
						</div>
					</ul>
				</div>
			</div>
			<Footer_Two />
		</div>
	);
};

export default Footer_One;
