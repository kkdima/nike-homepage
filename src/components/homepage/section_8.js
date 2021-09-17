import React from 'react';

const Section_Eight = (props) => {
	return (
		<div className="grid grid-cols-3 gap-4 mt-16">
			<div>
				<div
					className="w-full h-72 bg-cover"
					style={{
						backgroundImage: `url(${props.props.response.results[1].urls.full})`,
					}}
				/>
				<p className="text-xl mt-5">Exclusive Nike Shopping Perks</p>
			</div>
			<div>
				<div
					className="w-full h-72 bg-cover"
					style={{
						backgroundImage: `url(${props.props.response.results[14].urls.full})`,
					}}
				/>
				<p className="text-xl mt-5">First & Exclusive Access</p>
			</div>
			<div>
				<div
					className="w-full h-72 bg-cover"
					style={{
						backgroundImage: `url(${props.props.response.results[13].urls.full})`,
					}}
				/>
				<p className="text-xl mt-5">Member Rewards & Offers</p>
			</div>
		</div>
	);
};

export default Section_Eight;
