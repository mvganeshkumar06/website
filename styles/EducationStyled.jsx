import styled from 'styled-components';
import { Container } from '@zeal-ui/core';

export const EducationStyled = styled(Container)`
	padding: 0rem 1rem 1rem 1rem;
	margin: 1rem 0rem;
	background-color: var(--zeal-color-background-main);
	border-radius: 0.25rem;
	box-shadow: var(--zeal-shadow-light);

	@media (min-width: ${({ theme }) => theme.breakpoint.tabletLandscape}) {
		.educationHeading {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}
`;
