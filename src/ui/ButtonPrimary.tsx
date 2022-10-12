import React from "react";
import { ReactComponent as RightArrowSVG } from "../assets/arrow_right_alt.svg";
import styled from "styled-components";

const ButtonPrimary = () => {
	return (
		<ButtonContainer>
			<span>Learn More</span>
			<RightArrowSVG />
		</ButtonContainer>
	);
};

export default ButtonPrimary;

const ButtonContainer = styled.button`
	background-color: white;
	color: #204d9c;
	font: inherit;
	border: none;
	outline: none;
	font-size: 2rem;
	font-weight: 500;
	display: flex;
	gap: 1rem;
	justify-content: center;
	align-items: baseline;
	padding: 2rem;
	border-radius: 4rem;
	cursor: pointer;

	svg {
		transition: all 0.2s;
	}

	&:hover {
		svg {
			transform: translateX(5px);
		}
	}

	@media only screen and (max-width: 600px) {
		font-size: 1.6rem;
		padding: 1.8rem;
	}
`;
