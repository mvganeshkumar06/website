import styled from 'styled-components';
import { Container } from '@zeal-ui/core';

export const SkillStyled = styled(Container)`
	padding: 0.5rem 1rem;
	margin: 1rem 0rem;
	background-color: var(--zeal-color-background-main);
	border-radius: 0.25rem;
	box-shadow: var(--zeal-shadow-light);

	.skillValuesContainer {
		flex-wrap: wrap;
	}

	.skillValue {
		margin-left: 0.25rem;
		margin-right: 0.25rem;
	}
`;
