import React from "react";
import FileProtectionPNG from "../assets/home/file-protection-5997798-4973264.png";
import ButtonPrimary from "../ui/ButtonPrimary";
import Section from "../ui/Section";
import styled from "styled-components";

const Statement = () => {
	return (
		<Section backgroundColor={"#002b7a"}>
			<StatementContainer>
				<div>
					<img src={FileProtectionPNG} alt="illustration" />
				</div>
				<div>
					<p>Iris Security Provides Better Data Protection to Individuals and Businesses than 80% of Data Security Firms</p>
					<ButtonPrimary />
				</div>
			</StatementContainer>
		</Section>
	);
};

export default Statement;

const StatementContainer = styled.div`
	color: white;
	display: flex;
	padding: 1.6rem 0;
	justify-content: center;
	align-items: center;
	gap: 7.1rem;
	text-align: right;

	button {
		margin-left: auto;
	}

	p {
		margin-bottom: 4rem;
		font-size: 4rem;
		font-weight: 600;
	}

	@media only screen and (max-width: 900px) {
		flex-direction: column;
		padding: 2.4rem 0;
		gap: 2rem;
		text-align: center;

		img {
			width: 20rem;
		}

		button {
			width: 100%;
		}

		p {
			font-size: 2.8rem;
			margin-bottom: 2rem;
		}
	}
`;
