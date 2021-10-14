import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { GrFormClose } from 'react-icons/gr';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import {
	SearchVariants,
	SearchInputVariants,
	PopularSearchVariants,
} from './Header_Variants';

const popularSearch = [
	{ title: 'Air Force 1' },
	{ title: 'Jordan' },
	{ title: 'Air Max' },
	{ title: 'Blazer' },
];

const Search = (props) => {
	const { isSearchToggled, setIsSearchToggled } = { ...props };
	return (
		<AnimateSharedLayout>
			<AnimatePresence>
				<motion.div
					className="flex flex-col bg-white fixed inset-0 px-6 py-2 z-10"
					layout
					variants={SearchVariants}
				>
					<motion.div className="flex justify-end relative">
						<motion.input
							layout
							variants={SearchInputVariants}
							animate={isSearchToggled ? 'opened' : 'closed'}
							className={`input pl-10 bg-nike-light-gray-bg border-none rounded-full`}
							type="text"
							placeholder="Search"
						/>
						<motion.div
							className="absolute max-w-0"
							initial={{ right: 2, top: 2, opacity: 0 }}
							animate={{ left: 9, top: 7, opacity: 1 }}
							transition={{
								duration: 0.4,
							}}
						>
							<FiSearch size="1.5rem" />
						</motion.div>
						<motion.button
							layout
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ type: 'spring', duration: 0.4, delay: 0.2 }}
							className="cursor-pointer bg-nike-light-gray-bg hover:bg-nike-light-gray-bg-hovered rounded-full p-2 ml-3"
							onClick={() => {
								setIsSearchToggled(!isSearchToggled);
							}}
						>
							<GrFormClose size="1.4rem" />
						</motion.button>
					</motion.div>

					<motion.div
						variants={PopularSearchVariants}
						initial="initial"
						animate="opened"
						className="ml-3"
					>
						<motion.h2 className=" text-gray-700 mb-2 mt-12">
							Popular Search Terms
						</motion.h2>
						{popularSearch.map((term) => (
							<motion.p
								className="text-xl my-0.5 cursor-pointer"
								variants={PopularSearchVariants}
							>
								{term.title}
							</motion.p>
						))}
					</motion.div>
				</motion.div>
			</AnimatePresence>
		</AnimateSharedLayout>
	);
};

export default Search;
