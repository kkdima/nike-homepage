module.exports = {
	// mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				// prettier-ignore
				'500': '500px',
			},
			colors: {
				'color-1': '#F8F8F8',
			},
			height: {
				// prettier-ignore
				'xxll': '550px',
			},
		},
	},
	// variants: {
	// 	extend: {
	// 		backgroundColor: ['even', 'odd'],
	// 		width: ['even', 'odd'],
	// 		height: ['even', 'odd'],
	// 		margin: ['even', 'odd'],
	// 		marginRight: ['even'],
	// 	},
	// },
	plugins: [require('@tailwindcss/forms')],
};
