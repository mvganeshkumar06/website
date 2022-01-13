import styled from 'styled-components';
import { Container } from '@zeal-ui/core';

export const ProjectStyled = styled(Container)`
	padding: 0rem 1rem 1rem 1rem;
	margin: 1rem 0rem;
	background-color: var(--zeal-color-background-main);
	border-radius: 0.25rem;
	box-shadow: var(--zeal-shadow-light);

	.projectTagsContainer {
		flex-wrap: wrap;
	}

	.projectTag {
		margin-left: 0rem;
		margin-right: 0.5rem;
	}

	.projectDetailsListItem {
		margin-left: 0rem;
		padding-left: 0rem;
	}

	.projectButton {
		margin-right: 0.5rem;
	}
`;
