import React from "react";
import Section from "../ui/Section";
import styled from "styled-components";
import IllustrationPNG from "../assets/about/About Illustration.png";
import TaliaMar from "../assets/about/Talia mar.jpg";
import JamesWickham from "../assets/about/James Wickham.jpg";
import OlajideOlatunji from "../assets/about/Olajide Olatunji.jpg";
import SimonMinter from "../assets/about/Simon Minter.jpg";
import StephenTries from "../assets/about/Stephen Tries.jpg";
import TeamMember from "../components/about/TeamMember";

const About = () => {
	return (
		<>
			<Section backgroundColor="#204D9C">
				<TopContainer>
					We deliver superior storage and data protection for individuals & real-world organizations
					<Illustration>
						<img src={IllustrationPNG} alt="illustration" />
					</Illustration>
				</TopContainer>
			</Section>
			<Section backgroundColor="white">
				<WhyIris>
					<h4>Why Iris Security?</h4>
					<p>
						Simple - It’s all about you. Powered by Storage Protection, Data and Threat Protection, Iris Security aims to be the number one data privacy software as a service
						(SaaS) globally. Our sole goal is to help Individuals and organizations achieve absolute protection against malware, virus, threats and hackers from all parts of the
						world. We are here to make sure you never have to worry about losing your files to ransom ware and other cyber threats.
					</p>
				</WhyIris>
			</Section>
			<Section backgroundColor="#002B7A">
				<Management>
					<span>Meet Our Management Team</span>
					<TeamMembers>
						<TeamMember image={TaliaMar} name="Talia Mar" title="Chief Human Resource Officer" />
						<TeamMember image={StephenTries} name="Stephen Tries" title="Chief Marketing Officer" />
						<TeamMember image={OlajideOlatunji} name="Olajide Olatunji" title="Chief Customer Support Officer" />
						<TeamMember image={SimonMinter} name="Simon Minter" title="Chief Information Officer" />
						<TeamMember image={JamesWickham} name="James Wickham" title="Chief Executive Officer" />
					</TeamMembers>
				</Management>
			</Section>
		</>
	);
};

export default About;

const TeamMembers = styled.div`
	margin-top: 11.8rem;
	display: flex;
	justify-content: center;
	gap: 5rem;
	flex-wrap: wrap-reverse;

	@media only screen and (max-width: 600px) {
		margin-top: 8.6rem;
		row-gap: 8.6rem;
	}
`;

const Management = styled.div`
	padding: 10rem 0;
	color: white;
	text-align: center;

	span {
		font-size: 4rem;
		font-weight: 700;
		margin-bottom: 8rem;
	}

	@media only screen and (max-width: 600px) {
		padding: 4.8rem 0;
	}
`;

const WhyIris = styled.div`
	padding: 39rem 0 10.9rem;
	text-align: center;
	max-width: 53rem;
	margin: 0 auto;

	h4 {
		font-size: 4rem;
		font-weight: 700;
	}

	p {
		margin-top: 2rem;
		font-size: 2rem;
	}

	@media only screen and (max-width: 600px) {
		padding: 21.4rem 0 12rem;

		h1 {
			font-size: 2.8rem;
		}

		p {
			font-size: 1.6rem;
			margin-top: 1.4rem;
		}
	}
`;

const Illustration = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);

	@media only screen and (max-width: 600px) {
		img {
			width: 25rem;
		}
	}
`;

const TopContainer = styled.div`
	padding: 10.9rem 0 22.6rem;
	color: white;
	text-align: center;
	font-size: 4.8rem;
	font-weight: 700;
	position: relative;

	@media only screen and (max-width: 600px) {
		padding: 7.2rem 0 13.8rem;
		font-size: 3.2rem;
	}
`;
