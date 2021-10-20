import React from 'react';
import Image from 'next/image';
import Button_shop from '../ui/button_shop';

const Section_Five = (props) => {
	return (
		<div className="">
			<p className="text-2xl mt-16 mb-5">For Everybody, Everywhere</p>
			<div className="relative">
				<video
					// ref={vidRef}
					autoPlay
					src={require('../../../public/1057289005-preview.mp4')}
					type="video/mp4"
					loop
					muted
					style={{
						width: '100%',
					}}
				/>
				<div className="absolute left-9 bottom-0 mb-8">
					<p className="uppercase text-5xl font-futura text-white tracking-tighter">
						Presenting <br />
						Nike Fleece
					</p>
					<p className="my-5 text-white">
						We all have to go sweats &amp; a fav hoodie, <br />
						but Nike Fleece is so much more.
					</p>
					<div>
						<Button_shop styles="mr-5" />
						<Button_shop title="Explore" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section_Five;
