import React, { useState } from "react";
import styled from "styled-components";
import TabCard from "./TabCard";
import Bulington from "../../assets/contact/Burlington.jpg";
import Dallas from "../../assets/contact/Dallas.jpg";
import Dubai from "../../assets/contact/Dubai.jpg";
import Johannesburg from "../../assets/contact/Johannesburg.jpg";
import Manchester from "../../assets/contact/Manchester.jpg";
import Paris from "../../assets/contact/Paris.jpg";

const DATA = {
	NorthAndSouthAmerica: [
		{
			image: Bulington,
			name: "Burlington, MA",
			number: ["[758]-494-5800"],
			address: ["3 Van de Graff Drive", "2nd Floor", "Burlington, MA 01803", "United States"],
		},
		{
			image: Dallas,
			name: "Dallas, TX",
			number: ["[888]-767-4679"],
			address: ["212 N Pearl Street Suite 300", "Dallas, TX 75201", "United States"],
		},
	],
	Europe: [
		{
			image: Manchester,
			name: "Manchester",
			number: ["+44 [0]1235-559933"],
			address: ["125 Deansgate", "Manchester, M3 2BY", "United Kingdom"],
		},
		{
			image: Paris,
			name: "Paris",
			number: ["+33 1 34 80 00"],
			address: ["Iris Security Sarl [France]", "River Quest", "80 Quai Voltaire", "95870 Bezons", "France"],
		},
	],
	AfricaAndMiddleEast: [
		{
			image: Johannesburg,
			name: "Johannesburg",
			number: ["+27 [0] 11 444 4000"],
			address: ["125 Deansgate", "Manchester, M3 2BY", "United Kingdom"],
		},
		{
			image: Dubai,
			name: "Dubai",
			number: ["+971 4357 4679", "Toll Free	[UAE Only]:", "8000 180 885"],
			address: ["Alpha Building - office #211 PO box", "500496 Dubai Internet City Dubai, UAE"],
		},
	],
};

type TabsType = 1 | 2 | 3;

function getFilteredData(activeTab: TabsType) {
	if (activeTab === 1) return DATA.NorthAndSouthAmerica;
	if (activeTab === 2) return DATA.Europe;
	else return DATA.AfricaAndMiddleEast;
}

const Tabs = () => {
	const [activeTab, setActiveTab] = useState<TabsType>(1);
	const filteredData = getFilteredData(activeTab);

	return (
		<Container>
			<HeadBar>
				<Selector activeTab={activeTab} />
				<Navigations>
					<NavItems active={activeTab === 1} onClick={() => setActiveTab(1)}>
						North & South America
					</NavItems>
					<NavItems active={activeTab === 2} onClick={() => setActiveTab(2)}>
						Europe
					</NavItems>
					<NavItems active={activeTab === 3} onClick={() => setActiveTab(3)}>
						Africa & Middle East
					</NavItems>
				</Navigations>
			</HeadBar>
			<Display>
				{React.Children.toArray(filteredData.map((location) => <TabCard name={location.name} number={location.number} address={location.address} image={location.image} />))}
			</Display>
		</Container>
	);
};

export default Tabs;

const Display = styled.div`
	display: flex;
	gap: 2.4rem;
`;

interface INavItems {
	active: boolean;
}

const NavItems = styled.div<INavItems>`
	flex: 1;
	display: grid;
	place-items: center;
	text-align: center;
	color: ${(props) => (props.active ? "white" : "black")};
	cursor: pointer;

	transition: color 0.3s;
`;

const Navigations = styled.div`
	display: flex;
	padding-inline: 2.4rem;
	align-items: stretch;
	height: 100%;
	font-size: 2.4rem;
	font-weight: 600;
	gap: 2.4rem;
	position: relative;
	z-index: 3;

	@media only screen and (max-width: 600px) {
		font-size: 2rem;
	}
`;

interface ISelector {
	activeTab: number;
}

const Selector = styled.div<ISelector>`
	background-color: #204d9c;
	height: 80%;
	width: calc((100% - (2.4rem * 4)) / 3);
	transform: ${({ activeTab }) => `translate(calc((2.4rem * ${activeTab}) + (100% * ${activeTab - 1})), 10%)`};
	box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.25);
	border-radius: 12px;
	position: absolute;
	z-index: 2;

	transition: transform 0.3s;
`;

const HeadBar = styled.div`
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
	border-radius: 12px;
	position: relative;
	height: 7.6rem;

	@media only screen and (max-width: 600px) {
		height: 10rem;
	}
`;

const Container = styled.div`
	padding: 10rem 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 9.2rem;
`;
