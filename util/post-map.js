import postItems from './post-items';

const postMap = new Map();

for (const post of postItems) {
	postMap.set(post.id, post);
}

export default postMap;
