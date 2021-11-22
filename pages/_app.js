import { ZealProvider } from '@zeal-ui/core';
import Head from 'next/head';
import customTheme from '../custom-theme';
import { headerContents, footerContents } from '../util/navigation-items';

const MyApp = ({ Component, pageProps }) => {
	return (
		<ZealProvider
			customTheme={customTheme}
			headerContents={headerContents}
			footerContents={footerContents}
			disableSidebar
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
