import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shell from "./components/Shell";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

export enum Paths {
	HOME = "/",
	SERVICES = "/services",
	ABOUT = "/about",
	CONTACT = "/contact",
}

function App() {
	return (
		<Routes>
			<Route path={Paths.HOME} element={<Shell />}>
				<Route index element={<Home />} />
				<Route path={Paths.SERVICES} element={<Services />} />
				<Route path={Paths.ABOUT} element={<About />} />
				<Route path={Paths.CONTACT} element={<Contact />} />
			</Route>
		</Routes>
	);
}

export default App;
