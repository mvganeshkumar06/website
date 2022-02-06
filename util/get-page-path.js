const getPagePath = (title) => {
	return title
		.split(' ')
		.map((word) => word.toLowerCase())
		.join('-');
};

export default getPagePath;
