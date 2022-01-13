import styled from 'styled-components';
import { Container } from '@zeal-ui/core';

export const HomeStyled = styled(Container)`
	.homeContainer {
		margin-top: 2rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.tabletPotrait}) {
		.homeContainer {
			width: 70%;
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		.homeContainer {
			width: 50%;
		}
	}
`;
