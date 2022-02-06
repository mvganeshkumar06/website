import { sidebarItems, postMap } from '../util';
import { Layout } from '@zeal-ui/core';
import { PostHeader } from './index';

const PostContainer = ({ id, children }) => {
	const { title, date, category } = postMap.get(id);
	const sidebarContents = sidebarItems[category];
	return (
		<Layout title={title} sidebarContents={sidebarContents} enableSidebar enableOverview>
			<PostHeader title={title} date={date} category={category} />
			{children}
		</Layout>
	);
};

export default PostContainer;
