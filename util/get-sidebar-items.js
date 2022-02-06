import { postCategories, postItems, getPagePath } from './index';

const getSidebarItemsByCategory = (category) => {
	return postItems
		.filter((post) => post.category === category)
		.map((post) => {
			return {
				item: post.title,
				to: `/blog/${getPagePath(post.title)}`,
			};
		});
};

const getSidebarItems = () => {
	const sidebarItems = {};
	[...postCategories.values()].map((category) => {
		const currSidebar = {
			links: [
				{
					label: `More on ${category}`,
					items: getSidebarItemsByCategory(category),
				},
			],
		};
		sidebarItems[category] = currSidebar;
	});
	return sidebarItems;
};

export default getSidebarItems;
