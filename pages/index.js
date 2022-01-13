import React from 'react';
import { Layout, Text, Container } from '@zeal-ui/core';
import { HomeStyled, SkillStyled } from '../styles/index';
import { educationItems, experienceItems, skillItems, projectItems } from '../util/index';
import { Education, Experience, Skill, Project } from '../components/index';

const Home = () => {
	return (
		<Layout title="Home">
			<HomeStyled type="col" width="100%" rowCenter>
				<Container type="col" width="100%" className="homeContainer">
					<Text>
						Hi there ! I'm M V Ganesh Kumar, a passionate full stack developer with
						strong problem solving skills. Welcome to my space on the web where I share
						my learnings, experiences and showcase my work.
					</Text>
					<Text type="subHeading1" className="homeSubHeading">
						🏫 Education
					</Text>
					{educationItems.map(({ title, duration, qualification, grade }) => {
						return (
							<Education
								key={title}
								title={title}
								duration={duration}
								qualification={qualification}
								grade={grade}
							/>
						);
					})}
					<Text type="subHeading1" className="homeSubHeading">
						🏢 Experience
					</Text>
					{experienceItems.map(({ title, duration, details }) => {
						return (
							<Experience
								key={title}
								title={title}
								duration={duration}
								details={details}
							/>
						);
					})}
					<Text type="subHeading1" className="homeSubHeading">
						⚙️ Skills
					</Text>
					<SkillStyled type="col" width="100%" className="skillContainer">
						{skillItems.map(({ title, values }) => {
							return <Skill key={title} title={title} values={values} />;
						})}
					</SkillStyled>
					<Text type="subHeading1" className="homeSubHeading">
						⚒️ Projects
					</Text>
					{projectItems.map(({ title, tags, details, source, live }) => {
						return (
							<Project
								key={title}
								title={title}
								tags={tags}
								details={details}
								source={source}
								live={live}
							/>
						);
					})}
				</Container>
			</HomeStyled>
		</Layout>
	);
};

export default Home;
