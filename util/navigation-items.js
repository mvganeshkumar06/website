const headerContents = {
	title: 'M V Ganesh Kumar',
	logo: {
		src: '/profile.jpg',
		alt: 'profile',
	},
	links: [
		{
			item: 'Home',
			to: '/',
			linkType: 'internal',
			position: 'right',
		},
		{
			item: 'Blogs',
			to: 'https://mvganeshkumar.hashnode.dev/',
			linkType: 'external',
			position: 'right',
		},
	],
};

const footerContents = {
	logo: {
		src: '/profile.jpg',
		alt: 'profile',
	},
	title: 'M V Ganesh Kumar',
	links: [
		{
			title: 'Social',
			items: [
				{
					item: 'Github',
					to: 'https://github.com/mvganeshkumar06',
					linkType: 'external',
				},
				{
					item: 'LinkedIn',
					to: 'https://linkedin.com/in/mvganeshkumar06',
					linkType: 'external',
				},
				{
					item: 'Twitter',
					to: 'https://twitter.com/mvganeshkumar06',
					linkType: 'external',
				},
			],
		},
	],
};

export { headerContents, footerContents };
