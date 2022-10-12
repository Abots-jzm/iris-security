import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shell from "./components/Shell";
import Services from "./pages/Services";
import About from "./pages/About";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Shell />}>
				<Route index element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element="contact" />
			</Route>
		</Routes>
	);
}

export default App;
