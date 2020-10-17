import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
// we must render this component conditionally

import ButtonArrow from "./ui/ButtonArrow";

import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";

const useStyles = makeStyles((theme) => ({
	background: {
		backgroundImage: `url(${background})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "60em",
		paddingBottom: "10em",
		[theme.breakpoints.down("md")]: {
			backgroundImage: `url(${mobileBackground})`,
		},
	},
	estimateButton: {
		...theme.typography.estimate,
		borderRadius: 50,
		hieght: 80,
		width: 205,
		backgroundColor: theme.palette.common.orange,
		fontSize: "1.5rem",
		marginRight: "5em",
		marginLeft: "2em",
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
		[theme.breakpoints.down("md")]: {
			marginLeft: 0,
			marginRight: 0,
		},
	},
	learnButton: {
		...theme.typography.learnButton,
		fontSize: "0.7rem",
		height: 35,
		padding: 5,
		[theme.breakpoints.down("md")]: {
			marginBottom: "2em",
		},
	},
	message: {
		border: `2px solid ${theme.palette.common.blue}`,
		marginTop: "5em",
		borderRadius: 5,
	},
	sendButton: {
		...theme.typography.estimate,
		borderRadius: 50,
		height: 45,
		width: 245,
		fontSize: "1rem",
		backgroundColor: theme.palette.common.orange,
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
		[theme.breakpoints.down("sm")]: {
			height: 40,
			width: 225,
		},
	},
}));

export default function Contact(props) {
	const classes = useStyles();
	const theme = useTheme();

	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

	//hooks
	const [name, setName] = useState("");

	const [email, setEmail] = useState("");
	const [emailHelper, setEmailHelper] = useState("");

	const [phone, setPhone] = useState("");
	const [phoneHelper, setPhoneHelper] = useState("");

	const [message, setMessage] = useState("");

	const [open, setOpen] = useState(false);

	const [loading, setLoading] = useState(false);

	const [alert, setAlert] = useState({
		open: false,
		message: "",
		backgroundColor: "",
	});

	const onChange = (event) => {
		let valid;

		switch (event.target.id) {
			case "email":
				setEmail(event.target.value);
				//how to make sure you have a valid email w/ a regex test values
				valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
					event.target.value
				);

				if (!valid) {
					setEmailHelper("Invalid Email");
				} else {
					setEmailHelper("");
				}
				break;
			case "phone":
				setPhone(event.target.value);
				valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
					event.target.value
				);

				if (!valid) {
					setPhoneHelper("Invalid Phone");
				} else {
					setPhoneHelper("");
				}
				break;
			default:
				break;
		}
	};

	const onConfirm = () => {
		setLoading(true);
		const cors = "https://cors-anywhere.herokuapp.com/";
		axios
			.get(
				`${cors}https://us-central1-material-ui-project-d27ca.cloudfunctions.net/sendMail`,
				{
					params: {
						name: name,
						email: email,
						phone: phone,
						message: message,
					},
				}
			)
			.then((res) => {
				setLoading(false);
				setOpen(false);
				setName("");
				setEmail("");
				setPhone("");
				setMessage("");
				setAlert({
					open: true,
					message: "Message sent successfully!",
					backgroundColor: "#4bb543",
				});
			})
			.catch((error) => {
				setLoading(false);
				setAlert({
					open: true,
					message: "Something went wrong, please try again.",
					backgroundColor: "#ff3232",
				});
			});
	};

	const buttonContents = (
		<React.Fragment>
			Send Message
			<img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} />
		</React.Fragment>
	);

	return (
		<Grid container direction="row">
			<Grid
				item
				container
				direction="column"
				justify="center"
				alignItems="center"
				style={{
					marginBottom: matchesMD ? "5em" : 0,
					marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
				}}
				lg={4}
				xl={3}
			>
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography
								variant="h2"
								align={matchesMD ? "center" : undefined}
								style={{ lineHeight: 1 }}
							>
								Contact Us
							</Typography>
							<Typography
								variant="body1"
								align={matchesMD ? "center" : undefined}
								style={{ color: theme.palette.common.blue }}
							>
								We're waiting.
							</Typography>
						</Grid>
						<Grid item container style={{ marginTop: "2em" }}>
							<Grid item>
								<img
									src={phoneIcon}
									alt="phone"
									style={{ marginRight: "0.5em" }}
								/>
							</Grid>
							<Grid item>
								<Typography
									variant="body1"
									style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
								>
									<a
										href="tel:5555555555"
										style={{ textDecoration: "none", color: "inherit" }}
									>
										555-555-5555
									</a>
								</Typography>
							</Grid>
						</Grid>
						<Grid item container syle={{ marginBottom: "2em" }}>
							<Grid item>
								<img
									src={emailIcon}
									alt="evelope"
									style={{ marginRight: "0.5em", verticalAlign: -2 }}
								/>
							</Grid>
							<Grid item>
								<Typography
									variant="body1"
									style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
								>
									<a
										href="mailto:lelandmshirley@gmail.com"
										style={{ textDecoration: "none", color: "inherit" }}
									>
										lelandmshirley@gmail.com
									</a>
								</Typography>
							</Grid>
						</Grid>
						<Grid item container direction="column" style={{ width: "20em" }}>
							<Grid item style={{ marginBottom: "0.5em" }}>
								<TextField
									label="Name"
									id="name"
									fullWidth
									value={name}
									onChange={(event) => setName(event.target.value)}
								/>
							</Grid>
							<Grid item style={{ marginBottom: "0.5em" }}>
								<TextField
									label="Email"
									error={emailHelper.length !== 0}
									helperText={emailHelper}
									id="email"
									fullWidth
									value={email}
									onChange={onChange}
								/>
							</Grid>
							<Grid item style={{ marginBottom: "0.5em" }}>
								<TextField
									label="Phone"
									error={phoneHelper.length !== 0}
									helperText={phoneHelper}
									id="phone"
									fullWidth
									value={phone}
									onChange={onChange}
								/>
							</Grid>
						</Grid>

						<Grid item style={{ width: "20em" }}>
							<TextField
								fullWidth
								InputProps={{ disableUnderline: true }}
								value={message}
								className={classes.message}
								id="message"
								onChange={(event) => setMessage(event.target.value)}
								multiline
								rows={10}
							/>
						</Grid>
						<Grid item container justify="center" style={{ marginTop: "2em" }}>
							<Button
								disabled={
									name.length === 0 ||
									message.length === 0 ||
									phoneHelper.length !== 0 ||
									emailHelper.length !== 0 ||
									email.length === 0 ||
									phone.length === 0
								}
								variant="contained"
								className={classes.sendButton}
								onClick={() => setOpen(true)}
							>
								{buttonContents}
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Dialog
				style={{ zIndex: 1302 }}
				open={open}
				fullScreen={matchesSM}
				onClose={() => setOpen(false)}
				PaperProps={{
					style: {
						paddingTop: matchesXS ? "1em" : "5em",
						paddingBottom: matchesXS ? "1em" : "5em",
						paddingLeft: matchesXS
							? 0
							: matchesSM
							? "5em"
							: matchesMD
							? "15em"
							: "25em",
						paddingRight: matchesXS
							? 0
							: matchesSM
							? "5em"
							: matchesMD
							? "15em"
							: "25em",
					},
				}}
			>
				<DialogContent>
					<Grid container direction="column">
						<Grid item>
							<Typography variant="h4" align="center" gutterBottom>
								Confirm Message
							</Typography>
						</Grid>

						<Grid item style={{ marginBottom: "0.5em" }}>
							<TextField
								label="Name"
								id="name"
								fullWidth
								value={name}
								onChange={(event) => setName(event.target.value)}
							/>
						</Grid>
						<Grid item style={{ marginBottom: "0.5em" }}>
							<TextField
								label="Email"
								error={emailHelper.length !== 0}
								helperText={emailHelper}
								id="email"
								fullWidth
								value={email}
								onChange={onChange}
							/>
						</Grid>
						<Grid item style={{ marginBottom: "0.5em" }}>
							<TextField
								label="Phone"
								error={phoneHelper.length !== 0}
								helperText={phoneHelper}
								id="phone"
								fullWidth
								value={phone}
								onChange={onChange}
							/>
						</Grid>
					</Grid>
					<Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
						<TextField
							fullWidth
							InputProps={{ disableUnderline: true }}
							value={message}
							className={classes.message}
							id="message"
							onChange={(event) => setMessage(event.target.value)}
							multiline
							rows={10}
						/>
					</Grid>
					<Grid
						item
						container
						direction={matchesSM ? "column" : "row"}
						style={{ marginTop: "2em" }}
						alignItems="center"
					>
						<Grid item>
							<Button
								onClick={() => setOpen(false)}
								color="primary"
								style={{ fontWeight: 300 }}
							>
								Cancel
							</Button>
						</Grid>
						<Grid item>
							<Button
								disabled={
									name.length === 0 ||
									message.length === 0 ||
									phoneHelper.length !== 0 ||
									emailHelper.length !== 0 ||
									email.length === 0 ||
									phone.length === 0
								}
								variant="contained"
								className={classes.sendButton}
								onClick={onConfirm}
							>
								{loading ? <CircularProgress size={30} /> : buttonContents}
							</Button>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>
			<Snackbar
				open={alert.open}
				message={alert.message}
				ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				onClose={() => setAlert({ ...alert, open: false })}
				autoHideDuration={4000}
			/>
			<Grid
				item
				container
				direction={matchesMD ? "column" : "row"}
				className={classes.background}
				alignItems="center"
				justify={matchesMD ? "center" : undefined}
				lg={8}
				xl={9}
			>
				<Grid
					item
					style={{
						marginLeft: matchesMD ? 0 : "3em",
						textAlign: matchesMD ? "center" : "inherit",
					}}
				>
					<Grid container direction="column">
						<Grid item>
							<Typography variant="h2" align={matchesMD ? "center" : undefined}>
								Simple Software.
								<br />
								Revolutionary Results.
							</Typography>
							<Typography
								variant="subtitle2"
								align={matchesMD ? "center" : undefined}
								style={{ fontSize: "1.5rem" }}
							>
								Take advantage of the 21st Century.
							</Typography>
							<Grid container justify={matchesMD ? "center" : undefined} item>
								<Button
									component={Link}
									to="/revolution"
									variant="outlined"
									className={classes.learnButton}
									onClick={() => props.setValue(2)}
								>
									<span style={{ marginRight: 5 }}>Learn More</span>
									<ButtonArrow
										width={10}
										height={10}
										fill={theme.palette.common.blue}
									/>
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<Button
						component={Link}
						to="/estimate"
						className={classes.estimateButton}
						variant="contained"
						onClick={() => props.setValue(5)}
					>
						Free Estimate
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}
