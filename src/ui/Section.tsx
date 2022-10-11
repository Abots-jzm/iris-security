import React from "react";
import styled from "styled-components";

interface Props {
	children: React.ReactNode;
	backgroundColor: string;
}

const Section = ({ children, backgroundColor }: Props) => {
	return (
		<Container backgroundColor={backgroundColor}>
			<Layout>{children}</Layout>
		</Container>
	);
};

export default Section;

const Layout = styled.div`
	margin: 0 auto;
	padding: 0 2.4rem;
	max-width: 104rem;
`;

interface IContainer {
	backgroundColor: string;
}

const Container = styled.section<IContainer>`
	width: 100%;
	background-color: ${(props) => props.backgroundColor};
`;
