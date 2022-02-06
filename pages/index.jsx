import React from 'react';
import { Layout, Container, Text } from '@zeal-ui/core';
import { HomeStyled } from '../styles';
import { projectItems } from '../util';
import { Project } from '../components';

const Home = () => {
	return (
		<Layout title="Home">
			<HomeStyled type="col" width="100%" rowCenter>
				<Container type="col" width="100%" className="homeContainer">
					<Container type="col" width="100%" className="homeHeader">
						<Text type="mainHeading" width="100%" center>
							Hi, I'm M V Ganesh Kumar
						</Text>
						<Text width="100%" center>
							I'm a Software Engineer. Sharing my learnings and experiences through
							blog.
						</Text>
					</Container>
					<Text type="subHeading1" className="homeSubHeading">
						Projects
					</Text>
					{projectItems.map(({ title, live, source, details }) => {
						return (
							<Project
								key={title}
								title={title}
								live={live}
								source={source}
								details={details}
							/>
						);
					})}
				</Container>
			</HomeStyled>
		</Layout>
	);
};

export default Home;
