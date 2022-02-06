import styled from 'styled-components';
import { Container } from '@zeal-ui/core';

const ProjectStyled = styled(Container)`
	padding: 0rem 0.75rem 0.75rem 0.75rem;
	margin: 1rem 0rem;
	background-color: var(--zeal-color-background-base-main);
	border-radius: 0.25rem;
	box-shadow: var(--zeal-shadow-light);

	.projectButton {
		margin-right: 0.75rem;
	}
`;

export default ProjectStyled;
