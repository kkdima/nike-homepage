import React, { useState, useEffect } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Promo from './Promo';
import FirstRow from './FirstRow';
import Search from './Search';
import SearchOpened from './SearchOpened';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { HeaderHolderVariants } from './Header_Variants';

const Header = () => {
	const [width, setWidth] = useState(0);
	const [isSearchToggled, setIsSearchToggled] = useState(false);
	const [isHamburgerToggle, setIsHamburgerToggle] = useState(false);
	const [isScrolledY, setIsScrolledY] = useState(false);

	useEffect(() => {
		const resizeListener = () => {
			setWidth(window.innerWidth);
		};
		const scrolledY = () => {
			if (typeof window !== 'undefined') {
				window.addEventListener('scroll', () =>
					setIsScrolledY(window.pageYOffset > 0)
				);
				console.log('window is defined');
			}
		};
		resizeListener();
		scrolledY();
		window.addEventListener('resize', resizeListener);
		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, [width, isScrolledY]);

	return (
		<motion.div className="w-full">
			<FirstRow />

			{/* Second row: */}
			<motion.div
				className="py-2 px-12 flex justify-between"
				// variants={HeaderHolderVariants}
				// animate={isSearchToggled ? 'opened' : 'closed'}
			>
				{/* Logo: */}
				<AnimatePresence>
					{!isSearchToggled && (
						<motion.div
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -40 }}
							transition={{ ease: 'easeInOut', duration: 0.2 }}
							layout
							className="w-14 flex"
						>
							<motion.img
								src="/nike-4-logo-svg-vector.svg"
								alt="nike-logo"
								className="self-center"
							/>
						</motion.div>
					)}
				</AnimatePresence>

				{/* <ul className="hidden lg:flex flex justify-between self-center font-medium">
					<li className="mr-5 whitespace-nowrap">New Releases</li>
					<li className="mr-5 pointer">Men</li>
					<li className="mr-5">Women</li>
					<li className="mr-5">Kids</li>
					<li className="mr-5">Customize</li>
					<li className="mr-5">Sale</li>
					<li className="mr-5 whitespace-nowrap hidden gradation:visible">
						Back to School
					</li>
				</ul> */}

				<motion.div className="flex">
					<motion.div className="w-9 h-9 mr-3 rounded-full hover:bg-nike-light-gray-bg-hovered">
						<FiHeart className="m-auto mt-2 hidden lg:flex" size="1.4rem" />
					</motion.div>

					<motion.div className=" self-center rounded-full mr-3 w-9 h-9 hover:bg-nike-light-gray-bg-hovered flex items-center justify-center">
						<FiShoppingBag size="1.4rem" />
					</motion.div>

					{isSearchToggled ? (
						<SearchOpened
							isSearchToggled={isSearchToggled}
							setIsSearchToggled={setIsSearchToggled}
						/>
					) : (
						<Search
							isSearchToggled={isSearchToggled}
							setIsSearchToggled={setIsSearchToggled}
						/>
					)}

					{!isSearchToggled && (
						<motion.div className="w-9 h-9 rounded-full hover:bg-nike-light-gray-bg-hovered">
							<HamburgerMenu
								className="lg:hidden mt-3 ml-2"
								isOpen={isHamburgerToggle}
								menuClicked={() => setIsHamburgerToggle(!isHamburgerToggle)}
								width={20}
								height={14}
								strokeWidth={2}
								rotate={0}
								color="black"
								borderRadius={0}
								animationDuration={0.5}
							/>
						</motion.div>
					)}
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Header;
