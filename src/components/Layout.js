import React from 'react';

import Header from './Header';
// import Footer from "./Footer";
// import Cart from "./Cart";

const Layout = (props) => (
	<div>
		<Header />
		{/* <Cart /> */}
		<div className="">{props.children}</div>
		{/* <Footer /> */}
	</div>
);

export default Layout;
