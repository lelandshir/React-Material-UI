import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

function ElevationScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		// this hook is an event listener for scrolling
		disableHysteresis: true, //disable the delay when user is scrolling
		threshold: 0, // trigger immediately when scrolling begins
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

export default function Header(props) {
	return (
		<ElevationScroll>
			<AppBar>
				{/* Toolbar is there to make everything inline as opposed to vertical */}
				<Toolbar>Arch Development</Toolbar>
			</AppBar>
		</ElevationScroll>
	);
}
