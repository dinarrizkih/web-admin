const mongoose = require("mongoose");

var schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	nip: {
		type: String,
		maxLength: 10,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	divisi: {
		type: String,
		required: true,
		minLength: 3,
	},
	phone: {
		type: String,
		required: true,
		unique: true,
	},
	country: {
		type: String,
		required: true,
	},
	gender: String,
	status: String,
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
