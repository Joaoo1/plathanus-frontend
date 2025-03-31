import { type StyleFunctionProps, extendTheme } from '@chakra-ui/react';

import { colors } from './colors';

const theme = extendTheme({
	fonts: {
		heading: `'Open Sans', sans-serif`,
		body: `'Roboto', sans-serif`,
	},
	colors,
	styles: {
		global: (props: StyleFunctionProps) => ({
			body: {
				bg: 'radial-gradient(at center, rgba(40, 114, 79, 0.05), rgb(32, 32, 36)) !important',
				color: props.theme.colors.gray[100],
			},
			'::-webkit-scrollbar': {
				webkitAppearance: 'none',
				width: '9px',
				height: '12px',
			},
			'::-webkit-scrollbar-thumb': {
				borderRadius: '4px',
				backgroundColor: props.theme.colors.gray[400],
			},
			'::-webkit-scrollbar-track': {
				backgroundColor: props.theme.colors.gray[500],
			},
			html: {
				bg: 'rgb(32, 32, 36)',
				scrollBehavior: 'smooth',
				height: '100%',
			},
			'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':
				{
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: '#ffffff',
					transition: 'background-color 5000s ease-in-out 0s',
					boxShadow: 'inset 0 0 20px 20px transparent',
				},
		}),
	},
});

export default theme;
