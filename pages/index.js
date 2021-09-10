import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { createApi } from 'unsplash-js';

// import fetch from 'node-fetch';
// global.fetch = fetch;

// import Header from '../src/components/Header';
// import Layout from '../src/components/Layout';

export default function Home() {
	const [data, setData] = useState(null);

	const unsplash = createApi({
		accessKey: process.env.NEXT_PUBLIC_ACCESS_KEY,
	});

	const fetchImages = async () => {
		await unsplash.search
			.getPhotos({
				query: 'sport',
				orientation: 'landscape',
				page: 1,
				perPage: 10,
				color: 'black_and_white',
			})
			.then((result) => {
				if (result.type === 'success') {
					setData(result);
					console.log('fetched');
				}
			})
			.catch(() => {
				console.log('something went wrong');
			});
	};

	useEffect(() => {
		fetchImages();
	}, []);

	if (data === null) {
		return <div>Loading...</div>;
	} else if (data.errors) {
		return (
			<div>
				<div>{data.errors[0]}</div>
			</div>
		);
	} else {
		return (
			<div className="flex flex-col">
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<main className="flex flex-col px-12">
					<div
						className="w-full h-xxll bg-cover pointer"
						style={{
							backgroundImage: `url(${data.response.results[1].urls.full})`,
						}}
					></div>
				</main>
			</div>
		);
	}
}
