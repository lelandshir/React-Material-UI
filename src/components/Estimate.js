import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import people from "../assets/people.svg";
import usersIcon from "../assets/users.svg";
import iPhone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";

import estimateAnimation from "../animations/estimateAnimation/data.json";

const useStyles = makeStyles((theme) => ({}));

export default function Estimate(props) {
	const classes = useStyles();
	const theme = useTheme();

	const defaultOptions = {
		loop: true,
		autoplay: false,
		animationData: estimateAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<Grid container direction="row">
			<Grid item container direction="column">
				<Grid item>
					<Typography variant="h2">Estimate</Typography>
				</Grid>
				<Grid item>
					<Lottie options={defaultOptions} height="100%" width="100%" />
				</Grid>
			</Grid>
			<Grid item container direction="column">
				<Grid item>
					<Typography
						variant="h2"
						align="center"
						style={{ fontWeight: 300 }}
						gutterBottom
					>
						Which service are you interested in?
					</Typography>
				</Grid>
				<Grid item container>
					<Grid item container direction="column">
						<Grid item style={{ maxWidth: "12em" }}>
							<Typography variant="h6" align="center">
								Custom Software Development
							</Typography>
						</Grid>
						<Grid item>
							<img src={software} alt="three floating screens" />
						</Grid>
					</Grid>
					<Grid item container direction="column">
						<Grid item style={{ maxWidth: "12em" }}>
							<Typography variant="h6" align="center">
								iOS/Android App Development
							</Typography>
						</Grid>
						<Grid item>
							<img src={mobile} alt="phones and tablet outline" />
						</Grid>
					</Grid>
					<Grid item container direction="column">
						<Grid item style={{ maxWidth: "12em" }}>
							<Typography variant="h6" align="center">
								Website Development
							</Typography>
						</Grid>
						<Grid item>
							<img src={website} alt="computer outline" />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
