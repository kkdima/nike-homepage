import React from 'react';

const FirstRow = () => {
	return (
		<div className="hidden lg:flex bg-nike-light-gray-bg justify-between py-2 px-12">
			<div className="flex justify-between w-16">
				<img
					width="22px"
					src="/images/jordan.svg"
					alt="jordan logo"
					className="cursor-pointer"
				/>
				<img
					width="21px"
					src="/images/converse_logo.svg"
					alt="converse logo"
					className="cursor-pointer"
				/>
			</div>
			<div className="text-xs flex px-5 self-center">
				<p className="cursor-pointer">Help</p>
				<div className="w-px h-3 bg-gray-400 mx-2"></div>
				<p className="cursor-pointer">Join us</p>
				<div className="w-px h-3 bg-gray-400 mx-2"></div>
				<p className="cursor-pointer">Sign In</p>
			</div>
		</div>
	);
};

export default FirstRow;
