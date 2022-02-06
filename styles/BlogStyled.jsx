import styled from 'styled-components';
import { Container } from '@zeal-ui/core';

const BlogStyled = styled(Container)`
	.blogContainer {
		margin-bottom: 5rem;
	}

	.blogHeader {
		margin: 2rem 0rem;
	}

	.searchPostInput {
		font-size: 1rem;
		margin: 1rem 0rem;
	}

	.searchPostCategoryContainer {
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}

	.searchPostCategoryBtn {
		margin-right: 0.75rem;
	}

	.searchPostCategoryBtnActive {
		color: var(--zeal-color-white);
		background-color: var(--zeal-color-primary-dark);
	}

	.postContainer {
		background-color: var(--zeal-color-background-base-main);
		padding: 0.75rem;
		margin: 1rem 0rem;
		box-shadow: var(--zeal-shadow-light);
	}

	.postLink {
		font-size: 1.25rem;
	}

	.postDetailContainer {
		flex-wrap: wrap;
	}

	.postDate {
		margin-right: 0.25rem;
	}

	.postCategory {
		margin-left: 0.25rem;
	}

	.noPostFoundAlert {
		font-size: 1rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.tabletPotrait}) {
		.blogContainer {
			width: 70%;
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		.blogContainer {
			width: 50%;
		}
	}
`;

export default BlogStyled;
