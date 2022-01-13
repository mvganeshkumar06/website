import React from 'react';
import { Container, Text, List, ListItem } from '@zeal-ui/core';
import { EducationStyled } from '../styles/EducationStyled';

const Education = ({ title, duration, qualification, grade }) => {
	return (
		<EducationStyled type="col" width="100%">
			<Container type="col" width="100%" className="educationHeading">
				<Text type="subHeading2">{title}</Text>
				<Text>{duration}</Text>
			</Container>
			<List>
				<ListItem>{qualification}</ListItem>
				<ListItem>{grade}</ListItem>
			</List>
		</EducationStyled>
	);
};

export default Education;
