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
// import { Typography } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
		[theme.breakpoints.down("md")]: {
			marginBottom: "2em",
		},
		[theme.breakpoints.down("xs")]: {
			marginBottom: "1.25em",
		},
	},
	logo: {
		height: "8em",
		[theme.breakpoints.down("md")]: {
			height: "7em",
		},
		[theme.breakpoints.down("xs")]: {
			height: "5.5em",
		},
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
	drawerIcon: {
		height: "50px",
		width: "50px",
	},
	drawerIconContainer: {
		marginLeft: "auto",
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
}));

export default function Header(props) {
	const classes = useStyles();
	const theme = useTheme();
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const [openDrawer, setOpenDrawer] = useState(false);
	//this will select anything that macthes medium and below to return true
	const matches = useMediaQuery(theme.breakpoints.down("md"));
	const [value, setValue] = useState(0);
	// create anchorEl and setAnchorEl using useState with default of "null"
	const [anchorEl, setAnchorEl] = useState(null); //this is the state that stores the componenet we clicked on && where we want the menu to be rendered
	const [openMenu, setOpenMenu] = useState(false); //determines visibility of the menu
	const [selectedIndex, setSelectedIndex] = useState(0); //to track the index of the menu items where as they are otherwise mostly the same except for their paths...

	//make use of the imported useTheme for access to the default theme w/in our component

	const handleChange = (e, newValue) => {
		setValue(newValue);
	};

	const handleClick = (e) => {
		//event contains all the information about where we just clicked on screen
		setAnchorEl(e.currentTarget); //will contain the elemenet we clciked on && tells menu where we want it to be rendered
		setOpenMenu(true); //tell menu to be rendered
	};

	const handleMenuItemClick = (e, i) => {
		setAnchorEl(null);
		setOpenMenu(false);
		setSelectedIndex(i);
	};

	const handleClose = (e) => {
		//tell the menu to close
		setAnchorEl(null);
		setOpenMenu(false);
	};
	//so that we may map and assign an index
	const menuOptions = [
		{ name: "Services", link: "/services" },
		{ name: "Custom Software Development", link: "/customsoftware" },
		{ name: "Mobile App Development", link: "/mobileapps" },
		{ name: "Website Development", link: "/websites" },
	];

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

		switch (window.location.pathname) {
			case "/":
				if (value !== 0) {
					setValue(0);
				}
				break;
			case "/services":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(0);
				}
				break;
			case "/customsoftware":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(1);
				}
				break;
			case "/mobileapps":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(2);
				}
				break;
			case "/websites":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(3);
				}
				break;
			case "/revolution":
				if (value !== 2) {
					setValue(2);
				}
				break;
			case "/about":
				if (value !== 3) {
					setValue(3);
				}
				break;
			case "/contact":
				if (value !== 4) {
					setValue(4);
				}
				break;
			case "/estimate":
				if (value !== 5) {
					setValue(5);
				}
				break;
			default:
				break;
		}
	}, [value]);
	//as a second argument we pass an array of the dependencies being used in useEffect hook, "value" constant, if this state value hasn't changed don't run this code again/no infinite loops
	const tabs = (
		<React.Fragment>
			<Tabs
				value={value}
				onChange={handleChange}
				className={classes.tabContainer}
			>
				<Tab className={classes.tab} component={Link} to="/" label="Home" />
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
			<Button variant="contained" color="secondary" className={classes.button}>
				Free Estimate
			</Button>
			<Menu
				classes={{ paper: classes.menu }}
				id="simple-menu"
				anchorEl={anchorEl}
				open={openMenu}
				onClose={handleClose}
				//target the menu list via props to handle the menu closing on MouseLeave #material-ui
				MenuListProps={{ onMouseLeave: handleClose }}
				elevation={0}
			>
				{menuOptions.map((option, i) => (
					<MenuItem
						key={option}
						component={Link}
						to={option.link}
						classes={{ root: classes.menuItem }}
						onClick={(event) => {
							handleMenuItemClick(event, i);
							setValue(1);
							handleClose();
						}}
						selected={i === selectedIndex && value === 1}
					>
						{option.name}
					</MenuItem>
				))}
			</Menu>
		</React.Fragment>
	);

	const drawer = (
		<React.Fragment>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
			>
				Example Drawer
			</SwipeableDrawer>
			<IconButton
				className={classes.drawerIconContainer}
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple
			>
				<MenuIcon className={classes.drawerIcon} />
			</IconButton>
		</React.Fragment>
	);

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
						{matches ? drawer : tabs}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
