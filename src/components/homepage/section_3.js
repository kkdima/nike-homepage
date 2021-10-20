import React from 'react';
import Image from 'next/image';
import Button_shop from '../ui/button_shop';

const Section_Three = (props) => {
	return (
		<div className="">
			<p className="text-2xl mt-16 mb-5">Trending Now</p>
			<div className="lg:grid lg:grid-cols-2 lg:gap-4">
				<div className="relative h-xxll border flex relative">
					<div className="w-1/2 relative">
						<Image
							src={props.props.response.results[7].urls.full}
							layout="fill"
							objectFit="cover"
							alt="nike"
						/>
					</div>
					<div className="w-1/2 relative">
						<Image
							src={props.props.response.results[11].urls.full}
							layout="fill"
							objectFit="cover"
							alt="nike"
						/>
					</div>
					<div className="absolute left-9 bottom-0">
						<p className="text-white text-xl">New Fits for Fall</p>
						<Button_shop
							styles="self-center my-6"
							title="Shop"
							buttonTextColor="black"
							buttonColor="bg-white"
						/>
					</div>
				</div>
				<div className="hidden lg:flex relative h-xxll border flex relative">
					<div className="w-full relative">
						<Image
							src={props.props.response.results[9].urls.full}
							layout="fill"
							objectFit="cover"
							alt="nike"
						/>
					</div>
					<div className="absolute left-9 bottom-0">
						<p className="text-white text-xl">New Fits for Fall</p>
						<Button_shop
							styles="self-center my-6"
							title="Shop"
							buttonColor="bg-white"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section_Three;
