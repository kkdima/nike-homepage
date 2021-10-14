import React from 'react';

const FirstRow = () => {
	return (
		<div className="hidden lg:block bg-gray-100 flex justify-between py-2 px-12">
			<div>logos</div>
			<div className="text-xs flex px-5 self-center">
				<p>Help</p>
				<div className="w-px h-3 bg-gray-400 mx-2"></div>
				<p>Join us</p>
				<div className="w-px h-3 bg-gray-400 mx-2"></div>
				<p>Sign In</p>
			</div>
		</div>
	);
};

export default FirstRow;
