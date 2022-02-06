import React from 'react';
import { PostHeaderStyled } from '../styles';
import { Container, Text, Badge } from '@zeal-ui/core';

const PostHeader = ({ title, date, category }) => {
	return (
		<PostHeaderStyled type="col" width="100%">
			<Text type="mainHeading">{title}</Text>
			<Container type="row" colCenter>
				<Text>{date}</Text>
				<Badge color="secondary" className="postCategory">
					{category}
				</Badge>
			</Container>
		</PostHeaderStyled>
	);
};

export default PostHeader;
