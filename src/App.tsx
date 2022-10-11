import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shell from "./components/Shell";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Shell />}>
				<Route index element={<Home />} />
				<Route path="/services" element="services" />
				<Route path="/about" element="about" />
				<Route path="/contact" element="contact" />
			</Route>
		</Routes>
	);
}

export default App;
