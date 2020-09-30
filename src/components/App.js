import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Header from "../components/ui/Header";
import theme from "./ui/Theme";
/*
Themes (ThemeProvider) let you apply a consistent tone to your app. It allows you to customize all design aspects of your project in order to meet the specific needs of your business or brand.
To promote greater consistency between apps, light and dark theme types are available to choose from. By default, components use the light theme type. 
*/

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			Hello!
		</ThemeProvider>
	);
}
