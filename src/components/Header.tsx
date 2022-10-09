import React, { useState } from "react";
import LogoSVG from "../assets/Logo Header.svg";
import LogoWhiteSVG from "../assets/Logo-White.svg";
import HamburgerSVG from "../assets/Hamburger.svg";
import CloseSVG from "../assets/Close.svg";
import HomeSVG from "../assets/Home.svg";
import ServicesSVG from "../assets/Services.svg";
import AboutSVG from "../assets/About.svg";
import ContactSVG from "../assets/Contact.svg";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

type activeLinksType = "home" | "services" | "about" | "contact";

const Header = () => {
	const [activeLink, setActiveLink] = useState<activeLinksType>("home");
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	function linkClickedHandler(active: activeLinksType) {
		setActiveLink(active);
	}

	function openDrawer() {
		setDrawerIsOpen(true);
	}

	function closeDrawer() {
		setDrawerIsOpen(false);
	}

	return (
		<>
			<HeaderContainer>
				<Logo>
					<img src={LogoSVG} alt="Logo" />
				</Logo>
				<MainNav>
					<NavLink to="/" onClick={linkClickedHandler.bind(null, "home")}>
						<NavItem active={activeLink === "home"}>Home</NavItem>
					</NavLink>
					<NavLink to="/services" onClick={linkClickedHandler.bind(null, "services")}>
						<NavItem active={activeLink === "services"}>Services</NavItem>
					</NavLink>
					<NavLink to="/about" onClick={linkClickedHandler.bind(null, "about")}>
						<NavItem active={activeLink === "about"}>About</NavItem>
					</NavLink>
					<NavLink to="/contact" onClick={linkClickedHandler.bind(null, "contact")}>
						<NavItem active={activeLink === "contact"}>Contact</NavItem>
					</NavLink>
				</MainNav>
				<Hamburger onClick={openDrawer}>
					<img src={HamburgerSVG} alt="hamburger menu" />
				</Hamburger>
				<MobileNav isOpen={drawerIsOpen}>
					<MobileTop>
						<div>
							<img src={LogoWhiteSVG} alt="white logo" />
						</div>
						<Close onClick={closeDrawer}>
							<img src={CloseSVG} alt="close" />
						</Close>
					</MobileTop>
					<MobileMain>
						<NavLink to="/" onClick={closeDrawer}>
							<MobileNavItem>
								<img src={HomeSVG} alt="home icon" />
								Home
							</MobileNavItem>
						</NavLink>
						<NavLink to="/services" onClick={closeDrawer}>
							<MobileNavItem>
								<img src={ServicesSVG} alt="services icon" />
								Services
							</MobileNavItem>
						</NavLink>
						<NavLink to="/about" onClick={closeDrawer}>
							<MobileNavItem>
								<img src={AboutSVG} alt="about icon" />
								About
							</MobileNavItem>
						</NavLink>
						<NavLink to="/contact" onClick={closeDrawer}>
							<MobileNavItem>
								<img src={ContactSVG} alt="contact icon" />
								Contact
							</MobileNavItem>
						</NavLink>
					</MobileMain>
				</MobileNav>
			</HeaderContainer>
			<Outlet />
		</>
	);
};

export default Header;

const MobileNavItem = styled.div`
	display: flex;
	gap: 2.4rem;
	color: #fff;
	padding: 2.8rem 0;
	font-weight: 700;
`;

const MobileMain = styled.div`
	margin-top: 2rem;
	padding-left: 3.8rem;

	a,
	a:link,
	a:visited {
		text-decoration: none;
	}
`;

const Close = styled.div`
	cursor: pointer;

	@media only screen and (max-width: 600px) {
		cursor: none;
	}
`;

const MobileTop = styled.div`
	padding: 1.2rem 2.4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

interface IMobileNav {
	isOpen: boolean;
}

const MobileNav = styled.div<IMobileNav>`
	display: none;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(100%)")};
	background-color: #204d9c;
	z-index: 1000;

	transition: transform 0.5s;

	@media only screen and (max-width: 600px) {
		display: block;
	}
`;

const Hamburger = styled.div`
	cursor: pointer;
	display: none;

	img {
		width: 100%;
	}

	@media only screen and (max-width: 600px) {
		cursor: none;
		display: block;
	}
`;

interface INavItem {
	active: boolean;
}

const NavItem = styled.div<INavItem>`
	padding: 1rem;
	font-weight: 700;
	color: ${(props) => (props.active ? "#fff" : "#204d9c")};
	background-color: ${(props) => (props.active ? "#002b71" : "transparent")};
	text-transform: capitalize;
	transition: all 0.2s;
	border-radius: 20px;

	@media (hover: hover) {
		cursor: pointer;

		&:hover {
			background-color: #002b7a;
			color: #fff;
		}
	}
`;

const MainNav = styled.div`
	display: flex;
	gap: 1.6rem;
	align-items: center;

	a,
	a:link,
	a:visited {
		text-decoration: none;
	}

	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

const HeaderContainer = styled.div`
	margin: 0 auto;
	padding: 3.5rem 2.4rem;
	max-width: 104rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media only screen and (max-width: 600px) {
		padding: 1.2rem 2.4rem;
	}
`;

const Logo = styled.div`
	height: 5rem;

	img {
		width: 100%;
	}

	@media only screen and (max-width: 600px) {
		height: 3.6rem;

		img {
			height: 3.6rem;
		}
	}
`;
