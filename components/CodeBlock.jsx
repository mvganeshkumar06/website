import React from 'react';
import { CodeBlockStyled } from '../styles';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/oceanicNext';
import { Container } from '@zeal-ui/core';
import prettier from 'prettier/standalone';
import babelParser from 'prettier/parser-babel';

const CodeBlock = ({ language, code, displayLineNo, highlightLines }) => {
	const lines = highlightLines ? highlightLines.split(',') : [],
		linesToHighlight = [];
	for (let i = 0; i < lines.length; i++) {
		const range = lines[i].split('-').map((ch) => parseInt(ch));
		if (range.length === 1) {
			linesToHighlight.push(range[0]);
		} else if (range.length === 2) {
			for (let i = range[0]; i <= range[1]; i++) {
				linesToHighlight.push(i);
			}
		}
	}

	let formattedCode = code;
	if (language !== 'bash') {
		formattedCode = prettier.format(code, {
			parser: 'babel',
			plugins: [babelParser],
			printWidth: 100,
			tabWidth: 4,
			useTabs: false,
			semi: true,
			singleQuote: true,
			quoteProps: 'as-needed',
			jsxSingleQuote: false,
			trailingComma: 'all',
			bracketSpacing: true,
			bracketSameLine: false,
			arrowParens: 'always',
			embeddedLanguageFormatting: 'auto',
		});
	}

	return (
		<CodeBlockStyled type="col" width="100%">
			<Highlight {...defaultProps} theme={theme} language={language} code={formattedCode}>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<pre className={`${className} pre`} style={style}>
						{tokens.map((line, i) => {
							const lineProps = getLineProps({ line, key: i });
							if (linesToHighlight.includes(i + 1)) {
								lineProps.className = `${lineProps.className} highlightLine`;
							}
							return (
								<Container type="col" key={i} {...lineProps}>
									<div>
										{displayLineNo && <span className="lineNo">{i + 1}</span>}
										{line.map((token, key) => (
											<span key={key} {...getTokenProps({ token, key })} />
										))}
									</div>
								</Container>
							);
						})}
					</pre>
				)}
			</Highlight>
		</CodeBlockStyled>
	);
};

export default CodeBlock;
