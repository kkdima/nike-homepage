import React from 'react';
import Button_shop from '../ui/button_shop';

const Section_One = (props) => {
	return (
		<div
			className="h-xxll bg-cover cursor-pointer flex flex-col"
			style={{
				backgroundImage: `url(${props.props.response.results[1].urls.full})`,
			}}
		>
			<div className="flex flex-col text-white h-full p-12 justify-end">
				<p className="uppercase text-5xl font-futura tracking-tighter">
					Yardrunners <br /> collection
				</p>
				<p className="my-5">
					Styles inspired by storied HBCUs and their <br /> trailblizing
					Yardrunner alums.
				</p>
				<Button_shop />
			</div>
		</div>
	);
};

export default Section_One;
