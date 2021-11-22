import styled from 'styled-components';
import { Container } from '@zeal-ui/core';

export const SkillStyled = styled(Container)`
	width: 90%;
	background-color: var(--zeal-color-background-dark);
	border-radius: 0.25rem;
	padding: 0.5rem 1rem;
	margin: 1rem 0rem;

	.skillValuesContainer {
		flex-wrap: wrap;
	}

	.skillValue {
		margin-left: 0.25rem;
		margin-right: 0.25rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.tabletPotrait}) {
		width: 70%;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		width: 50%;
	}
`;
