import React, { useEffect, useState } from "react";
import { ReactComponent as LogoSVG } from "../assets/Logo Header.svg";
import { ReactComponent as HamburgerSVG } from "../assets/Hamburger.svg";
import { ReactComponent as CloseSVG } from "../assets/Close.svg";
import { ReactComponent as HomeSVG } from "../assets/Home.svg";
import { ReactComponent as ServicesSVG } from "../assets/Services.svg";
import { ReactComponent as AboutSVG } from "../assets/About.svg";
import { ReactComponent as ContactSVG } from "../assets/Contact.svg";
import LogoWhiteSVG from "../assets/Logo-White.svg";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

type activeLinksType = "home" | "services" | "about" | "contact";

const Header = () => {
	const [activeLink, setActiveLink] = useState<activeLinksType>("home");
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/") setActiveLink("home");
		if (location.pathname === "/services") setActiveLink("services");
		if (location.pathname === "/about") setActiveLink("about");
		if (location.pathname === "/contact") setActiveLink("contact");
	}, [location]);

	function openDrawer() {
		setDrawerIsOpen(true);
	}

	function closeDrawer() {
		setDrawerIsOpen(false);
	}

	return (
		<HeaderContainer>
			<Logo>
				<LogoSVG />
			</Logo>
			<MainNav>
				<NavLink to="/">
					<NavItem active={activeLink === "home"}>Home</NavItem>
				</NavLink>
				<NavLink to="/services">
					<NavItem active={activeLink === "services"}>Services</NavItem>
				</NavLink>
				<NavLink to="/about">
					<NavItem active={activeLink === "about"}>About</NavItem>
				</NavLink>
				<NavLink to="/contact">
					<NavItem active={activeLink === "contact"}>Contact</NavItem>
				</NavLink>
			</MainNav>
			<Hamburger onClick={openDrawer}>
				<HamburgerSVG />
			</Hamburger>
			<MobileNav isOpen={drawerIsOpen}>
				<MobileTop>
					<div>
						<img src={LogoWhiteSVG} alt="logo" />
					</div>
					<Close onClick={closeDrawer}>
						<CloseSVG />
					</Close>
				</MobileTop>
				<MobileMain>
					<NavLink to="/" onClick={closeDrawer}>
						<MobileNavItem>
							<HomeSVG />
							Home
						</MobileNavItem>
					</NavLink>
					<NavLink to="/services" onClick={closeDrawer}>
						<MobileNavItem>
							<ServicesSVG />
							Services
						</MobileNavItem>
					</NavLink>
					<NavLink to="/about" onClick={closeDrawer}>
						<MobileNavItem>
							<AboutSVG />
							About
						</MobileNavItem>
					</NavLink>
					<NavLink to="/contact" onClick={closeDrawer}>
						<MobileNavItem>
							<ContactSVG />
							Contact
						</MobileNavItem>
					</NavLink>
				</MobileMain>
			</MobileNav>
		</HeaderContainer>
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

	svg {
		width: 100%;
	}

	@media only screen and (max-width: 600px) {
		height: 3.6rem;

		svg {
			height: 3.6rem;
		}
	}
`;
