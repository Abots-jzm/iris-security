import React from "react";
import Section from "../ui/Section";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LogoWhiteSVG from "../assets/Logo-White.svg";
import { ReactComponent as FacebookSVG } from "../assets/Facebook.svg";
import { ReactComponent as InstagramSVG } from "../assets/Instagram.svg";
import { ReactComponent as LinkedInSVG } from "../assets/Linkedin.svg";
import { ReactComponent as TwitterSVG } from "../assets/Twitter.svg";

const Footer = () => {
	return (
		<>
			<Section backgroundColor="#5e8ee2">
				<NewsLetterContainer>
					<span>subscribe to our newsletter!</span>
					<p>Be the first to know about our latest updates</p>
					<EmailForm buttonColor="#204D9C" onSubmit={(e) => e.preventDefault()}>
						<input type="email" placeholder="Enter your email address" />
						<button type="submit">Subscribe</button>
					</EmailForm>
				</NewsLetterContainer>
			</Section>
			<footer>
				<Section backgroundColor="#002B7A">
					<FooterContainer>
						<FooterNav>
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/services">Services</NavLink>
							</li>
							<li>
								<NavLink to="/about">About</NavLink>
							</li>
							<li>
								<NavLink to="/contact">Contact</NavLink>
							</li>
						</FooterNav>
						<Socials>
							<img src={LogoWhiteSVG} alt="logo" />
							<div>
								<FacebookSVG />
								<InstagramSVG />
								<LinkedInSVG />
								<TwitterSVG />
							</div>
						</Socials>
						<FooterNewsletter>
							<p>Join our newsletter</p>
							<EmailForm buttonColor="#4777CB" onSubmit={(e) => e.preventDefault()}>
								<input type="email" placeholder="Enter your email address" />
								<button type="submit">Subscribe</button>
							</EmailForm>
						</FooterNewsletter>
					</FooterContainer>
				</Section>
			</footer>
		</>
	);
};

export default Footer;

const FooterNewsletter = styled.div`
	p {
		color: white;
		margin-bottom: 1rem;
		font-weight: 500;
	}

	button {
		padding: 0.8rem;
	}

	@media only screen and (max-width: 768px) {
		input {
			flex: 1;
		}

		button {
			flex: 0 1;
		}
	}
`;

const Socials = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 20rem;
	}

	div {
		margin-top: 2rem;
		display: flex;
		gap: 2.1rem;
		justify-content: center;
		align-items: center;

		@media (hover: hover) {
			svg:hover {
				cursor: pointer;
			}
		}
	}
`;

const FooterNav = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 0.9rem;

	a,
	a:link,
	a:visited {
		color: white;
		text-decoration: none;
		font-size: 2.4rem;

		@media only screen and (max-width: 768px) {
			font-size: 2rem;
		}
	}
`;

const FooterContainer = styled.div`
	padding: 7.5rem 0;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		justify-content: flex-start;
		flex-direction: column;
		gap: 4.2rem;
	}
`;

interface IEmailForm {
	buttonColor: string;
}

const EmailForm = styled.form<IEmailForm>`
	display: flex;
	gap: 2rem;
	padding: 1.1rem 2rem;
	background-color: white;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
	border-radius: 1rem;

	input {
		border: 1px solid #dee2e6;
	}

	input::placeholder {
		color: rgba(0, 0, 0, 0.5);
	}

	button {
		background: ${(props) => props.buttonColor};
		box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.25);
		border-radius: 1rem;
		font: inherit;
		color: white;
		border: none;
		padding-inline: 1.5rem;
	}
`;

const NewsLetterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 13rem 0;
	color: white;

	span {
		text-transform: capitalize;
		font-size: 4rem;
		font-weight: 700;
	}

	p {
		margin: 0.8rem 0 3.4rem;
		font-size: 2rem;
	}

	input {
		padding: 1.5rem 1rem;
	}

	@media only screen and (max-width: 600px) {
		padding: 4.8rem 0;

		span {
			font-size: 2.8rem;
		}

		p {
			font-size: 1.6rem;
		}
	}
`;
