import React from "react";
import Section from "../../ui/Section";
import styled from "styled-components";

interface Props {
	color: string;
	title: string;
	children: React.ReactNode;
	illustration: string;
}

const Service = ({ color, title, children, illustration }: Props) => {
	return (
		<Section backgroundColor={color}>
			<Container>
				<div>
					<h3>{title}</h3>
					<p>{children}</p>
					<CTAButtons>
						<MainCTA color={color}>Get pricing</MainCTA>
						<SecondaryCTA color={color}>Speak With an Expert</SecondaryCTA>
					</CTAButtons>
				</div>
				<div>
					<img src={illustration} alt="illustration" />
				</div>
			</Container>
		</Section>
	);
};

export default Service;

interface ICTAButton {
	color: string;
}

const CTAButton = styled.button<ICTAButton>`
	padding: 1.6rem 2rem;
	font-size: 2rem;
	font-weight: 500;
	border-radius: 4rem;

	@media (hover: hover) {
		cursor: pointer;
	}

	@media only screen and (max-width: 900px) {
		font-size: 1.6rem;
	}
`;

const MainCTA = styled(CTAButton)`
	background-color: white;
	color: ${(props) => props.color};
	border: none;

	@media (hover: hover) {
		&:hover {
			background-color: rgba(255, 255, 255, 0.9);
		}
	}
`;

const SecondaryCTA = styled(CTAButton)`
	color: white;
	background-color: ${(props) => props.color};
	border: 2px solid white;

	@media (hover: hover) {
		&:hover {
			color: rgba(255, 255, 255, 0.9);
			border-color: rgba(255, 255, 255, 0.9);
		}
	}
`;

const CTAButtons = styled.div`
	display: flex;
	gap: 2.4rem;

	@media only screen and (max-width: 900px) {
		flex-direction: column;
		gap: 1.4rem;
	}
`;

const Container = styled.div`
	min-height: 44.5rem;
	display: flex;
	align-items: center;
	gap: 8vw;
	padding: 2.4rem 0;
	color: white;

	h3 {
		font-size: 4rem;
		font-weight: 700;
	}

	p {
		margin: 2rem 0;
		font-size: 2.4rem;
	}

	@media only screen and (max-width: 900px) {
		flex-direction: column-reverse;
		gap: 1.4rem;
		text-align: center;

		h3 {
			font-size: 3.2rem;
		}

		p {
			font-size: 2rem;
			margin: 1.4rem 0;
		}

		img {
			height: 20rem;
		}
	}
`;
