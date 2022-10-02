import "./App.css";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./UI/Home";
import Header from "./UI/Header";
import About from "./UI/About";
import AboutHeader from "./UI/AboutHeader";
import React, { useLayoutEffect } from "react";
import { HashLoader } from "react-spinners";

const Wrapper = ({ children }) => {
	const location = useLocation();
	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0);
	}, [location.pathname]);
	return children;
};

function App() {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);
	return !isLoading ? (
		<BrowserRouter>
			<Wrapper>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Header />
								<Home></Home>
							</>
						}
					></Route>

					<Route
						path="/about-us"
						element={
							<>
								<AboutHeader />
								<About></About>
							</>
						}
					></Route>
				</Routes>
			</Wrapper>
		</BrowserRouter>
	) : (
		<div className="spinner">
			<HashLoader loading={isLoading} size={75} />
		</div>
	);
}

export default App;
