import styled from 'styled-components';
import { Container } from '@zeal-ui/core';

export const HomeStyled = styled(Container)`
	.homeSubHeading {
		width: 90%;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.tabletPotrait}) {
		.homeSubHeading {
			width: 70%;
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		.homeSubHeading {
			width: 50%;
		}
	}
`;
