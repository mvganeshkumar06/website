import React, { useState, useEffect } from 'react';
import { Layout, Container, Text, Input, Badge, Alert, Button } from '@zeal-ui/core';
import { BlogStyled } from '../../styles';
import { postItems, postCategories } from '../../util';

const Blog = () => {
	const sortedPosts = postItems.sort((first, second) => {
		if (first.id > second.id) {
			return -1;
		}
		return 1;
	});

	const [posts, setPosts] = useState(sortedPosts);
	const [title, setTitle] = useState('');
	const [categories, setCategories] = useState(new Set());

	useEffect(() => {
		if (title.length === 0) {
			setPosts(sortedPosts);
		}
	}, [title]);

	const searchPostByTitle = (event) => {
		if (event.key === 'Enter') {
			const resultPosts = posts.filter((post) =>
				post.title.toLowerCase().includes(title.toLowerCase()),
			);
			if (resultPosts.length > 0) {
				setPosts([...resultPosts]);
			} else {
				setPosts([]);
			}
		}
	};

	const updateCategories = (category) => {
		if (categories.has(category)) {
			categories.delete(category);
		} else {
			categories.add(category);
		}
		setCategories(new Set([...categories]));
	};

	useEffect(() => {
		if (categories.size === 0) {
			setPosts(sortedPosts);
		} else if (categories.size > 0) {
			searchPostByCategories();
		}
	}, [categories]);

	const searchPostByCategories = () => {
		const resultPosts = sortedPosts.filter((post) => categories.has(post.category));
		if (resultPosts.length > 0) {
			setPosts([...resultPosts]);
		} else {
			setPosts([]);
		}
	};

	return (
		<Layout title="Blog">
			<BlogStyled type="col" width="100%" rowCenter>
				<Container type="col" width="100%" className="blogContainer">
					<Container type="col" width="100%" className="blogHeader">
						<Input
							width="100%"
							type="text"
							placeholder={`Search posts [${posts.length}]`}
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							onKeyPress={(e) => searchPostByTitle(e)}
							className="searchPostInput"
						/>
						<Container
							type="row"
							width="100%"
							colCenter
							className="searchPostCategoryContainer"
						>
							<Button
								key="all"
								className={`searchPostCategoryBtn ${
									categories.size === 0 ? 'searchPostCategoryBtnActive' : ''
								}`}
							>
								All Posts
							</Button>
							{[...postCategories.values()].map((category) => {
								return (
									<Button
										key={category}
										onClick={() => updateCategories(category)}
										className={`searchPostCategoryBtn ${
											categories.has(category)
												? 'searchPostCategoryBtnActive'
												: ''
										}`}
									>
										{category}
									</Button>
								);
							})}
						</Container>
					</Container>
					{posts.length > 0 ? (
						posts.map(({ id, title, date, category }) => {
							const postLink =
								'/blog/' +
								title
									.split(' ')
									.map((word) => word.toLowerCase())
									.join('-');
							return (
								<Container
									type="col"
									width="100%"
									key={id}
									className="postContainer"
								>
									<a href={postLink} className="postLink">
										{title}
									</a>
									<Container type="row" colCenter className="postDetailContainer">
										<Text className="postDate">{date}</Text>
										<Badge color="secondary" className="postCategory">
											{category}
										</Badge>
									</Container>
								</Container>
							);
						})
					) : (
						<Alert type="warning" width="100%" className="noPostFoundAlert">
							<Text>Sorry no post found ! Try again 🙂</Text>
						</Alert>
					)}
				</Container>
			</BlogStyled>
		</Layout>
	);
};

export default Blog;
