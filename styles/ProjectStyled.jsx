import styled from 'styled-components';
import { Container } from '@zeal-ui/core';

export const ProjectStyled = styled(Container)`
	width: 90%;
	background-color: var(--zeal-color-background-dark);
	border-radius: 0.25rem;
	padding: 0rem 1rem;
	margin: 1rem 0rem;

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

	@media (min-width: ${({ theme }) => theme.breakpoint.tabletPotrait}) {
		width: 70%;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		width: 50%;
	}
`;
