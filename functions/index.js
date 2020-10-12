const functions = require("firebase-functions");

const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
const cors = require("cors")({ origin: true });
admin.initializeApp();

//set up a transporter
const transporter = nodemailer.createTransport({
	//string gmail configures all settings needed for gmail services
	service: "Gmail",
	//auth takes a user and pw prop but we want to put it somewhere secure; store in a google firebase environment variable
	auth: { user: config.user.email, pass: config.user.password },
});

let mailOptions = {
	from: "Arc Development",
	to: "lelandshir@gmail.com",
	subject: "Testing nodemailer",
	text: "Test successful",
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
	cors(request, response, () => {
		transporter.sendMail(mailOptions, (error) => {
			if (error) {
				response.send(error);
			} else {
				response.send("Message sent successfuly");
			}
		});
	});
});
