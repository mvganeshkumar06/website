import React from 'react';
import { ZealProvider } from '@zeal-ui/core';
import { customTheme, headerItems, footerItems } from '../util';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
	return (
		<ZealProvider
			customTheme={customTheme}
			headerContents={headerItems}
			footerContents={footerItems}
		>
			<Head>
				<title>M V Ganesh Kumar</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="My space on the web where I share my learnings, experiences and showcase my work."
				/>
				<link rel="shortcut icon" type="image/jpg" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</ZealProvider>
	);
};

export default MyApp;
