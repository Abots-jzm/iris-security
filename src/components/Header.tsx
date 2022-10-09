import React, { useState } from "react";
import LogoSVG from "../assets/Logo Header.svg";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

type activeLinksType = "home" | "services" | "about" | "contact";

const Header = () => {
	const [activeLink, setActiveLink] = useState<activeLinksType>("home");

	function linkClickedHandler(active: activeLinksType) {
		setActiveLink(active);
	}

	return (
		<>
			<HeaderContainer>
				<Logo>
					<img src={LogoSVG} alt="Logo" />
				</Logo>
				<MainNav>
					<NavLink to="/" style={{ textDecoration: "none" }} onClick={linkClickedHandler.bind(null, "home")}>
						<NavItem active={activeLink === "home"}>Home</NavItem>
					</NavLink>
					<NavLink to="/services" style={{ textDecoration: "none" }} onClick={linkClickedHandler.bind(null, "services")}>
						<NavItem active={activeLink === "services"}>Services</NavItem>
					</NavLink>
					<NavLink to="/about" style={{ textDecoration: "none" }} onClick={linkClickedHandler.bind(null, "about")}>
						<NavItem active={activeLink === "about"}>About</NavItem>
					</NavLink>
					<NavLink to="/contact" style={{ textDecoration: "none" }} onClick={linkClickedHandler.bind(null, "contact")}>
						<NavItem active={activeLink === "contact"}>Contact</NavItem>
					</NavLink>
				</MainNav>
			</HeaderContainer>
			<Outlet />
		</>
	);
};

export default Header;

interface INavItem {
	active?: boolean;
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
`;

const HeaderContainer = styled.div`
	margin: 0 auto;
	padding: 3.5rem 0;
	max-width: 100rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.div`
	height: 5rem;

	img {
		width: 100%;
	}
`;
