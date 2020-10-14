import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";
import Websites from "./Websites";
import Revolution from "./Revolution";
import About from "./About";
import Contact from "./Contact";
import Estimate from "./Estimate";

/*
Themes (ThemeProvider) let you apply a consistent tone to your app. It allows you to customize all design aspects of your project in order to meet the specific needs of your business or brand.
To promote greater consistency between apps, light and dark theme types are available to choose from. By default, components use the light theme type. 
*/

// `Switch component` only renders the 1st component that mactches the given route
// `BroswerRouter component` handles providing the browser with correct url for each page navigated to, and manipulates the history object which enables navigation using the forward and back buttons
export default function App() {
	const [selectedIndex, setSelectedIndex] = useState(0); //to track the index of the menu items where as they are otherwise mostly the same except for their paths...
	const [value, setValue] = useState(0);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
				<Switch>
					<Route
						exact
						path="/"
						render={(props) => (
							<LandingPage
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/services"
						render={(props) => (
							<Services
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/customsoftware"
						render={(props) => (
							<CustomSoftware
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/mobileapps"
						render={(props) => (
							<MobileApps
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/websites"
						render={(props) => (
							<Websites
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/revolution"
						render={(props) => (
							<Revolution
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/about"
						render={(props) => (
							<About
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/contact"
						render={(props) => (
							<Contact
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/estimate"
						render={(props) => (
							<Estimate
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
				</Switch>
				<Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
			</BrowserRouter>
		</ThemeProvider>
	);
}
