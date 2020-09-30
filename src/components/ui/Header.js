import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

import logo from "../../assets/logo.svg";
import { Typography } from "@material-ui/core";

function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		// this hook is an event listener for scrolling
		disableHysteresis: true, //disable the delay when user is scrolling
		threshold: 0, // trigger immediately when scrolling begins
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "3em",
	},
	logo: {
		height: "7em",
	},
	tabContainer: {
		marginLeft: "auto",
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: "25px",
	},
	button: {
		...theme.typography.estimate,
		borderRadius: "50px",
		marginLeft: "50px",
		marginRight: "25px",
		height: "45px",
	},
}));

export default function Header(props) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="fixed" color="primary">
					{/* Toolbar is there to make everything inline as opposed to vertical; disbaleGutters={true} || disableGutters removes the padding that comes with the toolbar*/}
					<Toolbar disableGutters>
						<img className={classes.logo} src={logo} alt="company" />
						<Tabs className={classes.tabContainer}>
							<Tab className={classes.tab} label="Home" />
							<Tab className={classes.tab} label="Services" />
							<Tab className={classes.tab} label="The Revolution" />
							<Tab className={classes.tab} label="About Us" />
							<Tab className={classes.tab} label="Contact Us" />
						</Tabs>
						<Button
							variant="contained"
							color="secondary"
							className={classes.button}
						>
							Free Estimate
						</Button>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
