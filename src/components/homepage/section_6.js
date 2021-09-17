import React from 'react';

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
		<div className="text-xl font-medium">
			<p className="text-2xl mt-16 mb-5">Matching Sets</p>
			<div className="grid grid-cols-3 gap-4">
				{images.map((department) => (
					<div className="font-medium cursor-pointer" key={department.id}>
						<img src={department.src} alt="" className="w-full" />
						<p className="mt-6">{department.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Section_Six;
