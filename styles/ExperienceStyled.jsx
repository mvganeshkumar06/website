import styled from 'styled-components';
import { Container } from '@zeal-ui/core';

export const ExperienceStyled = styled(Container)`
	width: 90%;
	background-color: var(--zeal-color-background-dark);
	border-radius: 0.25rem;
	padding: 0rem 1rem;
	margin: 1rem 0rem;

	.experienceDetailsListItem {
		margin-left: 0rem;
		padding-left: 0rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.tabletPotrait}) {
		width: 70%;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.tabletLandscape}) {
		.experienceHeading {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		width: 50%;
	}
`;
