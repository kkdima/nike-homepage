module.exports = {
	// mode: 'jit',
	// purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			maxWidth: {
				// prettier-ignore
				'880': '880px',
			},
			spacing: {
				// prettier-ignore
				'13': '3.25rem',
				// prettier-ignore
				'880': '880px',
			},
			gridTemplateColumns: {},
			gridTemplateRows: {
				// Complex site-specific row configuration
				two: 'min-content 1fr',
			},
			colors: {
				'color-1': '#F8F8F8',
				'nike-light-gray': '#757575',
				'nike-ad': '#e7e7e7',
				'nike-white': '#FFFFFF',
				'nike-black': '#111111',
			},
			height: {
				// prettier-ignore
				'xxll': '550px',
			},
			fontFamily: {
				// prettier-ignore
				'futura': ['Futura-Bold'],
				// prettier-ignore
				'futura-condensed': ['Futura Condensed'],
				'helvetica-neue-medium-cond': ['HelveticaNeue MediumCond'],
				'helvetica-neue-medium': ['HelveticaNeue Medium'],
				'helvetica-neue-regular': ['HelveticaNeue Regular'],
				// prettier-ignore
				'tradegothic': ['TradeGothic LT'],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
