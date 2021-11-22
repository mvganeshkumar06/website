import { Container, Text, InlineCode } from '@zeal-ui/core';

const Skill = ({ title, values }) => {
	return (
		<Container type="row" width="100%" colCenter className="skillValuesContainer">
			<Text>{title} – </Text>
			{values.map((value) => (
				<InlineCode key={value} color="secondary" className="skillValue">
					{value}
				</InlineCode>
			))}
		</Container>
	);
};

export default Skill;
