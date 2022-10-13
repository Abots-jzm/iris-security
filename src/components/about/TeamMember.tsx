import React from "react";
import styled from "styled-components";

interface Props {
	image: string;
	name: string;
	title: string;
}

const TeamMember = ({ image, name, title }: Props) => {
	return (
		<Container>
			<div className="image">
				<img src={image} alt={name} />
			</div>
			<div className="name">{name}</div>
			<div className="title">{title}</div>
			<button>View Profile</button>
		</Container>
	);
};

export default TeamMember;

const Container = styled.div`
	background-color: white;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 1.5rem;
	flex: 0 0 15rem;
	padding-inline: 2.2rem;
	position: relative;

	.image {
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		overflow: hidden;
		height: 9rem;
		width: 9rem;
		padding-top: 0.8rem;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			display: block;
		}
	}

	.name {
		margin-top: 6rem;
		color: #4777cb;
		font-weight: 700;
	}

	.title {
		margin: 2.1rem 0;
		color: black;
		font-size: 1.2rem;
		font-weight: 600;
	}

	button {
		cursor: pointer;
		margin-bottom: 1.3rem;
		background-color: #204d9c;
		font-weight: 700;
		width: 100%;
		padding: 1rem 0;
		font-size: 1.2rem;
		color: white;
		border: none;
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	}
`;
