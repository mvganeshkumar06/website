import { createCustomTheme } from '@zeal-ui/core';

const customTheme = createCustomTheme({
	initialColorMode: 'dark',
	color: {
		light: {
			highlight: {
				codeLine: 'hsl(240, 20%, 32%)',
			},
		},
		dark: {
			highlight: {
				codeLine: 'hsl(240, 20%, 28%)',
			},
		},
	},
});

export default customTheme;
