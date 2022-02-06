import React from 'react';
import { Container, Text, List, ListItem, Button } from '@zeal-ui/core';
import { ProjectStyled } from '../styles';
import Link from 'next/link';

const Project = ({ title, live, source, details }) => {
	return (
		<ProjectStyled type="col" width="100%" height="auto">
			<Text type="subHeading2" width="100%">
				{title}
			</Text>
			<Container type="row" width="100%">
				{live && (
					<Link href={live}>
						<a target="_blank">
							<Button className="projectButton">Live</Button>
						</a>
					</Link>
				)}
				{source && (
					<Link href={source}>
						<a target="_blank">
							<Button className="projectButton">Source Code</Button>
						</a>
					</Link>
				)}
			</Container>
			<List>
				{details.map((info) => {
					return <ListItem key={info}>{info}</ListItem>;
				})}
			</List>
		</ProjectStyled>
	);
};

export default Project;
