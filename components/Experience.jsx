import React from 'react';
import { Container, Text, List, ListItem } from '@zeal-ui/core';
import { ExperienceStyled } from '../styles/ExperienceStyled';

const Experience = ({ title, duration, details }) => {
	return (
		<ExperienceStyled type="col" width="100%">
			<Container type="col" width="100%" className="experienceHeading">
				<Text type="subHeading2">{title}</Text>
				<Text>{duration}</Text>
			</Container>
			<List>
				{details.map((info) => {
					return <ListItem key={info}>{info}</ListItem>;
				})}
			</List>
		</ExperienceStyled>
	);
};

export default Experience;
