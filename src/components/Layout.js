import React from 'react';

import Header from './Header';
import Footer_One from './Footer_pt1';
// import Cart from "./Cart";

const Layout = (props) => (
	<div>
		<Header />
		{/* <Cart /> */}
		<div className="">{props.children}</div>
		<Footer_One />
	</div>
);

export default Layout;
