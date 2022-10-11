import React from "react";
import styled from "styled-components";

interface Props {
	children: React.ReactNode;
	image: string;
	flip?: boolean;
}

const ServicesCard = ({ children, image, flip }: Props) => {
	return (
		<ServicesCardContainer flip={flip}>
			<div>
				<h4>{children}</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur deserunt eius eum hic inventore perferendis placeat. Alias autem cum dicta dolorem facere,
					facilis fugit harum id.
				</p>
				<button>Learn More</button>
			</div>
			<div>
				<img src={image} alt="illustration" />
			</div>
		</ServicesCardContainer>
	);
};

export default ServicesCard;

interface IServices {
	flip?: boolean;
}

const ServicesCardContainer = styled.div<IServices>`
	display: flex;
	gap: 8vw;
	align-items: center;

	${(props) =>
		props.flip &&
		`flex-direction: row-reverse;
		 text-align: right;`}
	h4 {
		font-size: 3.2rem;
		font-weight: 600;
		margin-bottom: 1.2rem;
	}

	p {
		font-size: 2rem;
		margin-bottom: 2rem;
		text-align: inherit;
	}

	button {
		font: inherit;
		color: #3262b6;
		background-color: transparent;
		padding: 1rem 2rem;
		border: 2px solid #204d9c;
		border-radius: 4rem;
		font-weight: 500;

		@media (hover: hover) {
			cursor: pointer;

			&:hover {
				color: hsl(218, 57%, 55%);
				border: 2px solid hsl(218, 66%, 47%);
			}
		}
	}

	@media only screen and (max-width: 900px) {
		flex-direction: column-reverse;
		text-align: center;
		gap: 1.6rem;

		h4 {
			font-size: 2.4rem;
		}

		p {
			margin-bottom: 1.6rem;
		}

		div img {
			width: 20rem;
		}
	}
`;
