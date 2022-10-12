import React from "react";
import Section from "../ui/Section";
import BlueCard from "../components/home/BlueCard";
import styled from "styled-components";
import IllustrationSVG from "../assets/home/Hero Illustration.svg";
import StorageProtectionSVG from "../assets/home/storage protection icon.svg";
import ThreatProtectionSVG from "../assets/home/Threat protection icon.svg";
import VaultSolutionSVg from "../assets/home/vault solution icon.svg";
import CompaniesPNG from "../assets/home/Companies.svg";
import EncryptionPNG from "../assets/home/Encryption.png";
import TwentyFourSevenPNG from "../assets/home/24-7.png";
import ServicesCard from "../components/home/ServicesCard";
import ButtonPrimary from "../ui/ButtonPrimary";
import Statement from "../components/Statement";

const Home = () => {
	return (
		<>
			<header>
				<Section backgroundColor="#002B7A">
					<Hero>
						<Details>
							<h1>Protect and Secure your data from prying eyes</h1>
							<p>Keep hackers at bay with Iris Security</p>
							<ButtonPrimary />
						</Details>
						<Illustration>
							<img src={IllustrationSVG} alt="Illustration" />
						</Illustration>
					</Hero>
				</Section>
			</header>
			<Section backgroundColor="white">
				<MiddleContainer>
					<CardsContainer>
						<BlueCard icon={StorageProtectionSVG} title="Storage Protection">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dicta doloribus ratione.
						</BlueCard>
						<BlueCard icon={ThreatProtectionSVG} title="Threat Protection">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum laudantium nulla quaerat.
						</BlueCard>
						<BlueCard icon={VaultSolutionSVg} title="Vault Protection">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda porro saepe.
						</BlueCard>
					</CardsContainer>
					<CompaniesTrust>
						More organizations trust <span>Iris Security</span> for data protection than any other vendor
					</CompaniesTrust>
					<ServicesContainer>
						<ServicesCard image={CompaniesPNG}>More than 5000 companies use Iris Security to protect their data</ServicesCard>
						<ServicesCard image={EncryptionPNG} flip>
							Protect your Files and Data with our newest encryption software tool
						</ServicesCard>
						<ServicesCard image={TwentyFourSevenPNG}>We offer 24/7 protection 365 days a year with our advanced firewall technology</ServicesCard>
					</ServicesContainer>
				</MiddleContainer>
			</Section>
			<Statement />
		</>
	);
};

export default Home;

const ServicesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5.6rem;
`;

const CompaniesTrust = styled.div`
	margin: 6.6rem auto;
	max-width: 53rem;
	color: black;
	font-size: 4rem;
	font-weight: 600;
	text-align: center;

	span {
		color: #002b7a;
	}

	@media only screen and (max-width: 768px) {
		margin: 4.2rem auto;
		font-size: 2.8rem;
	}
`;

const CardsContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 2.6rem;

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		gap: 2.4rem;
	}
`;

const MiddleContainer = styled.div`
	margin: 4rem 0 7rem;

	@media only screen and (max-width: 768px) {
		margin: 2.4rem 0 5.2rem;
	}
`;

const Details = styled.div`
	flex: 1;
	color: white;

	h1 {
		font-weight: 700;
		font-size: 48px;
	}

	p {
		margin-top: 2rem;
		margin-bottom: 5rem;
		font-size: 2.4rem;
	}

	@media only screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		gap: 1.4rem;
		text-align: center;

		h1 {
			font-size: 3.2rem;
		}

		p {
			margin: 0;
			font-size: 2rem;
		}
	}
`;

const Illustration = styled.div`
	flex: 0 0 32rem;

	svg {
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		flex: 0 0 20rem;

		svg {
			height: 20rem;
		}
	}
`;

const Hero = styled.div`
	padding: 6.4rem 0;
	display: flex;
	align-items: center;
	gap: 10vw;

	@media only screen and (max-width: 768px) {
		flex-direction: column-reverse;
		gap: 1.4rem;
		padding: 2.4rem 0;
	}
`;
