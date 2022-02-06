const categories = [
	'Algorithm',
	'Complexity Analysis',
	'Data Structure',
	'General',
	'JavaScript',
	'React JS',
];

const postCategories = new Set();

for (const category of categories) {
	postCategories.add(category);
}

export default postCategories;
