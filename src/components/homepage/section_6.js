import React from 'react';
import styles from './section_6.module.css';

const Section_Six = () => {
	const images = [
		{
			src: '/images/section_6/Screen Shot 2021-09-14 at 6.14.00 PM.png',
			id: 1,
			name: "Kids'",
		},
		{
			src: 'images/section_6/Screen Shot 2021-09-14 at 6.14.06 PM.png',
			id: 2,
			name: "Men's",
		},
		{
			src: '/images/section_6/Screen Shot 2021-09-14 at 6.14.16 PM.png',
			id: 3,
			name: "Women's",
		},
	];

	return (
		<div className="text-xl font-medium overflow-x-scroll">
			<h3 className="text-2xl mt-16 mb-5">Matching Sets</h3>
			<div
				className={`flex ${styles.container} overflow-x-scroll smoothScrolling`}
			>
				{images.map((department) => (
					<div
						className={`flex-shrink-0 w-2/3 mr-6 smoothScrolling font-medium cursor-pointer ${styles.child}`}
						key={department.id}
					>
						<img
							src={department.src}
							alt=""
							className={`object-contain w-full`}
						/>
						<p className="mt-6">{department.name}</p>
					</div>
				))}
			</div>
			{/* <div className="flex overflow-scroll">
				<div className="w-96 flex-shrink-0 h-40 bg-gray-200 border mx-3"></div>
				<div className="w-96 flex-shrink-0 h-40 bg-gray-200 border mx-3"></div>
				<div className="w-96 flex-shrink-0 h-40 bg-gray-200 border mx-3"></div>
			</div> */}
		</div>
	);
};

export default Section_Six;
