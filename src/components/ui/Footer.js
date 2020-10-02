import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.common.blue,
		width: "100%",
		zIndex: 1302,
		//must set position of an element to relative for zIndex to work
		position: "relative",
	},
	adornment: {
		width: "25em",
		verticalAlign: "bottom",
		[theme.breakpoints.down("md")]: {
			width: "21em",
		},
		[theme.breakpoints.down("xs")]: {
			width: "15em",
		},
	},
}));
export default function Footer() {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<img
				className={classes.adornment}
				alt="black decorative slash"
				src={footerAdornment}
			/>
		</footer>
	);
}
