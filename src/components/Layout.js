import React from 'react';

import Header from './Header';
import Footer from './Footer/Footer_main';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
// import Cart from "./Cart";

const Layout = (props) => (
	<AnimatePresence>
		<AnimateSharedLayout type="crossfade">
			{/* <Header /> */}
			{/* <Cart /> */}
			<div className="">{props.children}</div>
			<Footer />
		</AnimateSharedLayout>
	</AnimatePresence>
);

export default Layout;
