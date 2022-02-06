import styled from 'styled-components';
import { Container } from '@zeal-ui/core';

const CodeBlockStyled = styled(Container)`
	.pre {
		width: 100%;
		padding: 1rem 1rem 0rem 1rem;
		margin: 1rem 0rem;
		overflow: auto;
		border-radius: 0.25rem;
	}

	.lineNo {
		padding-right: 1rem;
		user-select: none;
		opacity: 0.75;
	}

	.highlightLine {
		background-color: var(--zeal-color-highlight-code-line);
		padding-left: 0.75rem;
		margin-left: -1rem;
		padding-right: 1rem;
		margin-right: -1rem;
		border-left: 0.25rem solid var(--zeal-color-accent-main);
	}
`;

export default CodeBlockStyled;
