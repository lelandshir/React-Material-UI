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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
		padding: "25px",
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
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
	drawer: {
		backgroundColor: theme.palette.common.blue,
	},
	drawerItem: {
		...theme.typography.tab,
		color: "white",
		opacity: 0.7,
	},
	drawerItemEstimate: {
		backgroundColor: theme.palette.common.orange,
	},
	drawerItemSelected: {
		"& .MuiListItemText-root": {
			opacity: 1,
		},
	},
	appbar: {
		zIndex: theme.zIndex.modal + 1,
	},
}));

export default function Header(props) {
	const classes = useStyles();
	const theme = useTheme();
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const [openDrawer, setOpenDrawer] = useState(false);
	//this will select anything that macthes medium and below to return true
	const matches = useMediaQuery(theme.breakpoints.down("md"));

	// create anchorEl and setAnchorEl using useState with default of "null"
	const [anchorEl, setAnchorEl] = useState(null); //this is the state that stores the componenet we clicked on && where we want the menu to be rendered
	const [openMenu, setOpenMenu] = useState(false); //determines visibility of the menu

	//make use of the imported useTheme for access to the default theme w/in our component

	const handleChange = (e, newValue) => {
		props.setValue(newValue);
	};

	const handleClick = (e) => {
		//event contains all the information about where we just clicked on screen
		setAnchorEl(e.currentTarget); //will contain the elemenet we clciked on && tells menu where we want it to be rendered
		setOpenMenu(true); //tell menu to be rendered
	};

	const handleMenuItemClick = (e, i) => {
		setAnchorEl(null);
		setOpenMenu(false);
		props.setSelectedIndex(i);
	};

	const handleClose = (e) => {
		//tell the menu to close
		setAnchorEl(null);
		setOpenMenu(false);
	};
	//so that we may map and assign an index
	const menuOptions = [
		{ name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
		{
			name: "Custom Software Development",
			link: "/customsoftware",
			activeIndex: 1,
			selectedIndex: 1,
		},
		{
			name: "iOS/Android App Development",
			link: "/mobileapps",
			activeIndex: 1,
			selectedIndex: 2,
		},
		{
			name: "Website Development",
			link: "/websites",
			activeIndex: 1,
			selectedIndex: 3,
		},
	];

	const routes = [
		{ name: "Home", link: "/", activeIndex: 0 },
		{
			name: "Services",
			link: "/services",
			activeIndex: 1,
			ariaOwns: anchorEl ? "simple-menu" : undefined,
			ariaPopup: anchorEl ? "true" : undefined,
			mouseOver: (event) => handleClick(event),
		},
		{ name: "The Revolution", link: "/revolution", activeIndex: 2 },
		{ name: "About Us", link: "/about", activeIndex: 3 },
		{ name: "Contact Us", link: "/contact", activeIndex: 4 },
	];

	useEffect(() => {
		[...menuOptions, ...routes].forEach((route) => {
			switch (window.location.pathname) {
				case `${route.link}`:
					if (props.value !== route.activeIndex) {
						props.setValue(route.activeIndex);
						if (
							route.selectedIndex &&
							route.selectedIndex !== props.selectedIndex
						) {
							props.setSelectedIndex(route.selectedIndex);
						}
					}
					break;
				default:
					break;
			}
		});
		//to manage the browser running back to home after refresh
	}, [props.value, menuOptions, props.selectedIndex, routes, props]);
	//as a second argument we pass an array of the dependencies being used in useEffect hook, "value" constant, if this state value hasn't changed don't run this code again/no infinite loops

	const tabs = (
		<React.Fragment>
			<Tabs
				value={props.value}
				onChange={handleChange}
				className={classes.tabContainer}
				indicatorColor="primary"
			>
				{routes.map((route, index) => (
					<Tab
						className={classes.Tab}
						component={Link}
						to={route.link}
						label={route.name}
						aria-owns={route.ariaOwns}
						aria-haspopup={route.ariaPopup}
						onMouseOver={route.mouseOver}
						key={`${route}.${index}`}
					/>
				))}
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
				style={{ zIndex: 1302 }}
				keepMounted
			>
				{menuOptions.map((option, i) => (
					<MenuItem
						key={`${option}${i}`}
						component={Link}
						to={option.link}
						classes={{ root: classes.menuItem }}
						onClick={(event) => {
							handleMenuItemClick(event, i);
							props.setValue(1);
							handleClose();
						}}
						selected={i === props.selectedIndex && props.value === 1}
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
				classes={{ paper: classes.drawer }}
			>
				<div className={classes.toolbarMargin} />
				<List disablePadding>
					{routes.map((route) => (
						<ListItem
							onClick={() => {
								setOpenDrawer(false);
								props.setValue(route.activeIndex);
							}}
							divider
							button
							component={Link}
							to={route.link}
							selected={props.value === route.activeIndex}
							classes={{ selected: classes.drawerItemSelected }}
							key={`${route}.${route.activeIndex}`}
						>
							<ListItemText className={classes.drawerItem} disableTypography>
								{route.name}
							</ListItemText>
						</ListItem>
					))}
					;
					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							props.setValue(5);
						}}
						divider
						button
						component={Link}
						classes={{
							root: classes.drawerItemEstimate,
							selected: classes.drawerItemSelected,
						}}
						to="/estimate"
						selected={props.value === 5}
					>
						<ListItemText className={classes.drawerItem} disableTypography>
							Free Estimate
						</ListItemText>
					</ListItem>
				</List>
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
				<AppBar position="fixed" color="primary" className={classes.appbar}>
					{/* Toolbar is there to make everything inline as opposed to vertical; disbaleGutters={true} || disableGutters removes the padding that comes with the toolbar*/}
					<Toolbar disableGutters>
						<Button
							disableRipple
							component={Link}
							to="/"
							onClick={() => props.setValue(0)}
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
