import styled from 'styled-components';

const ImageStyled = styled.img`
	width: ${({ sizes }) => (sizes && sizes[0] ? `${sizes[0]}` : '')};
	height: auto;
	margin: 0.75rem 0rem;
	object-fit: contain;

	@media (min-width: ${({ theme }) => theme.breakpoint.tabletPotrait}) {
		width: ${({ sizes }) => (sizes && sizes[1] ? `${sizes[1]}` : '')};
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.tabletLandscape}) {
		width: ${({ sizes }) => (sizes && sizes[2] ? `${sizes[2]}` : '')};
	}
`;

export default ImageStyled;
