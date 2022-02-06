import styled from 'styled-components';
import { Container } from '@zeal-ui/core';

const HomeStyled = styled(Container)`
	.homeContainer {
		margin-bottom: 5rem;
	}

	.homeHeader {
		margin: 2rem 0rem;
	}

	.homeHeader p {
		margin: 0rem;
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

export default HomeStyled;
