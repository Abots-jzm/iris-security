import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={"yo"} />
				<Route path="/services" element="services" />
				<Route path="/about" element="about" />
				<Route path="/contact" element="contact" />
			</Route>
		</Routes>
	);
}

export default App;
