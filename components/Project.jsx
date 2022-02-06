import React from 'react';
import { Container, Text, List, ListItem, Button, InlineCode } from '@zeal-ui/core';
import { ProjectStyled } from '../styles/ProjectStyled';
import Link from 'next/link';

const Project = ({ title, tags, details, source, live }) => {
	return (
		<ProjectStyled type="col" width="100%" height="auto">
			<Text type="subHeading2" width="100%">
				{title}
			</Text>
			{tags && (
				<Container type="row" width="100%" className="projectTagsContainer">
					{tags.map((tag) => (
						<InlineCode color="secondary" className="projectTag" key={tag}>
							{tag}
						</InlineCode>
					))}
				</Container>
			)}
			<List styleType="none">
				{details.map((info) => {
					return (
						<ListItem key={info} className="projectDetailsListItem">
							{info}
						</ListItem>
					);
				})}
			</List>
			<Container type="row" width="100%">
				{source && (
					<Link href={source}>
						<a target="_blank">
							<Button className="projectButton">Source Code</Button>
						</a>
					</Link>
				)}
				{live && (
					<Link href={live}>
						<a target="_blank">
							<Button className="projectButton">Live</Button>
						</a>
					</Link>
				)}
			</Container>
		</ProjectStyled>
	);
};

export default Project;
