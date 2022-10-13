import React from "react";
import Section from "../ui/Section";
import styled from "styled-components";
import IllustrationPNG from "../assets/contact/Real help.png";
import Tabs from "../components/contact/TabsType";

const Contact = () => {
	return (
		<>
			<Section backgroundColor="#204D9C">
				<TopContainer>
					<div>
						<h3>[Real] help is there when you need it</h3>
						<p>
							Our support staff is independently audited and approved by SCP [Service Capability & Performance Support Standard] Our Support staff is ready to help customers with
							any situation and any given time with 24/7 customer service.
						</p>
					</div>
					<div>
						<img src={IllustrationPNG} alt="illustration" />
					</div>
				</TopContainer>
			</Section>
			<Section backgroundColor="#002B7A">
				<MiddleContainer>
					<div className="title">Contact Us</div>
					<div className="body">Get in touch with one of our offices</div>
				</MiddleContainer>
			</Section>
			<Section backgroundColor="#F1F3F5">
				<Tabs />
			</Section>
		</>
	);
};

export default Contact;

const MiddleContainer = styled.div`
	color: white;
	padding: 9.6rem 0;

	.title {
		font-size: 4.8rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.body {
		font-size: 2.4rem;
		font-weight: 500;
	}

	@media only screen and (max-width: 768px) {
		padding: 4.8rem 0;
		text-align: center;

		.title {
			font-size: 3.2rem;
			margin-bottom: 1.4rem;
		}

		.body {
			font-size: 2rem;
		}
	}
`;

const TopContainer = styled.div`
	color: white;
	padding: 10.9rem 0 5.8rem;
	display: flex;
	align-items: center;
	gap: 4vw;

	h3 {
		font-size: 4.8rem;
		font-weight: 700;
		margin-bottom: 2.8rem;
	}

	p {
		font-size: 2.4rem;
	}

	@media only screen and (max-width: 768px) {
		flex-direction: column-reverse;
		padding: 2.4rem 0;
		gap: 1.4rem;

		h3 {
			font-size: 3.2rem;
			margin-bottom: 1.4rem;
		}

		p {
			font-size: 2rem;
		}
	}
`;
