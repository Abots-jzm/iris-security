import React from "react";
import styled from "styled-components";
import { ReactComponent as RightArrowSVG } from "../../assets/arrow_right_alt.svg";

interface Props {
	icon: string;
	title: string;
	children: React.ReactNode;
}

const BlueCard = ({ icon, title, children }: Props) => {
	return (
		<CardContainer>
			<img src={icon} alt="icon" />
			<h3>{title}</h3>
			<p>{children}</p>
			<button>
				<RightArrowSVG />
			</button>
		</CardContainer>
	);
};

export default BlueCard;

const CardContainer = styled.div`
	background-color: #204d9c;
	color: white;
	border-radius: 1.6rem;
	position: relative;
	box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.25);
	padding: 2.6rem 3rem 9rem;

	h3 {
		font-size: 2.4rem;
		margin-top: 2.7rem;
		margin-bottom: 2.1rem;
		font-weight: 700;
	}

	button {
		position: absolute;
		background-color: transparent;
		border: none;
		right: 3rem;
		bottom: 2rem;
		cursor: pointer;
		color: white;
	}
`;
