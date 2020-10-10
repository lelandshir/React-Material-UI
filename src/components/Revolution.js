import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import vision from "../assets/vision.svg";

const useStyles = makeStyles((theme) => ({
	rowContainer: {
		paddingLeft: "5em",
		paddingRight: "5em",
		[theme.breakpoints.down("sm")]: {
			paddingLeft: "1.5em",
			paddingRight: "1.5em",
		},
	},
}));

export default function Revolution() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Grid container direction="column">
			<Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
				<Typography variant="h2" style={{ fontFamily: "Pacifico" }}>
					The Revolution
				</Typography>
			</Grid>
			<Grid item container direction="row" lassName={classes.rowContainer}>
				<Grid item>
					<img src={vision} alt="mountain thorugh binoculars" />
				</Grid>
			</Grid>
		</Grid>
	);
}
