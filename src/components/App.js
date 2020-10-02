import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Header from "../components/ui/Header";
import theme from "./ui/Theme";
import Footer from "../components/ui/Footer";
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
					<Route exact path="/" component={() => <div>Home</div>} />
					<Route exact path="/services" component={() => <div>Services</div>} />
					<Route
						exact
						path="/customsoftware"
						component={() => <div>Custom Software</div>}
					/>
					<Route
						exact
						path="/mobileapps"
						component={() => <div>Mobile Apps</div>}
					/>
					<Route exact path="/websites" component={() => <div>Websites</div>} />
					<Route
						exact
						path="/revolution"
						component={() => <div>The Revolution</div>}
					/>
					<Route exact path="/about" component={() => <div>About Us</div>} />
					<Route exact path="/contact" component={() => <div>Contact</div>} />
					<Route exact path="/estimate" component={() => <div>Estimate</div>} />
				</Switch>
				<Footer
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
			</BrowserRouter>
		</ThemeProvider>
	);
}
