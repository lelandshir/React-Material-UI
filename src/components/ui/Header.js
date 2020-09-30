import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
//imports from mui/core
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

//imports from mui-styles
import { makeStyles } from "@material-ui/styles";

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
	//see how simple it is to manage the styles with Material-UI
	toolbarMargin: {
		//taking note of the spread operator use here
		...theme.mixins.toolbar,
		marginBottom: "3em",
	},
	logo: {
		height: "8em",
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
	menu: {
		backgroundColor: theme.palette.common.blue,
		color: "white",
		borderRadius: "0px",
	},
	menuItem: {
		...theme.typography.tab,
		opacity: 0.7,
		"&:hover": {
			opacity: 1,
		},
	},
	logoContainer: {
		padding: 0,
		//stop the opacity overlay with the built in hoiver effect like so
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
}));

export default function Header(props) {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	// create anchorEl and setAnchorEl using useState with default of "null"
	const [anchorEl, setAnchorEl] = useState(null); //this is the state that stores the componenet we clicked on && where we want the menu to be rendered
	const [open, setOpen] = useState(false); //determines visibility of the menu

	const handleChange = (e, value) => {
		setValue(value);
	};

	const handleClick = (e) => {
		//event contains all the information about where we just clicked on screen
		setAnchorEl(e.currentTarget); //will contain the elemenet we clciked on && tells menu where we want it to be rendered
		setOpen(true); //tell menu to be rendered
	};

	const handleClose = (e) => {
		//tell the menu to close
		setAnchorEl(null);
		setOpen(false);
	};

	useEffect(() => {
		//to manage the browser running back to home after refresh
		if (window.location.pathname === "/" && value !== 0) {
			setValue(0);
		} else if (window.location.pathname === "/services" && value !== 1) {
			setValue(1);
		} else if (window.location.pathname === "/revolution" && value !== 2) {
			setValue(2);
		} else if (window.location.pathname === "/about" && value !== 3) {
			setValue(3);
		} else if (window.location.pathname === "/contact" && value !== 4) {
			setValue(4);
		} else if (window.location.pathname === "/estimate" && value !== 5) {
			setValue(5);
		}
	}, [value]);
	//as a second argument we pass an array of the dependencies being used in useEffect hook, "value" constant, if this state value hasn't changed don't run this code again/no infinite loops

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="fixed" color="primary">
					{/* Toolbar is there to make everything inline as opposed to vertical; disbaleGutters={true} || disableGutters removes the padding that comes with the toolbar*/}
					<Toolbar disableGutters>
						<Button
							disableRipple
							component={Link}
							to="/"
							onClick={() => setValue(0)}
							className={classes.logoContainer}
						>
							<img className={classes.logo} src={logo} alt="company" />
						</Button>

						<Tabs
							value={value}
							onChange={handleChange}
							className={classes.tabContainer}
						>
							<Tab
								className={classes.tab}
								component={Link}
								to="/"
								label="Home"
							/>
							<Tab
								aria-owns={anchorEl ? "simple-menu" : undefined}
								aria-haspopup={anchorEl ? "true" : undefined}
								className={classes.tab}
								component={Link}
								onMouseOver={(event) => handleClick(event)}
								//menu hangs around on mouseleave unless we target the menu list properties below
								to="/services"
								label="Services"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="/revolution"
								label="The Revolution"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="/about"
								label="About Us"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="/contact"
								label="Contact Us"
							/>
						</Tabs>
						<Button
							variant="contained"
							color="secondary"
							className={classes.button}
						>
							Free Estimate
						</Button>
						<Menu
							classes={{ paper: classes.menu }}
							id="simple-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							//target the menu list via props to handle the menu closing on MouseLeave #material-ui
							MenuListProps={{ onMouseLeave: handleClose }}
							elevation={0}
						>
							<MenuItem
								//this is how we can set multiple onClick functions; add another set of brackets, turn it into an arrow function, so that it becomes a full expression to call handleclose function, use a semilcolon and call setValue as well
								onClick={() => {
									handleClose();
									setValue(1);
								}}
								component={Link}
								to="/services"
								classes={{ root: classes.menuItem }}
							>
								Services
							</MenuItem>
							<MenuItem
								//this is how we can set multiple onClick functions; add another set of brackets, turn it into an arrow function, so that it becomes a full expression to call handleclose function, use a semilcolon and call setValue as well
								onClick={() => {
									handleClose();
									setValue(1);
								}}
								component={Link}
								to="/customsoftware"
								classes={{ root: classes.menuItem }}
							>
								Custom Software Development
							</MenuItem>
							<MenuItem
								onClick={() => {
									handleClose();
									setValue(1);
								}}
								component={Link}
								to="/mobileapps"
								classes={{ root: classes.menuItem }}
							>
								Mobile App Development
							</MenuItem>
							<MenuItem
								onClick={() => {
									handleClose();
									setValue(1);
								}}
								component={Link}
								to="/websites"
								classes={{ root: classes.menuItem }}
							>
								Website Development
							</MenuItem>
						</Menu>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
