import React from "react";
import styled from "styled-components";

interface Props {
	name: string;
	number: string[];
	address: string[];
	image: string;
}

const TabCard = ({ name, number, address, image }: Props) => {
	return (
		<Container>
			<div className="image">
				<img src={image} alt={name} />
			</div>
			<div>
				<div className="name">{name}</div>
				<div className="number">{React.Children.toArray(number.map((value) => <div>{value}</div>))}</div>
				<div className="address">{React.Children.toArray(address.map((value) => <div>{value}</div>))}</div>
			</div>
		</Container>
	);
};

export default TabCard;

const Container = styled.div`
	background: white;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
	padding: 1.6rem;
	flex: 1;
	display: flex;
	flex-direction: column;

	.image {
		flex: 1;
		object-fit: cover;

		img {
			display: block;
			width: 100%;
		}
	}

	.name {
		margin: 1.6rem 0;
		font-weight: 600;
		font-size: 2.4rem;
	}

	.number {
		margin-bottom: 1.6rem;
	}
`;
